import { cn } from "@/lib/utils";

interface TechSolutionsHeroVisualProps {
  className?: string;
}

export function TechSolutionsHeroVisual({ className }: TechSolutionsHeroVisualProps) {
  return (
    <div
      className={cn("hero-ribbon-visual", className)}
      role="img"
      aria-label="Teal light passing through vertical folded forms"
    >
      <img
        className="hero-ribbon-image"
        src="/hero-teal-folds.jpg"
        alt=""
        aria-hidden="true"
      />
      <span className="hero-ribbon-blend" aria-hidden="true" />
    </div>
  );
}
