import { CardDecorator, FeatureCard } from "@/components/ui/features-10";
import { FractalGlassHeroVisual } from "@/components/ui/fractal-glass-hero-visual";
import { RibbonFieldSectionVisual } from "@/components/ui/ribbon-field-section-visual";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  ArrowDown,
  ArrowUpRight,
  Blocks,
  CircleDotDashed,
  Network,
  ScanSearch,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const signals = [
  {
    label: "ENVIRONMENTS",
    title: "Software twins",
    body: "Resettable replicas of the interfaces where difficult work still happens.",
  },
  {
    label: "EVALUATION",
    title: "Expert tasks",
    body: "Real workflows shaped with people who understand the decisions behind them.",
  },
  {
    label: "SIGNALS",
    title: "Graders & traces",
    body: "Measurable outcomes, with a path from benchmark to training.",
  },
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
    title: "A working environment",
    body: "A purpose-built twin of the relevant product surface, seeded for repeatable evaluation.",
    tag: "Controlled and resettable",
  },
  {
    icon: Network,
    number: "02",
    title: "Tasks from practice",
    body: "Scenarios shaped with experienced marketplace sellers, in Thai and English.",
    tag: "Grounded in real work",
  },
  {
    icon: ScanSearch,
    number: "03",
    title: "Clear outcomes",
    body: "Each task resolves to an observable end state, so performance can be measured consistently.",
    tag: "Built to evaluate",
  },
  {
    icon: Blocks,
    number: "04",
    title: "A path to training",
    body: "When an exam reveals a gap, expert traces can show more than one way through it.",
    tag: "Evaluation before training",
  },
];

const principles = [
  ["Purpose-built environments", "Evaluations run in software surfaces Sunda controls, never through a live customer login."],
  ["Expert context", "Operators contribute judgment and task knowledge—not customer accounts or private data."],
  ["Protected holdouts", "Benchmarks stay controlled so they remain useful as honest tests."],
];

const useCases = [
  "SME accounting",
  "Seller and merchant tools",
  "Property operations",
  "Recruiting platforms",
  "Official messaging accounts",
];

const team = [
  { name: "Joey Lee", role: "Cofounder", body: "Cofounder, Sunda." },
  {
    name: "Eric Skogman",
    role: "Technical cofounder",
    body: "Full-stack engineering, AI, and DevOps. Antler.",
  },
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
            <a className="transition hover:text-zinc-950 dark:hover:text-white" href="#first-pack">First benchmark</a>
            <a className="transition hover:text-zinc-950 dark:hover:text-white" href="#next-surfaces">Future surfaces</a>
            <a className="transition hover:text-zinc-950 dark:hover:text-white" href="#boundaries">Principles</a>
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
              Evaluation infrastructure / computer-use
            </p>
            <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[.98] tracking-[-0.058em] sm:text-6xl lg:text-[74px]">
              Intelligence for the work that lives beyond the API.
            </h1>
            <p className="mt-7 max-w-xl text-balance text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Sunda builds realistic software environments and expert-authored
              evaluation data for teams advancing computer-use agents.
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

        <div className="relative z-10 mx-auto grid max-w-6xl border-x border-t border-zinc-200 bg-white/90 dark:border-zinc-800 dark:bg-zinc-900/90 sm:grid-cols-3">
          {signals.map((signal) => (
            <article className="min-h-28 border-b border-r border-zinc-200 p-5 last:border-r-0 dark:border-zinc-800 sm:border-b-0" key={signal.title}>
              <span className="float-right font-mono text-[9px] text-zinc-300 dark:text-zinc-700">{signal.label}</span>
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
                The hardest work is rarely captured in an API.
              </h2>
            </div>
            <div className="space-y-4 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
              <p>Important judgment lives inside fragmented tools, local conventions, and interfaces built for people—not agents.</p>
              <p>We turn those workflows into controlled environments where models can be evaluated, understood, and improved.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32" id="first-pack">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-10 md:grid-cols-[1fr_340px] md:items-end">
            <div>
              <SectionLabel>Where we are starting</SectionLabel>
              <h2 className="mt-7 max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                Marketplace operations, seen from the operator&apos;s seat.
              </h2>
            </div>
            <p className="text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
              Our first benchmark explores the everyday decisions behind Thai
              marketplace seller operations in a purpose-built environment—not live customer accounts.
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

      <section className="border-y border-zinc-200 bg-white py-24 dark:border-zinc-800 dark:bg-zinc-950 md:py-32" id="next-surfaces" aria-labelledby="next-surfaces-title">
        <div className="mx-auto max-w-5xl px-6">
          <SectionLabel>Where it can go</SectionLabel>
          <h2 id="next-surfaces-title" className="mt-7 max-w-4xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-6xl">
            <span>One method.</span>{" "}
            <span className="text-zinc-400 dark:text-zinc-600">More difficult interfaces.</span>
          </h2>

          <div className="mt-14 grid border-t border-zinc-200 dark:border-zinc-800 md:grid-cols-2 md:gap-x-8">
            {useCases.map((useCase, index) => (
              <a
                className="group flex min-h-24 items-center justify-between gap-4 border-b border-zinc-200 px-3 py-6 transition-colors hover:bg-blue-50/70 focus-visible:bg-blue-50/70 dark:border-zinc-800 dark:hover:bg-blue-950/20 dark:focus-visible:bg-blue-950/20 sm:px-4 sm:py-7"
                href="#contact"
                aria-label={`Explore ${useCase} with Sunda`}
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

      <section className="ribbon-field-panel relative overflow-hidden bg-zinc-950 py-24 text-white md:py-32" id="positioning">
        <RibbonFieldSectionVisual />
        <div className="relative mx-auto grid max-w-5xl gap-16 px-6 lg:grid-cols-[1fr_380px] lg:items-end">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-400">Why it matters</p>
            <h2 className="mt-7 max-w-3xl text-balance text-5xl font-semibold leading-[.98] tracking-[-0.055em] md:text-7xl">
              A benchmark is only as good as the work behind it.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              Standard desktop tests cover familiar software and well-documented
              workflows. We focus on the interfaces and decisions that demand
              local operating knowledge—especially where an API cannot stand in for the real task.
            </p>
          </div>
          <FeatureCard className="border-zinc-700 bg-zinc-900/90 p-6 text-white shadow-none backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <ScanSearch className="size-5 text-blue-400" strokeWidth={1.6} aria-hidden="true" />
              <span className="font-mono text-[9px] tracking-[0.12em] text-zinc-500">SIGNALS THAT MATTER</span>
            </div>
            <div className="mt-20 space-y-2 text-3xl font-semibold tracking-[-0.045em]">
              <p>Operator judgment.</p>
              <p>Native-language detail.</p>
              <p>Observable outcomes.</p>
            </div>
            <div className="mt-20 flex items-center gap-2 border-t border-dashed border-zinc-700 pt-4 text-xs text-zinc-500">
              <Workflow className="size-3.5" aria-hidden="true" />
              Built to reveal where agents actually fail.
            </div>
          </FeatureCard>
        </div>
      </section>

      <section className="bg-zinc-50 py-24 dark:bg-zinc-900/45 md:py-32" id="boundaries">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-10 md:grid-cols-[1fr_340px] md:items-end">
            <div>
              <SectionLabel>Built with care</SectionLabel>
              <h2 className="mt-7 max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                Realistic enough to matter. Controlled enough to trust.
              </h2>
            </div>
            <p className="text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
              We recreate only the software surface an evaluation needs,
              keeping every run isolated from live customer systems.
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

      <section className="border-t border-zinc-200 bg-white py-24 dark:border-zinc-800 dark:bg-zinc-950 md:py-32" id="team">
        <div className="mx-auto max-w-5xl px-6">
          <SectionLabel>Team</SectionLabel>
          <h2 className="mt-7 max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-6xl">
            Built close to the work.
          </h2>
          <div className="mt-16 grid border-l border-t border-zinc-200 dark:border-zinc-800 sm:grid-cols-2">
            {team.map((person) => (
              <article className="relative flex min-h-56 flex-col border-b border-r border-zinc-200 bg-white p-7 dark:border-zinc-800 dark:bg-zinc-900/70" key={person.name}>
                <CardDecorator />
                <p className="text-[10px] font-medium uppercase tracking-[0.13em] text-blue-600">{person.role}</p>
                <h3 className="mt-auto text-3xl font-semibold tracking-[-0.045em]">{person.name}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">{person.body}</p>
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
                <SectionLabel>Work with Sunda</SectionLabel>
                <h2 className="mt-7 max-w-2xl text-balance text-5xl font-semibold leading-[.98] tracking-[-0.055em] md:text-7xl">
                  Looking beyond the standard desktop?
                </h2>
              </div>
              <div>
                <p className="text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
                  If you are building computer-use agents and need harder, more
                  representative evaluations, we would like to hear what your models are missing.
                </p>
                <a className="mt-7 flex h-13 items-center justify-between bg-blue-600 px-5 text-sm font-medium text-white transition hover:bg-blue-700" href="mailto:hello@sunda.works?subject=A%20hard%20problem%20for%20Sunda">
                  Start a conversation <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
                <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-400">Early partner conversations now open</p>
              </div>
            </div>
          </FeatureCard>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-12 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <a href="#top" aria-label="Back to top"><Wordmark /></a>
            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">Sunda Applied Intelligence. Singapore.</p>
          </div>
          <div className="flex gap-6 text-sm text-zinc-500 dark:text-zinc-400">
            <a className="hover:text-zinc-950 dark:hover:text-white" href="mailto:hello@sunda.works">Email</a>
            <a className="hover:text-zinc-950 dark:hover:text-white" href="#top">Back to top ↑</a>
          </div>
          <p className="border-t border-zinc-200 pt-5 font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-400 dark:border-zinc-800 dark:text-zinc-600 sm:col-span-2">
            © 2026 Sunda Applied Intelligence.
          </p>
        </div>
      </footer>
    </main>
  );
}
