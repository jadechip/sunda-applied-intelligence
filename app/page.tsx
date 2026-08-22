import { CardDecorator, FeatureCard } from "@/components/ui/features-10";
import { FractalGlassHeroVisual } from "@/components/ui/fractal-glass-hero-visual";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  ArrowDown,
  ArrowUpRight,
  Blocks,
  CircleDotDashed,
  Globe2,
  Languages,
  Network,
  ScanSearch,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const signals = [
  { number: "01", title: "Operations", body: "Find the work that should move faster." },
  { number: "02", title: "Intelligence", body: "Turn real workflows into useful systems." },
  { number: "03", title: "Infrastructure", body: "Build for the way Southeast Asia works." },
  { number: "04", title: "Outcomes", body: "Start with the constraint, not the category." },
];

const focusAreas: Array<{
  icon: LucideIcon;
  number: string;
  title: string;
  body: string;
  tag: string;
}> = [
  {
    icon: Workflow,
    number: "01",
    title: "Complex operations",
    body: "Workflows held together by expert judgment, handoffs, and hard-won context.",
    tag: "Make the invisible visible",
  },
  {
    icon: Network,
    number: "02",
    title: "Fragmented decisions",
    body: "Important choices spread across tools, teams, languages, and markets.",
    tag: "Connect the signals",
  },
  {
    icon: ScanSearch,
    number: "03",
    title: "New interfaces",
    body: "Systems that understand how work happens—not just what a form says.",
    tag: "Design for real behaviour",
  },
  {
    icon: Blocks,
    number: "04",
    title: "Trusted scale",
    body: "Practical intelligence that earns its place inside critical workflows.",
    tag: "Prove value in context",
  },
];

const principles = [
  ["Close to the work", "The useful problem is usually one layer below the obvious one."],
  ["Specific before scalable", "We make the smallest version that can change a real outcome."],
  ["Built for the region", "Local context is product infrastructure, not a translation layer."],
];

const useCases = [
  "Wallets",
  "Metering",
  "Marketplaces",
  "Gaming",
  "Subscriptions",
  "Neobank / BaaS",
  "Currency Exchange",
  "Coupon and Rewards System",
  "AI Credits",
  "Lending & Credit Lines",
];

function Wordmark() {
  return (
    <span className="flex items-center gap-2.5 text-lg font-semibold tracking-[-0.035em] text-zinc-950 dark:text-zinc-50">
      <CircleDotDashed className="size-5 text-blue-600" strokeWidth={1.7} aria-hidden="true" />
      Sunda
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">{children}</p>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-zinc-950 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-50">
      <section className="hero dark" id="top">
        <FractalGlassHeroVisual />
        <header className="relative z-10 mx-auto flex h-16 max-w-6xl items-center justify-between border-b border-zinc-200 px-6 dark:border-zinc-800 lg:px-8">
          <a href="#top" aria-label="Sunda home"><Wordmark /></a>
          <nav className="hidden items-center gap-7 text-sm text-zinc-500 dark:text-zinc-400 md:flex" aria-label="Primary navigation">
            <a className="transition hover:text-zinc-950 dark:hover:text-white" href="#approach">Approach</a>
            <a className="transition hover:text-zinc-950 dark:hover:text-white" href="#focus">Focus</a>
            <a className="transition hover:text-zinc-950 dark:hover:text-white" href="#use-cases">Use cases</a>
            <a className="transition hover:text-zinc-950 dark:hover:text-white" href="#region">Why here</a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a className="inline-flex h-9 items-center gap-2 border border-zinc-300 bg-white px-3.5 text-sm font-medium shadow-sm transition hover:border-blue-600 hover:text-blue-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-blue-500 dark:hover:text-blue-400" href="#contact">
              Talk to us <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </header>

        <div className="hero-intro relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1fr_1.08fr] lg:gap-10 lg:px-8 lg:py-32">
          <div className="relative z-10">
            <p className="mb-6 flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
              <i className="size-1.5 rounded-full bg-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,.1)]" />
              Applied intelligence / Southeast Asia
            </p>
            <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[.98] tracking-[-0.058em] sm:text-6xl lg:text-[74px]">
              Intelligence for the work that moves Southeast Asia.
            </h1>
            <p className="mt-7 max-w-xl text-balance text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              We work with ambitious operators to turn complex, high-friction
              workflows into systems that learn, adapt, and scale.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex h-12 items-center justify-center gap-8 bg-blue-600 px-5 text-sm font-medium text-white transition hover:bg-blue-700" href="#contact">
                Start a conversation <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <a className="inline-flex h-12 items-center justify-center gap-8 border border-zinc-300 bg-white px-5 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-500" href="#approach">
                See how we think <ArrowDown className="size-4 text-blue-600" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto grid max-w-6xl border-x border-t border-zinc-200 bg-white/90 dark:border-zinc-800 dark:bg-zinc-900/90 sm:grid-cols-2 lg:grid-cols-4">
          {signals.map((signal) => (
            <article className="min-h-28 border-b border-r border-zinc-200 p-5 last:border-r-0 dark:border-zinc-800 lg:border-b-0" key={signal.number}>
              <span className="float-right font-mono text-[9px] text-zinc-300 dark:text-zinc-700">{signal.number}</span>
              <h2 className="mt-4 text-sm font-medium">{signal.title}</h2>
              <p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">{signal.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-900/45 md:py-32" id="approach">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-10 md:grid-cols-[1fr_360px] md:items-end">
            <div>
              <SectionLabel>Our approach</SectionLabel>
              <h2 className="mt-7 max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                The most valuable systems begin with a better question.
              </h2>
            </div>
            <div className="space-y-4 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
              <p>We begin before the product brief—close to the people already doing the work.</p>
              <p>No fixed platform. No solution looking for a problem. We find the constraint and build toward a measurable change.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32" id="focus">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-10 md:grid-cols-[1fr_340px] md:items-end">
            <div>
              <SectionLabel>Where we are looking</SectionLabel>
              <h2 className="mt-7 max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                Opportunity hides in the work between the systems.
              </h2>
            </div>
            <p className="text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
              We are especially curious where complexity is normal, context
              matters, and today&apos;s tools stop just short of the real job.
            </p>
          </div>

          <div className="mt-16 grid border-l border-t border-zinc-200 dark:border-zinc-800 sm:grid-cols-2">
            {focusAreas.map(({ icon: Icon, ...area }) => (
              <article className="group relative min-h-72 border-b border-r border-zinc-200 p-6 transition hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900/60 sm:p-8" key={area.number}>
                <CardDecorator />
                <div className="flex items-start justify-between">
                  <span className="grid size-9 place-items-center border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
                    <Icon className="size-4 text-blue-600" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-[9px] text-zinc-300 dark:text-zinc-700">{area.number}</span>
                </div>
                <h3 className="mt-14 text-2xl font-semibold tracking-[-0.035em]">{area.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-500 dark:text-zinc-400">{area.body}</p>
                <p className="mt-7 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.13em] text-blue-600">
                  {area.tag} <ArrowUpRight className="size-3" aria-hidden="true" />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white py-24 dark:border-zinc-800 dark:bg-zinc-950 md:py-32" id="use-cases" aria-labelledby="use-cases-title">
        <div className="mx-auto max-w-5xl px-6">
          <SectionLabel>Use cases</SectionLabel>
          <h2 id="use-cases-title" className="mt-7 max-w-4xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-6xl">
            <span>Products that move value.</span>{" "}
            <span className="text-zinc-400 dark:text-zinc-600">Explore the use cases.</span>
          </h2>

          <div className="mt-14 grid border-t border-zinc-200 dark:border-zinc-800 md:grid-cols-2 md:gap-x-8">
            {useCases.map((useCase, index) => (
              <a
                className="group flex min-h-24 items-center justify-between gap-4 border-b border-zinc-200 px-3 py-6 transition-colors hover:bg-blue-50/70 focus-visible:bg-blue-50/70 dark:border-zinc-800 dark:hover:bg-blue-950/20 dark:focus-visible:bg-blue-950/20 sm:px-4 sm:py-7"
                href="#contact"
                aria-label={`Discuss ${useCase} with Sunda`}
                key={useCase}
              >
                <span className="flex min-w-0 items-center gap-4 sm:gap-6">
                  <span className="font-mono text-[10px] text-zinc-400 transition-colors group-hover:text-blue-600 dark:text-zinc-600 dark:group-hover:text-blue-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 text-xl font-semibold leading-tight tracking-[-0.03em] sm:text-2xl">
                    {useCase}
                  </span>
                </span>
                <ArrowUpRight className="size-5 shrink-0 text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-blue-600 dark:text-zinc-600 dark:group-hover:text-blue-400" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="region-panel relative overflow-hidden bg-zinc-950 py-24 text-white md:py-32" id="region">
        <div className="region-grid" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-5xl gap-16 px-6 lg:grid-cols-[1fr_380px] lg:items-end">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-400">Why here</p>
            <h2 className="mt-7 max-w-3xl text-balance text-5xl font-semibold leading-[.98] tracking-[-0.055em] md:text-7xl">
              Built from here, for complexity everywhere.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              Southeast Asia is not one market or one operating model. That is
              exactly the point. The region rewards systems that handle
              difference, move with context, and create clarity without
              flattening what makes each business work.
            </p>
          </div>
          <FeatureCard className="border-zinc-700 bg-zinc-900 p-6 text-white shadow-none">
            <div className="flex items-center justify-between">
              <Globe2 className="size-5 text-blue-400" strokeWidth={1.6} aria-hidden="true" />
              <span className="font-mono text-[9px] tracking-[0.12em] text-zinc-500">REGIONAL THESIS</span>
            </div>
            <div className="mt-20 space-y-2 text-3xl font-semibold tracking-[-0.045em]">
              <p>Many markets.</p>
              <p>Many languages.</p>
              <p>One region in motion.</p>
            </div>
            <div className="mt-20 flex items-center gap-2 border-t border-dashed border-zinc-700 pt-4 text-xs text-zinc-500">
              <Languages className="size-3.5" aria-hidden="true" />
              Context is infrastructure
            </div>
          </FeatureCard>
        </div>
      </section>

      <section className="bg-zinc-50 py-24 dark:bg-zinc-900/45 md:py-32" id="about">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-10 md:grid-cols-[1fr_340px] md:items-end">
            <div>
              <SectionLabel>How we work</SectionLabel>
              <h2 className="mt-7 max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                A venture studio for unresolved work.
              </h2>
            </div>
            <p className="text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
              We partner with operators to understand stubborn problems and
              explore what a genuinely useful system could become.
            </p>
          </div>
          <div className="mt-16 grid border-l border-t border-zinc-200 dark:border-zinc-800 md:grid-cols-3">
            {principles.map(([title, body], index) => (
              <article className="relative flex min-h-64 flex-col border-b border-r border-zinc-200 bg-white p-7 dark:border-zinc-800 dark:bg-zinc-900/70" key={title}>
                <CardDecorator />
                <span className="font-mono text-[9px] text-zinc-300 dark:text-zinc-700">0{index + 1}</span>
                <Sparkles className="mt-8 size-4 text-blue-600" strokeWidth={1.7} aria-hidden="true" />
                <h3 className="mt-auto text-xl font-semibold tracking-[-0.035em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white py-24 dark:border-zinc-800 dark:bg-zinc-950 md:py-32" id="contact">
        <div className="mx-auto max-w-5xl px-6">
          <FeatureCard className="bg-white px-6 py-10 dark:bg-zinc-900/70 sm:px-10 md:px-14 md:py-14">
            <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-end">
              <div>
                <SectionLabel>Start here</SectionLabel>
                <h2 className="mt-7 max-w-2xl text-balance text-5xl font-semibold leading-[.98] tracking-[-0.055em] md:text-7xl">
                  Tell us where the work gets stuck.
                </h2>
              </div>
              <div>
                <p className="text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
                  If you are close to a high-friction workflow, a messy
                  decision, or an opportunity existing software keeps missing,
                  we would like to hear about it.
                </p>
                <a className="mt-7 flex h-13 items-center justify-between bg-blue-600 px-5 text-sm font-medium text-white transition hover:bg-blue-700" href="mailto:hello@sunda.works?subject=A%20hard%20problem%20for%20Sunda">
                  Start a conversation <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
                <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-400">30 minutes. No pitch required.</p>
              </div>
            </div>
          </FeatureCard>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-12 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <a href="#top" aria-label="Back to top"><Wordmark /></a>
            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">Applied intelligence, built in Southeast Asia.</p>
          </div>
          <div className="flex gap-6 text-sm text-zinc-500 dark:text-zinc-400">
            <a className="hover:text-zinc-950 dark:hover:text-white" href="mailto:hello@sunda.works">Email</a>
            <a className="hover:text-zinc-950 dark:hover:text-white" href="#top">Back to top ↑</a>
          </div>
          <p className="border-t border-zinc-200 pt-5 font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-400 dark:border-zinc-800 dark:text-zinc-600 sm:col-span-2">
            © 2026 Sunda. Working title.
          </p>
        </div>
      </footer>
    </main>
  );
}
