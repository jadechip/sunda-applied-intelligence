import { opportunities } from "@/lib/opportunities";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function HomeOpportunities() {
  return (
    <section className="border-y border-zinc-200 bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-900/45 md:py-32" id="opportunities" aria-labelledby="home-opportunities-title">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">Expert opportunities</p>
          <h2 className="mt-7 text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-6xl" id="home-opportunities-title">
            Your expertise can move AI forward.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
            Join flexible remote projects across engineering, language, finance, operations, and research.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {opportunities.slice(0, 6).map((opportunity) => (
            <Link
              className="group relative flex min-h-64 flex-col border border-zinc-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_18px_60px_rgba(37,99,235,.12)] dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-blue-500"
              href={`/opportunities/${opportunity.slug}`}
              key={opportunity.slug}
            >
              <span className="absolute -left-px -top-px size-2 border-l-2 border-t-2 border-blue-600" aria-hidden="true" />
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-zinc-400">{opportunity.posted}</span>
                <span className="text-[10px] text-zinc-400">{opportunity.category}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold leading-tight tracking-[-0.035em] transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">{opportunity.title}</h3>
              <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-400">Core skills</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {opportunity.skills.slice(0, 3).map((skill) => (
                  <span className="bg-zinc-100 px-2 py-1 text-[10px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300" key={skill}>{skill}</span>
                ))}
                {opportunity.skills.length > 3 && <span className="bg-blue-50 px-2 py-1 text-[10px] text-blue-700 dark:bg-blue-950/70 dark:text-blue-300">+{opportunity.skills.length - 3}</span>}
              </div>
              <div className="mt-auto flex items-end justify-between gap-4 pt-6">
                <p className="text-sm font-semibold">{opportunity.pay}</p>
                <span className="grid size-10 place-items-center border border-zinc-200 text-zinc-500 transition group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white dark:border-zinc-700">
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link className="inline-flex h-12 items-center justify-center gap-8 bg-blue-600 px-5 text-sm font-medium text-white transition hover:bg-blue-700" href="/opportunities">
            View all opportunities <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
