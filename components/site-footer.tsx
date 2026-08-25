import { BrandWordmark } from "@/components/brand-wordmark";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-12 sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <a href="/" aria-label="GradNorm home"><BrandWordmark /></a>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">Expert data and real-world evaluations, built in Southeast Asia.</p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-zinc-500 dark:text-zinc-400">
          <a className="hover:text-zinc-950 dark:hover:text-white" href="/opportunities">Opportunities</a>
          <a className="hover:text-zinc-950 dark:hover:text-white" href="mailto:hello@gradnorm.ai">Email</a>
          <a className="hover:text-zinc-950 dark:hover:text-white" href="/">Home</a>
        </div>
        <p className="border-t border-zinc-200 pt-5 font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-400 dark:border-zinc-800 dark:text-zinc-600 sm:col-span-2">
          © 2026 GradNorm. Singapore.
        </p>
      </div>
    </footer>
  );
}
