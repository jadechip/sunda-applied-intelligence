"use client";

import { useEffect, useRef } from "react";

const vertexShaderSource = `
  attribute vec2 a_position;
  varying vec2 v_uv;

  void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const simplexNoiseSource = `
  vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec2 mod289(vec2 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec3 permute(vec3 x) {
    return mod289(((x * 34.0) + 10.0) * x);
  }

  float snoise(vec2 v) {
    const vec4 C = vec4(
      0.211324865405187,
      0.366025403784439,
      -0.577350269189626,
      0.024390243902439
    );

    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = x0.x > x0.y ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);

    vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0)) +
      i.x + vec3(0.0, i1.x, 1.0)
    );
    vec3 m = max(
      0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)),
      0.0
    );
    m = m * m;
    m = m * m;

    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);

    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }
`;

const noiseFragmentShaderSource = `
  precision highp float;

  uniform float u_time;
  uniform vec2 u_noise_scale;
  uniform float u_warp_speed;
  varying vec2 v_uv;

  ${simplexNoiseSource}

  void main() {
    float time = u_time * u_warp_speed;
    float noiseX = snoise(v_uv * u_noise_scale + time * 0.5);
    float noiseY = snoise(v_uv * u_noise_scale * 0.93 - time * 0.3);
    gl_FragColor = vec4(noiseX * 0.5 + 0.5, noiseY * 0.5 + 0.5, 0.0, 1.0);
  }
`;

const glassFragmentShaderSource = `
  precision highp float;

  uniform float u_pixel_ratio;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform float u_warp_strength;
  uniform sampler2D u_noise_map;
  uniform sampler2D u_grain_map;
  uniform float u_grain_strength;
  uniform float u_flute_width;
  uniform float u_flute_strength;
  uniform float u_exposure;
  uniform vec3 u_color_1;
  uniform vec3 u_color_2;
  uniform vec3 u_color_3;
  uniform vec3 u_color_4;
  uniform vec3 u_color_5;
  varying vec2 v_uv;

  vec2 rotate2d(vec2 value, float angle) {
    float sine = sin(angle);
    float cosine = cos(angle);
    return mat2(cosine, -sine, sine, cosine) * value;
  }

  float atanhSafe(float value) {
    float limited = min(value, 0.9999);
    return 0.5 * log((1.0 + limited) / (1.0 - limited));
  }

  vec3 gradientScene(vec2 uv) {
    float time = u_time * 0.6 + 3.5;

    vec2 p1 = vec2(-0.32 + sin(time * 0.5 + 1.8) * 0.20, -0.12 + cos(time * 0.8 + 0.3) * 0.16);
    vec2 p2 = vec2( 0.10 + sin(time * 0.6 + 2.5) * 0.14,  0.24 + cos(time * 0.3 + 1.7) * 0.18);
    vec2 p3 = vec2(-0.15 + sin(time * 0.9 + 0.7) * 0.22, -0.08 + cos(time * 0.5 + 2.9) * 0.11);
    vec2 p4 = vec2( 0.28 + sin(time * 0.4 + 3.1) * 0.17,  0.18 + cos(time * 0.6 + 0.9) * 0.20);
    vec2 p5 = vec2(-0.05 + sin(time * 0.7 + 4.2) * 0.13, -0.20 + cos(time * 0.9 + 1.5) * 0.15);

    vec2 warp = texture2D(u_noise_map, v_uv).rg * 2.0 - 1.0;
    vec2 warpedUv = uv + vec2(warp.r * u_warp_strength, warp.g * u_warp_strength * 0.2);

    vec2 d1 = rotate2d(warpedUv - p1, 0.3);
    vec2 d2 = rotate2d(warpedUv - p2, -1.1);
    vec2 d3 = rotate2d(warpedUv - p3, 0.8);
    vec2 d4 = rotate2d(warpedUv - p4, -0.5);
    vec2 d5 = rotate2d(warpedUv - p5, 1.4);

    float e1 = d1.x * d1.x * 8.0 + d1.y * d1.y * 1.0;
    float e2 = d2.x * d2.x * 25.0 + d2.y * d2.y * 12.0;
    float e3 = d3.x * d3.x * 6.0 + d3.y * d3.y * 14.0;
    float e4 = d4.x * d4.x * 20.0 + d4.y * d4.y * 8.0;
    float e5 = d5.x * d5.x * 30.0 + d5.y * d5.y * 15.0;

    vec3 color = vec3(0.002, 0.007, 0.045);
    color += u_color_1 * exp(-e1) * 1.4;
    color += u_color_2 * exp(-e2) * 2.0;
    color += u_color_3 * exp(-e3) * 1.6;
    color += u_color_4 * exp(-e4) * 1.3;
    color += u_color_5 * exp(-e5) * 0.8;
    return color;
  }

  void main() {
    vec2 mapped = gl_FragCoord.xy / u_pixel_ratio - u_resolution * 0.5;
    vec2 scaled = mapped / vec2(u_flute_width);
    float flutePosition = fract(scaled.x);
    float refractedX = u_flute_strength * (flutePosition - 0.5);
    float refractedY = -u_flute_strength * atanhSafe(pow(flutePosition, 6.0));
    vec2 flutedUv = (mapped + vec2(refractedX, refractedY)) / 1000.0;

    vec3 color = gradientScene(flutedUv);
    color = 1.0 - exp(-color * u_exposure);

    vec2 grainUv = v_uv * max(u_resolution * u_pixel_ratio / 512.0, vec2(1.0));
    float grain = texture2D(u_grain_map, grainUv).r * 2.0 - 1.0;
    float brightness = max(color.r, max(color.g, color.b));
    color += grain * u_grain_strength * brightness;
    color = clamp(color, 0.0, 1.0);

    gl_FragColor = vec4(color, 1.0);
  }
`;

function compileShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;

  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function createProgram(
  gl: WebGLRenderingContext,
  vertexShader: WebGLShader,
  fragmentShader: WebGLShader,
) {
  const program = gl.createProgram();
  if (!program) return null;

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }

  return program;
}

function createGrainTexture(gl: WebGLRenderingContext) {
  const size = 512;
  const data = new Uint8Array(size * size * 4);
  let seed = 2047;

  for (let index = 0; index < size * size; index += 1) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    const random = seed / 4294967296;
    const value = Math.max(0, Math.min(255, Math.round(128 + (random - 0.5) * 96)));
    const offset = index * 4;
    data[offset] = value;
    data[offset + 1] = value;
    data[offset + 2] = value;
    data[offset + 3] = 255;
  }

  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, size, size, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
  return texture;
}

export function FractalGlassHeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      powerPreference: "high-performance",
    });
    if (!gl) return;

    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const noiseShader = compileShader(gl, gl.FRAGMENT_SHADER, noiseFragmentShaderSource);
    const glassShader = compileShader(gl, gl.FRAGMENT_SHADER, glassFragmentShaderSource);
    if (!vertexShader || !noiseShader || !glassShader) return;

    const noiseProgram = createProgram(gl, vertexShader, noiseShader);
    const glassProgram = createProgram(gl, vertexShader, glassShader);
    if (!noiseProgram || !glassProgram) return;

    const quadBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const noiseTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, noiseTexture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 256, 256, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.MIRRORED_REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.MIRRORED_REPEAT);

    const noiseFramebuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, noiseFramebuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, noiseTexture, 0);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    const grainTexture = createGrainTexture(gl);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrame = 0;
    let currentPixelRatio = 1;
    const startTime = performance.now();

    const bindQuad = (program: WebGLProgram) => {
      gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
      const position = gl.getAttribLocation(program, "a_position");
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    };

    const resize = () => {
      currentPixelRatio = Math.min(window.devicePixelRatio || 1, 1.75);
      const width = Math.max(1, Math.floor(canvas.clientWidth * currentPixelRatio));
      const height = Math.max(1, Math.floor(canvas.clientHeight * currentPixelRatio));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const render = (now: number) => {
      resize();
      const elapsed = reducedMotion ? 0 : (now - startTime) / 1000;

      gl.bindFramebuffer(gl.FRAMEBUFFER, noiseFramebuffer);
      gl.viewport(0, 0, 256, 256);
      gl.useProgram(noiseProgram);
      bindQuad(noiseProgram);
      gl.uniform1f(gl.getUniformLocation(noiseProgram, "u_time"), elapsed);
      gl.uniform2f(gl.getUniformLocation(noiseProgram, "u_noise_scale"), 0.35, 0.55);
      gl.uniform1f(gl.getUniformLocation(noiseProgram, "u_warp_speed"), 0.12);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(glassProgram);
      bindQuad(glassProgram);
      gl.uniform1f(gl.getUniformLocation(glassProgram, "u_pixel_ratio"), currentPixelRatio);
      gl.uniform1f(gl.getUniformLocation(glassProgram, "u_time"), elapsed);
      gl.uniform2f(
        gl.getUniformLocation(glassProgram, "u_resolution"),
        canvas.width / currentPixelRatio,
        canvas.height / currentPixelRatio,
      );
      gl.uniform1f(gl.getUniformLocation(glassProgram, "u_warp_strength"), 0.4);
      gl.uniform1f(gl.getUniformLocation(glassProgram, "u_grain_strength"), 0.38);
      gl.uniform1f(gl.getUniformLocation(glassProgram, "u_flute_width"), 70.0);
      gl.uniform1f(gl.getUniformLocation(glassProgram, "u_flute_strength"), 140.0);
      gl.uniform1f(gl.getUniformLocation(glassProgram, "u_exposure"), 0.9);

      gl.uniform3f(gl.getUniformLocation(glassProgram, "u_color_1"), 0.015, 0.12, 0.74);
      gl.uniform3f(gl.getUniformLocation(glassProgram, "u_color_2"), 0.02, 0.34, 1.0);
      gl.uniform3f(gl.getUniformLocation(glassProgram, "u_color_3"), 0.08, 0.58, 1.0);
      gl.uniform3f(gl.getUniformLocation(glassProgram, "u_color_4"), 0.08, 0.78, 0.98);
      gl.uniform3f(gl.getUniformLocation(glassProgram, "u_color_5"), 0.32, 0.92, 1.0);

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, noiseTexture);
      gl.uniform1i(gl.getUniformLocation(glassProgram, "u_noise_map"), 0);
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, grainTexture);
      gl.uniform1i(gl.getUniformLocation(glassProgram, "u_grain_map"), 1);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      if (!reducedMotion) animationFrame = requestAnimationFrame(render);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    animationFrame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      gl.deleteTexture(noiseTexture);
      gl.deleteTexture(grainTexture);
      gl.deleteFramebuffer(noiseFramebuffer);
      gl.deleteBuffer(quadBuffer);
      gl.deleteProgram(noiseProgram);
      gl.deleteProgram(glassProgram);
      gl.deleteShader(vertexShader);
      gl.deleteShader(noiseShader);
      gl.deleteShader(glassShader);
    };
  }, []);

  return (
    <div className="fractal-glass-visual" aria-hidden="true">
      <canvas ref={canvasRef} />
      <span className="fractal-glass-shade" />
    </div>
  );
}
