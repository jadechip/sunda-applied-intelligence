"use client";

import { RibbonFieldBackground } from "@designcodeio/threeui/components/RibbonFieldBackground";
import "@designcodeio/threeui/style.css";
import { useEffect, useRef, useState } from "react";

export function RibbonFieldSectionVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsReady(true);
        observer.disconnect();
      },
      { rootMargin: "320px 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="ribbon-field-section-visual" aria-hidden="true">
      {isReady && (
        <RibbonFieldBackground
          speed={1}
          pointerAmount={1}
          smoothing={0.035}
          hue={0}
          saturation={1}
          brightness={1}
          opacity={1}
        />
      )}
      <div className="ribbon-field-section-scrim" />
    </div>
  );
}
