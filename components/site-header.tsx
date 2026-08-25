import { BrandWordmark } from "@/components/brand-wordmark";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function SiteHeader({ inverse = false }: { inverse?: boolean }) {
  const navClass = inverse
    ? "text-zinc-400 hover:text-white"
    : "text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white";

  return (
    <header className={inverse
      ? "relative z-20 mx-auto flex h-16 max-w-6xl items-center justify-between border-b border-zinc-800 px-6 lg:px-8"
      : "relative z-20 mx-auto flex h-16 max-w-6xl items-center justify-between border-b border-zinc-200 px-6 dark:border-zinc-800 lg:px-8"}
    >
      <Link href="/" aria-label="GradNorm home"><BrandWordmark inverse={inverse} /></Link>
      <nav className="hidden items-center gap-7 text-sm md:flex" aria-label="Primary navigation">
        <Link className={`transition ${navClass}`} href="/#approach">For AI teams</Link>
        <Link className={`transition ${navClass}`} href="/opportunities">Opportunities</Link>
        <Link className={`transition ${navClass}`} href="/#principles">Principles</Link>
      </nav>
      <div className="flex items-center gap-2">
        {!inverse && <ThemeToggle />}
        <Link
          className={inverse
            ? "inline-flex h-9 items-center gap-2 border border-zinc-700 bg-zinc-900 px-3.5 text-sm font-medium text-zinc-100 transition hover:border-blue-500 hover:text-blue-400"
            : "inline-flex h-9 items-center gap-2 border border-zinc-300 bg-white px-3.5 text-sm font-medium shadow-sm transition hover:border-blue-600 hover:text-blue-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-blue-500 dark:hover:text-blue-400"}
          href="/opportunities"
        >
          Find work <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}
