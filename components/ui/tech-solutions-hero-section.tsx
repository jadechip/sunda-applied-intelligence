import { cn } from "@/lib/utils";

interface TechSolutionsHeroVisualProps {
  className?: string;
}

export function TechSolutionsHeroVisual({ className }: TechSolutionsHeroVisualProps) {
  return (
    <div
      className={cn("hero-ribbon-visual", className)}
      role="img"
      aria-label="Luminous blue ribbons crossing a dark field"
    >
      <img
        className="hero-ribbon-image"
        src="/hero-ribbon-field.png"
        alt=""
        aria-hidden="true"
      />
      <span className="hero-ribbon-blend" aria-hidden="true" />
    </div>
  );
}
