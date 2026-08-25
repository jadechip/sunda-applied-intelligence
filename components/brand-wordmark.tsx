import { CircleDotDashed } from "lucide-react";

export function BrandWordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <span
      className={inverse
        ? "flex items-center gap-2.5 text-lg font-semibold tracking-[-0.035em] text-white"
        : "flex items-center gap-2.5 text-lg font-semibold tracking-[-0.035em] text-zinc-950 dark:text-zinc-50"}
    >
      <CircleDotDashed className="size-5 text-blue-500" strokeWidth={1.7} aria-hidden="true" />
      GradNorm
    </span>
  );
}
