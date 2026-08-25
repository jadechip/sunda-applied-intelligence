import type { Metadata } from "next";
import { BrandWordmark } from "@/components/brand-wordmark";
import { FractalGlassHeroVisual } from "@/components/ui/fractal-glass-hero-visual";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "GradNorm Hero Experiment — Fractal Glass",
  description: "An experimental fractal-glass hero direction for GradNorm.",
  openGraph: {
    title: "GradNorm Hero Experiment — Fractal Glass",
    description: "An experimental fractal-glass hero direction for GradNorm.",
    images: [],
  },
  twitter: {
    title: "GradNorm Hero Experiment — Fractal Glass",
    description: "An experimental fractal-glass hero direction for GradNorm.",
    images: [],
  },
};

const signals = [
  { label: "EXPERTS", title: "Vetted specialists", body: "Domain experts selected for judgment, communication, and real-world experience." },
  { label: "TRAINING", title: "High-signal data", body: "Expert demonstrations and feedback built around the work models need to learn." },
  { label: "EVALUATION", title: "Real-world benchmarks", body: "Controlled environments and measurable outcomes for agents operating beyond the API." },
];

export default function HeroExperiment() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="glass-experiment-hero" id="top">
        <FractalGlassHeroVisual />

        <header className="relative z-20 mx-auto flex h-16 max-w-6xl items-center justify-between border-b border-white/15 px-5 sm:px-6 lg:px-8">
          <a href="/" aria-label="GradNorm home"><BrandWordmark inverse /></a>
          <div className="flex items-center gap-2">
            <ThemeToggle inverse />
            <a className="hidden h-9 items-center gap-2 border border-white/20 bg-black px-3.5 text-sm text-white transition hover:border-blue-600 hover:bg-blue-600 sm:inline-flex" href="/">
              <ArrowLeft className="size-3.5" aria-hidden="true" /> Current version
            </a>
            <a className="inline-flex h-9 items-center gap-2 bg-blue-600 px-3.5 text-sm font-medium text-white transition hover:bg-blue-700" href="/#contact">
              Talk to us <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-between px-5 pb-0 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-300">
              <i className="size-1.5 rounded-full bg-blue-400 shadow-[0_0_0_4px_rgba(96,165,250,.14)]" />
              Expert data / real-world evaluation
            </p>
            <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[.96] tracking-[-0.058em] sm:text-6xl lg:text-[78px]">
              Human expertise for AI that has to work in the real world.
            </h1>
            <p className="mt-7 max-w-xl text-balance text-lg leading-8 text-zinc-300">
              GradNorm connects frontier AI teams with vetted specialists to
              create high-quality training data, evaluations, and real-world environments.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex h-12 items-center justify-center gap-8 bg-blue-600 px-5 text-sm font-medium text-white transition hover:bg-blue-700" href="/#contact">
                Build with GradNorm <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <a className="inline-flex h-12 items-center justify-center gap-8 border border-white/25 bg-black px-5 text-sm font-medium text-white transition hover:border-blue-600 hover:bg-blue-600" href="/opportunities">
                Explore opportunities <ArrowDown className="size-4 text-blue-400" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mt-20 grid border-x border-t border-white/15 bg-black/35 backdrop-blur-md sm:grid-cols-3 lg:mt-24">
            {signals.map((signal) => (
              <article className="min-h-28 border-b border-r border-white/15 p-5 last:border-r-0 sm:border-b-0" key={signal.title}>
                <span className="float-right font-mono text-[9px] text-blue-300/45">{signal.label}</span>
                <h2 className="mt-4 text-sm font-medium">{signal.title}</h2>
                <p className="mt-1 text-xs leading-5 text-zinc-400">{signal.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
