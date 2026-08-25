import { BrandWordmark } from "@/components/brand-wordmark";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { getOpportunity, opportunities } from "@/lib/opportunities";
import { ArrowLeft, ArrowUpRight, Check, Clock3, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type OpportunityPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return opportunities.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: OpportunityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const opportunity = getOpportunity(slug);

  if (!opportunity) return { title: "Opportunity not found — GradNorm" };

  return {
    title: `${opportunity.title} — GradNorm`,
    description: opportunity.summary,
    openGraph: {
      title: `${opportunity.title} — GradNorm`,
      description: opportunity.summary,
      images: [],
    },
    twitter: {
      card: "summary",
      title: `${opportunity.title} — GradNorm`,
      description: opportunity.summary,
      images: [],
    },
  };
}

export default async function OpportunityDetailPage({ params }: OpportunityPageProps) {
  const { slug } = await params;
  const opportunity = getOpportunity(slug);
  if (!opportunity) notFound();

  const applicationHref = `mailto:experts@gradnorm.ai?subject=${encodeURIComponent(`Application: ${opportunity.title}`)}&body=${encodeURIComponent(`Hello GradNorm team,\n\nI am interested in the ${opportunity.title} opportunity.\n\nLinkedIn or portfolio:\nRelevant experience:\nLocation and timezone:\nWeekly availability:\n`)}`;

  return (
    <main className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
          <Link href="/" aria-label="GradNorm home"><BrandWordmark /></Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link className="flex items-center gap-2 text-sm text-zinc-500 transition hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400" href="/opportunities">
              <ArrowLeft className="size-4" aria-hidden="true" /> All opportunities
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-14 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-start lg:gap-16 lg:px-8 lg:py-20">
        <article>
          <div className="flex flex-wrap items-center gap-2">
            <span className="border border-blue-200 bg-blue-50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-blue-700 dark:border-blue-900 dark:bg-blue-950/60 dark:text-blue-300">{opportunity.category}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-400">Posted {opportunity.posted}</span>
          </div>
          <h1 className="mt-7 max-w-3xl text-balance text-5xl font-semibold leading-[.98] tracking-[-0.055em] sm:text-6xl">
            {opportunity.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">{opportunity.summary}</p>

          <div className="mt-9 grid gap-px border border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800 sm:grid-cols-3">
            <div className="bg-white p-4 dark:bg-zinc-950">
              <MapPin className="size-4 text-blue-600" aria-hidden="true" />
              <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-400">Location</p>
              <p className="mt-1 text-sm font-medium">{opportunity.location}</p>
            </div>
            <div className="bg-white p-4 dark:bg-zinc-950">
              <Clock3 className="size-4 text-blue-600" aria-hidden="true" />
              <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-400">Commitment</p>
              <p className="mt-1 text-sm font-medium">{opportunity.commitment}</p>
            </div>
            <div className="bg-white p-4 dark:bg-zinc-950">
              <span className="font-mono text-sm font-semibold text-blue-600">$</span>
              <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-400">Contract rate</p>
              <p className="mt-1 text-sm font-medium">{opportunity.pay}</p>
            </div>
          </div>

          <section className="mt-14 border-t border-zinc-200 pt-10 dark:border-zinc-800">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">About the project</h2>
            <p className="mt-5 max-w-3xl text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">{opportunity.overview}</p>
          </section>

          <DetailList title="What you’ll do" items={opportunity.responsibilities} />
          <DetailList title="What you bring" items={opportunity.qualifications} />

          <section className="mt-14 border-t border-zinc-200 pt-10 dark:border-zinc-800">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">Helpful, not required</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {opportunity.niceToHave.map((item) => (
                <span className="border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300" key={item}>{item}</span>
              ))}
            </div>
          </section>

          <section className="mt-14 border-t border-zinc-200 pt-10 dark:border-zinc-800">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">Selection process</h2>
            <ol className="mt-6 grid gap-px border border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800 sm:grid-cols-3">
              {["Share your background", "Complete a focused review", "Meet the project team"].map((step, index) => (
                <li className="bg-white p-5 dark:bg-zinc-950" key={step}>
                  <span className="font-mono text-[10px] text-blue-600">0{index + 1}</span>
                  <p className="mt-8 text-sm font-medium">{step}</p>
                </li>
              ))}
            </ol>
          </section>
        </article>

        <aside className="relative border border-zinc-700 bg-zinc-950 p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,.22)] lg:sticky lg:top-6 sm:p-8">
          <span className="absolute -ml-[33px] -mt-[33px] size-2 border-l-2 border-t-2 border-blue-500 sm:-ml-[41px] sm:-mt-[41px]" aria-hidden="true" />
          <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-blue-400">Interested?</p>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.045em]">Bring your expertise to the frontier.</h2>
          <p className="mt-4 text-sm leading-6 text-zinc-400">Tell us why this work fits your background. A short note and a relevant profile are enough to start.</p>

          <div className="mt-8 space-y-3 border-y border-zinc-800 py-6">
            {["Remote and flexible", "Project-specific onboarding", "Clear scope and quality standards"].map((item) => (
              <p className="flex items-center gap-3 text-sm text-zinc-300" key={item}>
                <span className="grid size-5 shrink-0 place-items-center border border-blue-500/40 bg-blue-500/10 text-blue-400"><Check className="size-3" aria-hidden="true" /></span>
                {item}
              </p>
            ))}
          </div>

          <a className="mt-7 flex h-13 items-center justify-between bg-blue-600 px-5 text-sm font-medium text-white transition hover:bg-blue-700" href={applicationHref}>
            Apply for this project <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <p className="mt-3 font-mono text-[9px] uppercase leading-4 tracking-[0.1em] text-zinc-500">Applications are reviewed on a rolling basis</p>
        </aside>
      </div>
    </main>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-14 border-t border-zinc-200 pt-10 dark:border-zinc-800">
      <h2 className="text-2xl font-semibold tracking-[-0.04em]">{title}</h2>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li className="flex gap-4 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400" key={item}>
            <span className="mt-3 size-1.5 shrink-0 rounded-full bg-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,.1)]" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
