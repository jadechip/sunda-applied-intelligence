import type { Opportunity } from "@/lib/opportunities";
import { ArrowUpRight, MapPin } from "lucide-react";

export function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  return (
    <a
      className="group relative flex min-h-72 flex-col border border-zinc-200 bg-white p-6 shadow-[0_16px_50px_rgba(24,24,27,.06)] transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_22px_70px_rgba(37,99,235,.13)] focus-visible:border-blue-500 dark:border-zinc-800 dark:bg-zinc-900/88 dark:shadow-none dark:hover:border-blue-500 sm:p-7"
      href={`/opportunities/${opportunity.slug}`}
      aria-label={`View ${opportunity.title} opportunity`}
    >
      <span className="absolute -left-px -top-px size-2 border-l-2 border-t-2 border-blue-600" aria-hidden="true" />
      <span className="absolute -right-px -top-px size-2 border-r-2 border-t-2 border-blue-600" aria-hidden="true" />
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-400">{opportunity.posted}</span>
        <span className="border border-zinc-200 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">{opportunity.category}</span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.04em] transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
        {opportunity.title}
      </h3>
      <p className="mt-3 flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
        <MapPin className="size-3.5 text-blue-500" aria-hidden="true" /> {opportunity.location}
      </p>
      <div className="mt-7">
        <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-400">Core skills</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {opportunity.skills.slice(0, 4).map((skill) => (
            <span className="bg-zinc-100 px-2.5 py-1.5 text-[11px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300" key={skill}>{skill}</span>
          ))}
          {opportunity.skills.length > 4 && (
            <span className="bg-blue-50 px-2.5 py-1.5 text-[11px] text-blue-700 dark:bg-blue-950/70 dark:text-blue-300">+{opportunity.skills.length - 4}</span>
          )}
        </div>
      </div>
      <div className="mt-auto flex items-end justify-between gap-5 border-t border-zinc-200 pt-6 dark:border-zinc-800">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-400">Contract rate</p>
          <p className="mt-1 text-sm font-semibold">{opportunity.pay}</p>
        </div>
        <span className="grid size-11 place-items-center border border-zinc-200 text-zinc-500 transition group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white dark:border-zinc-700 dark:text-zinc-300">
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </div>
    </a>
  );
}
