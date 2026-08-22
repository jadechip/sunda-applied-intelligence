import type { Metadata } from "next";
import { FractalGlassHeroVisual } from "@/components/ui/fractal-glass-hero-visual";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  CircleDotDashed,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sunda Hero Experiment — Fractal Glass",
  description: "An experimental fractal-glass hero direction for Sunda.",
  openGraph: {
    title: "Sunda Hero Experiment — Fractal Glass",
    description: "An experimental fractal-glass hero direction for Sunda.",
    images: [],
  },
  twitter: {
    title: "Sunda Hero Experiment — Fractal Glass",
    description: "An experimental fractal-glass hero direction for Sunda.",
    images: [],
  },
};

const signals = [
  { number: "01", title: "Operations", body: "Find the work that should move faster." },
  { number: "02", title: "Intelligence", body: "Turn real workflows into useful systems." },
  { number: "03", title: "Infrastructure", body: "Build for the way Southeast Asia works." },
  { number: "04", title: "Outcomes", body: "Start with the constraint, not the category." },
];

function Wordmark() {
  return (
    <span className="flex items-center gap-2.5 text-lg font-semibold tracking-[-0.035em] text-white">
      <CircleDotDashed className="size-5 text-blue-400" strokeWidth={1.7} aria-hidden="true" />
      Sunda
    </span>
  );
}

export default function HeroExperiment() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="glass-experiment-hero" id="top">
        <FractalGlassHeroVisual />

        <header className="relative z-20 mx-auto flex h-16 max-w-6xl items-center justify-between border-b border-white/15 px-5 sm:px-6 lg:px-8">
          <a href="/" aria-label="Sunda home"><Wordmark /></a>
          <div className="flex items-center gap-2">
            <a className="hidden h-9 items-center gap-2 border border-white/20 bg-black/20 px-3.5 text-sm text-zinc-300 backdrop-blur-sm transition hover:border-blue-400 hover:text-white sm:inline-flex" href="/">
              <ArrowLeft className="size-3.5" aria-hidden="true" /> Current version
            </a>
            <a className="glass-light-button inline-flex h-9 items-center gap-2 bg-white px-3.5 text-sm font-medium transition hover:bg-blue-50" href="/#contact">
              Talk to us <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-between px-5 pb-0 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-300">
              <i className="size-1.5 rounded-full bg-blue-400 shadow-[0_0_0_4px_rgba(96,165,250,.14)]" />
              Applied intelligence / Southeast Asia
            </p>
            <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[.96] tracking-[-0.058em] sm:text-6xl lg:text-[78px]">
              Intelligence for the work that moves Southeast Asia.
            </h1>
            <p className="mt-7 max-w-xl text-balance text-lg leading-8 text-zinc-300">
              We work with ambitious operators to turn complex, high-friction
              workflows into systems that learn, adapt, and scale.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex h-12 items-center justify-center gap-8 bg-blue-600 px-5 text-sm font-medium text-white transition hover:bg-blue-500" href="/#contact">
                Start a conversation <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <a className="inline-flex h-12 items-center justify-center gap-8 border border-white/25 bg-black/25 px-5 text-sm font-medium text-white backdrop-blur-sm transition hover:border-blue-400/70 hover:bg-black/40" href="/#approach">
                See how we think <ArrowDown className="size-4 text-blue-400" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mt-20 grid border-x border-t border-white/15 bg-black/35 backdrop-blur-md sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
            {signals.map((signal) => (
              <article className="min-h-28 border-b border-r border-white/15 p-5 last:border-r-0 lg:border-b-0" key={signal.number}>
                <span className="float-right font-mono text-[9px] text-blue-300/45">{signal.number}</span>
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
