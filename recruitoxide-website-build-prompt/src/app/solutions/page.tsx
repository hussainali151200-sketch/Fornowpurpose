import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Stagger, StaggerItem } from "@/components/motion";
import { CTAButton, ArrowIcon } from "@/components/ui";
import { SOLUTIONS } from "@/lib/site";
import { solutionIconMap } from "@/components/icons";

export const metadata: Metadata = {
  title: "Solutions — The Hiring Intelligence System",
  description:
    "Explore the six intelligence layers of the RecruitOxide Managed Hiring Intelligence OS.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="The System"
        title={
          <>
            Six layers of <span className="gradient-text">hiring intelligence.</span>
          </>
        }
        subtitle="Each layer is a standalone capability — together they form a single, managed operating system for hiring."
      >
        <CTAButton href="/book-demo" variant="primary" size="lg">
          Book a Strategy Call <ArrowIcon />
        </CTAButton>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s) => {
            const Icon = solutionIconMap[s.key];
            return (
              <StaggerItem key={s.key} className="h-full">
                <div className="card-hover group flex h-full flex-col rounded-3xl border border-black/5 bg-white p-7 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.06)]">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-navy/5 text-navy transition-all duration-300 group-hover:scale-105 group-hover:bg-aqua/10 group-hover:text-aqua">
                    <Icon className="h-7 w-7" />
                    <span className={`pointer-events-none absolute -right-2 -top-2 h-6 w-6 rounded-full bg-gradient-to-br ${s.accent} opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60`} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/55">{s.short}</p>
                  <div className="mt-6 flex items-center gap-4">
                    <Link
                      href={`/solutions/${s.key}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-deep transition-colors group-hover:text-aqua"
                    >
                      Learn more <ArrowIcon />
                    </Link>
                    <a
                      href={s.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-navy/50 transition-colors hover:text-aqua"
                    >
                      Live demo ↗
                    </a>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>
    </>
  );
}
