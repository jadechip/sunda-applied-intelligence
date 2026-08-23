"use client";

import { RibbonFieldBackground } from "@designcodeio/threeui/components/RibbonFieldBackground";
import "@designcodeio/threeui/style.css";

export function RibbonFieldSectionVisual() {
  return (
    <div className="ribbon-field-section-visual" aria-hidden="true">
      <RibbonFieldBackground
        speed={1}
        pointerAmount={1}
        smoothing={0.035}
        hue={0}
        saturation={1}
        brightness={1}
        opacity={1}
      />
      <div className="ribbon-field-section-scrim" />
    </div>
  );
}
