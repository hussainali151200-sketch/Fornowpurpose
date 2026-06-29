import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { CTAButton, ArrowIcon, SectionHeading, Eyebrow } from "@/components/ui";
import { solutionIconMap, IconCheck } from "@/components/icons";
import type { Solution } from "@/lib/site";

export function SolutionDetail({ s }: { s: Solution }) {
  const Icon = solutionIconMap[s.key];

  return (
    <>
      <PageHero
        eyebrow={s.name}
        title={<span>{s.hero}</span>}
        subtitle={s.tagline}
      >
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTAButton href={s.demoUrl} variant="primary" external size="lg">
            Open Live Demo <ArrowIcon />
          </CTAButton>
          <CTAButton href="/book-demo" variant="secondary" size="lg">
            Book a Strategy Call
          </CTAButton>
        </div>
      </PageHero>

      {/* Problem + impact */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy/5 text-navy">
              <Icon className="h-7 w-7" />
            </div>
            <div className="mt-6">
              <Eyebrow>The Problem</Eyebrow>
            </div>
            <p className="mt-4 font-display text-2xl font-bold leading-snug text-navy sm:text-3xl">
              {s.problem}
            </p>
            <p className="mt-6 leading-relaxed text-navy/60">{s.description}</p>
          </Reveal>

          <Reveal delay={0.1} y={32}>
            <div className="grid gap-4 sm:grid-cols-3">
              {s.impact.map((im) => (
                <div
                  key={im.label}
                  className="rounded-2xl border border-black/5 bg-white p-6 text-center shadow-[0_12px_40px_-20px_rgba(0,0,0,0.06)]"
                >
                  <div className="font-display text-2xl font-extrabold text-deep">{im.value}</div>
                  <div className="mt-2 text-xs leading-tight text-navy/55">{im.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Value statements strip */}
      <section className="border-y border-black/5 bg-mist/60">
        <div className="mx-auto grid max-w-7xl gap-px px-5 py-10 sm:grid-cols-3 sm:px-8">
          {[
            { k: "Structured", v: "Every signal is captured as comparable, weighted data." },
            { k: "Transparent", v: "Results explain themselves — no black boxes." },
            { k: "Outcome-driven", v: "Built to compress cycles and reduce hiring risk." },
          ].map((x, i) => (
            <Reveal key={x.k} delay={i * 0.08}>
              <div className="px-2 text-center sm:text-left">
                <div className="font-display text-base font-bold text-deep">{x.k}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-navy/55">{x.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Business Outcome / features */}
      <section className="relative overflow-hidden py-20">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Business Outcome</Eyebrow>
              <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                What this layer delivers for your team.
              </h2>
            </div>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {s.features.map((f) => (
              <StaggerItem key={f.title} className="h-full">
                <div className="card-hover group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-aqua/10 text-aqua transition-all duration-300 group-hover:scale-105 group-hover:bg-aqua group-hover:text-white">
                    <IconCheck className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-navy">{f.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/55">{f.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Visual representation */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-aqua/15 bg-gradient-to-br from-navy to-deep p-10 text-white sm:p-14">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-aqua/20 blur-3xl" />
            <div className="relative">
              <Eyebrow>Inside the Layer</Eyebrow>
              <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                See it in action.
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-white/65">
                The live demo shows exactly how {s.name} works end to end — the same experience your candidates
                and hiring team will use.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <CTAButton href={s.demoUrl} variant="aqua" external size="lg">
                  Experience the Live Demo <ArrowIcon />
                </CTAButton>
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-white/60 transition-colors hover:text-aqua-300"
                >
                  ← Back to all solutions
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-gradient-to-br from-mist to-white p-10 text-center sm:p-14">
            <SectionHeading
              eyebrow="Next Step"
              title={<>Make this layer part of your hiring OS.</>}
              subtitle="Deploy it standalone or as part of the full RecruitOxide system with managed execution."
            />
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTAButton href="/book-demo" variant="primary" size="lg">
                Book Your Strategy Call <ArrowIcon />
              </CTAButton>
              <CTAButton href="/pricing" variant="secondary" size="lg">
                View Pricing
              </CTAButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
