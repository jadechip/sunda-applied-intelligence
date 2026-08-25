import { OpportunitiesBrowser } from "@/components/opportunities-browser";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { opportunities } from "@/lib/opportunities";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert opportunities — GradNorm",
  description: "Remote expert projects helping frontier AI systems learn, reason, and perform in the real world.",
};

export default function OpportunitiesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <section className="opportunities-hero relative overflow-hidden bg-zinc-950 text-white">
        <SiteHeader inverse />
        <div className="relative z-10 mx-auto max-w-5xl px-6 pb-28 pt-20 text-center md:pb-36 md:pt-28">
          <p className="mx-auto flex w-fit items-center gap-2 border border-blue-400/25 bg-blue-500/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-blue-300">
            <i className="size-1.5 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,.9)]" aria-hidden="true" />
            Join the expert network
          </p>
          <h1 className="mx-auto mt-8 max-w-4xl text-balance text-5xl font-semibold leading-[.96] tracking-[-0.058em] sm:text-6xl md:text-7xl">
            Put your expertise to work on the next generation of AI.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-balance text-lg leading-8 text-zinc-400">
            Flexible remote projects for specialists who can teach, test, and challenge frontier models with real-world knowledge.
          </p>
        </div>
      </section>

      <section className="relative z-10 -mt-8 pb-24 md:-mt-10 md:pb-32" aria-labelledby="available-roles">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="sr-only" id="available-roles">Available roles</h2>
          <OpportunitiesBrowser opportunities={opportunities} />
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white py-20 dark:border-zinc-800 dark:bg-zinc-900/45">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-[1fr_360px] md:items-end">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">How projects work</p>
            <h2 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl">
              Serious work, shaped around the time you have.
            </h2>
          </div>
          <p className="text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
            Experts are matched to focused projects, complete a role-specific review, and work asynchronously with clear quality standards and support from GradNorm.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
