import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(new URL(pathname, "http://localhost"), {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the GradNorm home page with light mode as the default", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>GradNorm — Expert data for real-world AI<\/title>/i);
  assert.match(html, /<link rel="canonical" href="https:\/\/gradnorm\.dev"\/>/i);
  assert.match(html, /<meta property="og:image" content="https:\/\/gradnorm\.dev\/og\.png"/i);
  assert.match(html, /Human expertise for AI that has to work in the real world\./);
  assert.match(html, /Build with GradNorm/);
  assert.match(html, /Explore opportunities/);
  assert.match(html, /Human expertise is the missing layer\./);
  assert.match(html, /The next leap requires more than generic data\./);
  assert.match(html, /localStorage\.getItem\("gradnorm-theme"\)==="dark"/);
  assert.doesNotMatch(html, /<html[^>]*class=["'][^"']*dark/i);
  assert.doesNotMatch(html, /codex-preview|Building your site/i);
});

test("renders the opportunities catalog and a representative detail page", async () => {
  const [catalogResponse, detailResponse] = await Promise.all([
    render("/opportunities"),
    render("/opportunities/ai-evaluation-engineer"),
  ]);

  assert.equal(catalogResponse.status, 200);
  assert.equal(detailResponse.status, 200);

  const [catalog, detail] = await Promise.all([
    catalogResponse.text(),
    detailResponse.text(),
  ]);

  assert.match(catalog, /Expert opportunities/);
  assert.match(catalog, /AI Evaluation Engineer/);
  assert.match(detail, /Apply for this project/);
  assert.match(detail, /Bring your expertise to the frontier\./);
});
