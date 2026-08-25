"use client";

import { OpportunityCard } from "@/components/opportunity-card";
import type { Opportunity } from "@/lib/opportunities";
import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";

export function OpportunitiesBrowser({ opportunities }: { opportunities: Opportunity[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return opportunities;

    return opportunities.filter((opportunity) =>
      [opportunity.title, opportunity.category, opportunity.location, ...opportunity.skills]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [opportunities, query]);

  return (
    <>
      <div className="relative mx-auto max-w-3xl">
        <Search className="absolute left-5 top-1/2 size-4 -translate-y-1/2 text-blue-500" aria-hidden="true" />
        <label className="sr-only" htmlFor="opportunity-search">Search opportunities</label>
        <input
          className="h-16 w-full border border-zinc-300 bg-white pl-13 pr-14 text-sm text-zinc-950 shadow-[0_16px_60px_rgba(24,24,27,.08)] outline-none transition placeholder:text-zinc-400 focus:border-blue-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
          id="opportunity-search"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by role, skill, or domain"
          type="search"
          value={query}
        />
        {query && (
          <button
            className="absolute right-4 top-1/2 grid size-8 -translate-y-1/2 place-items-center text-zinc-400 transition hover:text-zinc-950 dark:hover:text-white"
            onClick={() => setQuery("")}
            type="button"
            aria-label="Clear search"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        )}
      </div>

      <p className="mt-12 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
        {filtered.length} {filtered.length === 1 ? "role" : "roles"} available
      </p>

      {filtered.length ? (
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((opportunity) => <OpportunityCard key={opportunity.slug} opportunity={opportunity} />)}
        </div>
      ) : (
        <div className="mt-8 border border-dashed border-zinc-300 px-6 py-20 text-center dark:border-zinc-700">
          <p className="text-xl font-semibold tracking-[-0.03em]">No roles match that search.</p>
          <button className="mt-4 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400" onClick={() => setQuery("")} type="button">View every opportunity</button>
        </div>
      )}
    </>
  );
}
