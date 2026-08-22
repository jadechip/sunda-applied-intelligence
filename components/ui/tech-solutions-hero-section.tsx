import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

interface TechSolutionsHeroVisualProps {
  className?: string;
}

const beamAngles = [-78, -56, -34, -12, 10, 32, 54, 76, 98, 120, 142, 164];

export function TechSolutionsHeroVisual({ className }: TechSolutionsHeroVisualProps) {
  return (
    <div className={cn("raycast-visual", className)} role="img" aria-label="Animated blue signal field">
      <div className="raycast-grid" aria-hidden="true" />
      <div className="raycast-sweep" aria-hidden="true" />
      <div className="raycast-orbit orbit-outer" aria-hidden="true" />
      <div className="raycast-orbit orbit-inner" aria-hidden="true" />
      <div className="raycast-beams" aria-hidden="true">
        {beamAngles.map((angle, index) => (
          <i
            key={angle}
            style={{
              "--beam-angle": `${angle}deg`,
              "--beam-delay": `${index * -0.31}s`,
              "--beam-length": `${260 + (index % 4) * 42}px`,
            } as CSSProperties}
          />
        ))}
      </div>
      <div className="raycast-core" aria-hidden="true">
        <i className="core-halo halo-one" />
        <i className="core-halo halo-two" />
        <i className="core-dot" />
      </div>
      <div className="raycast-particles" aria-hidden="true">
        {Array.from({ length: 18 }, (_, index) => (
          <i
            key={index}
            style={{
              "--particle-x": `${(index * 37 + 11) % 100}%`,
              "--particle-y": `${(index * 53 + 7) % 100}%`,
              "--particle-delay": `${index * -0.42}s`,
              "--particle-size": `${index % 3 === 0 ? 3 : 2}px`,
            } as CSSProperties}
          />
        ))}
      </div>
      <span className="raycast-frame frame-top" aria-hidden="true" />
      <span className="raycast-frame frame-right" aria-hidden="true" />
      <span className="raycast-frame frame-bottom" aria-hidden="true" />
      <span className="raycast-frame frame-left" aria-hidden="true" />
    </div>
  );
}
