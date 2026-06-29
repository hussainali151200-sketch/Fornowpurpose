"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal, Stagger, StaggerItem, Counter, Parallax } from "@/components/motion";
import { CTAButton, SectionHeading, Eyebrow, ArrowIcon } from "@/components/ui";
import { SOLUTIONS } from "@/lib/site";
import {
  solutionIconMap,
  IconSignal,
  IconTransparency,
  IconPartnership,
  IconOutcomes,
  IconCheck,
} from "@/components/icons";

/* ---------------- Problem Comparison ---------------- */
export function ProblemComparison() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="The Problem"
          title="Two ways to hire. One that actually works."
          subtitle="Resume noise costs time, money, and quality. RecruitOxide turns chaos into structured signal."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {/* Traditional Hiring */}
        <Reveal y={36}>
          <div className="h-full rounded-3xl border border-red-100 bg-white p-8 shadow-[0_16px_48px_-24px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-navy">Traditional Hiring</h3>
                <p className="text-xs text-navy/50">High-Volume Manual Screening</p>
              </div>
            </div>
            <ul className="mt-6 space-y-4">
              {[
                { label: "Resume Overload at Scale", v: "100+ resumes" },
                { label: "Subjective Interview Process", v: "30 days" },
                { label: "Manual Screening", v: "Inconsistent" },
                { label: "Gut-Feel Decisions", v: "High risk" },
              ].map((r) => (
                <li key={r.label} className="flex items-center justify-between border-b border-black/5 pb-3 last:border-0">
                  <span className="text-sm text-navy/60">{r.label}</span>
                  <span className="font-display text-sm font-bold text-red-500">{r.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* RecruitOxide */}
        <Reveal y={36} delay={0.12}>
          <div className="relative h-full overflow-hidden rounded-3xl border border-aqua/20 bg-gradient-to-br from-navy to-deep p-8 text-white shadow-[0_24px_60px_-20px_rgba(12,68,95,0.3)]">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-aqua/20 blur-3xl" />
            <div className="relative flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-aqua/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6fc8d6" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">RecruitOxide</h3>
                <p className="text-xs text-white/60">Managed Hiring Intelligence</p>
              </div>
            </div>
            <ul className="relative mt-6 space-y-4">
              {[
                { label: "Structured Evaluation", v: "100%" },
                { label: "Weighted Scoring", v: "5 days" },
                { label: "Simulation-Based Assessment", v: "Consistent" },
                { label: "Decision-Ready Shortlist", v: "Low risk" },
              ].map((r) => (
                <li key={r.label} className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0">
                  <span className="text-sm text-white/65">{r.label}</span>
                  <span className="font-display text-sm font-bold text-aqua-300">{r.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- System Architecture (Light Background, Auto-play) ---------------- */
export function SystemArchitecture() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const s = SOLUTIONS[active];

  // Subtle auto-advance through layers when idle
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % SOLUTIONS.length);
    }, 3800);
    return () => clearInterval(id);
  }, [paused]);

  const ActiveIcon = solutionIconMap[s.key];

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-mist py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>System Architecture</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl md:text-[2.75rem]">
              One operating system. Six intelligence layers.
            </h2>
            <p className="mt-4 text-navy/60">
              Each layer activates in turn — hover to pause, click to explore, then open the live demo.
            </p>
          </div>
        </Reveal>

        <div
          className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Layer stack */}
          <Stagger className="space-y-2.5">
            {SOLUTIONS.map((sol, i) => {
              const Icon = solutionIconMap[sol.key];
              const isActive = active === i;
              return (
                <StaggerItem key={sol.key}>
                  <button
                    onClick={() => setActive(i)}
                    className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-500 ${
                      isActive
                        ? "border-aqua/40 bg-white shadow-[0_12px_40px_-20px_rgba(12,68,95,0.18)]"
                        : "border-black/5 bg-white/60 hover:border-aqua/20 hover:bg-white hover:shadow-sm"
                    }`}
                  >
                    {/* auto-play progress bar */}
                    {isActive && !paused && (
                      <motion.span
                        key={`bar-${active}`}
                        className="absolute bottom-0 left-0 h-0.5 bg-aqua/60"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3.8, ease: "linear" }}
                      />
                    )}
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-500 ${
                        isActive
                          ? "bg-aqua/10 text-aqua scale-105"
                          : "bg-navy/5 text-navy/40 group-hover:text-navy/60"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate font-display font-bold text-navy">{sol.name}</span>
                      <span className="block truncate text-xs text-navy/50">{sol.tagline}</span>
                    </span>
                    <span
                      className={`ml-auto text-aqua transition-all duration-300 ${
                        isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                      }`}
                    >
                      <ArrowIcon />
                    </span>
                  </button>
                </StaggerItem>
              );
            })}
          </Stagger>

          {/* Active detail with floating motion */}
          <motion.div
            animate={{ y: paused ? 0 : [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-3xl border border-black/5 bg-white p-8 shadow-[0_24px_60px_-20px_rgba(12,68,95,0.12)]"
            >
              <div className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${s.accent} opacity-10 blur-2xl`} />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy">
                <ActiveIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-extrabold text-navy">{s.name}</h3>
              <p className="mt-3 leading-relaxed text-navy/65">{s.description}</p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {s.impact.map((im) => (
                  <div key={im.label} className="rounded-xl border border-black/5 bg-mist p-3 text-center">
                    <div className="font-display text-lg font-extrabold text-deep">{im.value}</div>
                    <div className="mt-1 text-[11px] leading-tight text-navy/50">{im.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <CTAButton href={s.demoUrl} variant="primary" external size="sm">
                  Open Live Demo <ArrowIcon />
                </CTAButton>
                <CTAButton href={`/solutions/${s.key}`} variant="ghost" size="sm">
                  Learn more
                </CTAButton>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Two Ways to Hire (Executive Comparison) ---------------- */
export function TwoWaysToHire() {
  const rows = [
    { label: "Pricing model", traditional: "Per-hire % or platform seats", oxide: "Transparent setup + monthly" },
    { label: "Hard cost", traditional: "15–25% of salary, per role", oxide: "Predictable, role-based" },
    { label: "Hidden cost", traditional: "Re-hiring, ramp time, churn", oxide: "Minimized by signal quality" },
    { label: "Effort level", traditional: "Manual screening or hands-off", oxide: "Managed execution with you" },
    { label: "Verification method", traditional: "Resumes & interviews", oxide: "Simulation + weighted scoring" },
    { label: "Reusability", traditional: "Starts over each role", oxide: "Reusable role intelligence" },
    { label: "Ownership", traditional: "Vendor-held or fragmented", oxide: "You own the data & system" },
  ];
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="The Comparison"
          title="Two Ways to Hire"
          subtitle="A clear, neutral look at how RecruitOxide compares to traditional hiring models."
        />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-14 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_20px_60px_-30px_rgba(12,68,95,0.15)]">
          {/* header */}
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="hidden items-end px-6 py-6 sm:flex">
              <span className="text-xs font-semibold uppercase tracking-wider text-navy/40">Dimension</span>
            </div>
            <div className="border-b border-black/5 px-6 py-6 sm:border-b-0 sm:border-l">
              <h3 className="font-display text-base font-bold text-navy">Traditional Models</h3>
              <p className="mt-1 text-xs text-navy/50">Agencies & DIY hiring software</p>
            </div>
            <div className="relative border-b border-black/5 bg-gradient-to-br from-navy to-deep px-6 py-6 text-white sm:border-b-0">
              <h3 className="font-display text-base font-bold">RecruitOxide</h3>
              <p className="mt-1 text-xs text-white/60">Managed Hiring Intelligence OS</p>
            </div>
          </div>
          {/* rows */}
          {rows.map((r, i) => (
            <div
              key={r.label}
              className={`grid grid-cols-1 sm:grid-cols-3 ${i < rows.length - 1 ? "border-t border-black/5" : "border-t border-black/5"}`}
            >
              <div className="px-6 py-4">
                <span className="text-sm font-semibold text-navy">{r.label}</span>
              </div>
              <div className="px-6 py-4 sm:border-l sm:border-black/5">
                <span className="text-sm text-navy/55">{r.traditional}</span>
              </div>
              <div className="flex items-center gap-2 bg-aqua/[0.04] px-6 py-4">
                <IconCheck className="h-4 w-4 shrink-0 text-aqua" />
                <span className="text-sm font-medium text-navy">{r.oxide}</span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- How It Works ---------------- */
export function HowItWorks() {
  const steps = [
    { n: "01", t: "Define the role", d: "We model the role into structured, weighted intelligence — not a flat job post." },
    { n: "02", t: "Visualize & simulate", d: "Candidates experience the role and self-qualify before a resume is reviewed." },
    { n: "03", t: "Assess & match", d: "The Assessment Suite and RoleMatch™ Engine score every candidate consistently." },
    { n: "04", t: "Decide with the console", d: "Your shortlist of decision-ready candidates surfaces in the Intelligence Console™." },
    { n: "05", t: "Onboard & grow", d: "The L&D Layer ramps new hires faster with adaptive learning paths." },
  ];
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="How It Works"
          title="From open role to high performer — one continuous flow."
          subtitle="A managed pipeline that compresses 30 days into 5 without cutting corners."
        />
      </Reveal>

      <div className="relative mt-16">
        <div className="absolute left-[10%] right-[10%] top-12 hidden h-px bg-gradient-to-r from-aqua/10 via-aqua/40 to-aqua/10 lg:block" />
        <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:items-stretch">
          {steps.map((st) => (
            <StaggerItem key={st.n} className="h-full">
              <div className="card-hover relative flex h-full flex-col items-start rounded-2xl border border-black/5 bg-white p-6">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-navy font-display text-sm font-extrabold text-white ring-4 ring-mist">
                  {st.n}
                </div>
                <h3 className="mt-5 font-display text-base font-bold leading-snug text-navy">{st.t}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/55">{st.d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- Outcomes / ROI ---------------- */
export function Outcomes() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-mist to-white" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Outcomes & ROI"
            title="The numbers that change the conversation."
            subtitle="Realistic, repeatable results across managed hiring engagements."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            { big: <><Counter to={100} /> <span className="text-aqua/50">→</span> <Counter to={10} /></>, label: "Applicants distilled to interview-ready finalists" },
            { big: <><Counter to={30} /> <span className="text-aqua/50">→</span> <Counter to={5} /> <span className="text-sm font-normal text-navy/40">days</span></>, label: "Days from open role to shortlist", highlight: true },
            { big: <><span className="text-2xl">$</span><Counter to={13} />K–<span className="text-2xl">$</span><Counter to={20} />K</>, label: "Bad-hire risk mitigated per role" },
          ].map((o, i) => (
            <Reveal key={i} delay={i * 0.1} y={32}>
              <div className={`stat-card relative h-full overflow-hidden rounded-3xl border bg-white p-8 text-center ${o.highlight ? "border-aqua/30 pulse-glow shadow-[0_24px_60px_-20px_rgba(55,168,187,0.15)]" : "border-black/5 shadow-[0_24px_60px_-40px_rgba(12,68,95,0.15)]"}`}>
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-aqua/5 blur-2xl" />
                <div className="font-display text-4xl font-extrabold text-deep sm:text-5xl stat-number">{o.big}</div>
                <p className="mt-4 text-sm leading-relaxed text-navy/55">{o.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Industries (Refined) ---------------- */
export function Industries() {
  const items = [
    { name: "Call Centers", icon: "📞", d: "High-volume hiring with consistent quality." },
    { name: "BPO", icon: "🌐", d: "Scale teams with standardized signal." },
    { name: "Medical Billing", icon: "🧾", d: "Precision roles where accuracy matters." },
    { name: "Healthcare", icon: "🏥", d: "Mission-critical hires evaluated on behavior." },
    { name: "SaaS", icon: "💻", d: "Fast-growing teams needing decision-ready candidates." },
  ];
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Built for Teams"
          title="Hiring at scale, done right."
          subtitle="Tuned for the realities of high-volume, signal-critical hiring."
        />
      </Reveal>
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {items.map((it, i) => (
          <motion.button
            key={it.name}
            onClick={() => setOpen(open === i ? null : i)}
            onMouseEnter={() => setOpen(i)}
            onMouseLeave={() => setOpen(null)}
            layout
            className={`relative overflow-hidden rounded-xl border px-5 py-3 text-left transition-all duration-300 ${
              open === i
                ? "border-aqua/40 bg-navy text-white shadow-[0_12px_32px_-12px_rgba(12,68,95,0.3)]"
                : "border-black/5 bg-white text-navy hover:border-aqua/20 hover:shadow-sm"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span className="text-lg">{it.icon}</span>
              <span className="font-display text-sm font-semibold">{it.name}</span>
            </div>
            <motion.p
              initial={false}
              animate={{ opacity: open === i ? 1 : 0, height: open === i ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
              className="mt-2 max-w-[220px] text-xs leading-relaxed text-white/70 overflow-hidden"
            >
              {it.d}
            </motion.p>
          </motion.button>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Case Studies ---------------- */
export function CaseStudies() {
  const cases = [
    {
      tag: "BPO · 1,200 seats",
      title: "Cut time-to-shortlist by 81%",
      body: "A national BPO replaced manual screening with structured assessment, moving from 26 days to 5 while improving 90-day retention.",
      stat: "81%",
      statLabel: "faster shortlist",
    },
    {
      tag: "Healthcare · Multi-site",
      title: "Reduced early attrition by a third",
      body: "Experience The Role™ let candidates self-qualify, dropping 90-day attrition by 31% across billing and front-desk roles.",
      stat: "-31%",
      statLabel: "early attrition",
    },
    {
      tag: "SaaS · Series B",
      title: "10 decision-ready finalists from 140",
      body: "RoleMatch™ scoring surfaced a defensible top 10 from 140 applicants, with hiring managers aligned on a single transparent score.",
      stat: "140 → 10",
      statLabel: "applicants distilled",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-aqua/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Case Studies</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-[2.75rem]">
              Results that compound.
            </h2>
            <p className="mt-4 text-white/60">Representative outcomes from managed hiring engagements.</p>
          </div>
        </Reveal>
        <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {cases.map((c) => (
            <StaggerItem key={c.title}>
              <div className="card-hover flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
                <span className="text-xs font-semibold uppercase tracking-wider text-aqua-300">{c.tag}</span>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug">{c.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{c.body}</p>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <div className="font-display text-3xl font-extrabold text-aqua-300">{c.stat}</div>
                  <div className="text-xs text-white/50">{c.statLabel}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
export function Testimonials() {
  const quotes = [
    {
      q: "We stopped guessing. Every shortlist now comes with a score we can actually explain to leadership.",
      name: "VP of Talent",
      role: "National BPO",
    },
    {
      q: "Experience The Role™ changed who applies. The candidates that reach us are already self-selected and serious.",
      name: "Head of People",
      role: "Healthcare Network",
    },
    {
      q: "Five days to a decision-ready shortlist sounded impossible. It's now our normal.",
      name: "Founder",
      role: "SaaS Company",
    },
  ];
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionHeading eyebrow="Testimonials" title="Trusted by teams that hire with intent." />
      </Reveal>
      <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
        {quotes.map((t) => (
          <StaggerItem key={t.name}>
            <figure className="card-hover flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7">
              <div className="text-3xl leading-none text-aqua/30">&ldquo;</div>
              <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-navy/70">{t.q}</blockquote>
              <figcaption className="mt-6 border-t border-black/5 pt-4">
                <div className="font-display font-bold text-navy text-sm">{t.name}</div>
                <div className="text-xs text-navy/50">{t.role}</div>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

/* ---------------- About / Mission / Vision / Values (Enhanced) ---------------- */
export function AboutValues() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-mist" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Who We Are */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
              A Managed Hiring Intelligence OS — not another ATS.
            </h2>
            <p className="mt-5 leading-relaxed text-navy/60">
              RecruitOxide combines a job visualization layer, role simulation, assessment, deterministic
              matching, an executive console, and learning — plus managed execution. We turn 100 applicants
              into 10 decision-ready candidates and compress 30-day cycles into 5.
            </p>
          </div>
        </Reveal>

        <div className="my-16 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

        {/* Why We Exist */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="rounded-2xl border border-black/5 bg-white p-8">
              <Eyebrow>Why We Exist</Eyebrow>
              <h3 className="mt-4 font-display text-2xl font-bold text-navy">Hiring shouldn't be a guessing game.</h3>
              <p className="mt-4 leading-relaxed text-navy/60">
                Every year, US companies waste billions on bad hires, slow cycles, and subjective decisions.
                We built RecruitOxide to replace resume noise with structured, defensible signal — so every
                hire is a confident, data-backed decision.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-aqua/20 bg-gradient-to-br from-navy to-deep p-8 text-white">
              <Eyebrow>Our Philosophy</Eyebrow>
              <h3 className="mt-4 font-display text-2xl font-bold">Signal over subjectivity.</h3>
              <p className="mt-4 leading-relaxed text-white/70">
                Great talent exists everywhere. Great hiring systems find it efficiently. We believe in
                transparent, weighted intelligence that explains itself — no black boxes, no gut feelings,
                just clear, comparable signal that scales.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="my-16 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

        {/* Values */}
        <Reveal>
          <SectionHeading eyebrow="Our Values" title="What we stand for." />
        </Reveal>
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Signal over noise", d: "We replace resume guesswork with structured, comparable intelligence.", Icon: IconSignal },
            { t: "Radical transparency", d: "Every score explains itself. No black boxes, ever.", Icon: IconTransparency },
            { t: "Managed partnership", d: "We run the hiring intelligence alongside your team.", Icon: IconPartnership },
            { t: "Measured outcomes", d: "Faster cycles, better hires, lower risk — proven, not promised.", Icon: IconOutcomes },
          ].map((v) => (
            <StaggerItem key={v.t} className="h-full">
              <div className="card-hover group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-aqua/10 text-aqua transition-all duration-300 group-hover:scale-105 group-hover:bg-aqua group-hover:text-white">
                  <v.Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-navy">{v.t}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/55">{v.d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
export function FinalCTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <Parallax amount={30}>
        <div className="relative overflow-hidden rounded-[2rem] border border-aqua/15 bg-gradient-to-br from-navy via-navy to-deep p-10 text-center text-white sm:p-16">
          <div className="aurora opacity-50" />
          <div className="relative">
            <Reveal>
              <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Smarter Hiring <span className="gradient-text">Starts Here.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-5 max-w-xl text-white/65">
                Book your strategy call and see how RecruitOxide turns 100 applicants into 10 decision-ready
                candidates in 5 days.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <CTAButton href="/book-demo" variant="aqua" size="lg">
                  Book Your Strategy Call <ArrowIcon />
                </CTAButton>
                <CTAButton href="/solutions" variant="ghost" size="lg" className="text-white hover:text-aqua-300">
                  Explore the System
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </div>
      </Parallax>
    </section>
  );
}
