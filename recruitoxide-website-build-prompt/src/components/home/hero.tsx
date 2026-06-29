"use client";

import { motion } from "framer-motion";
import { CTAButton, ArrowIcon } from "@/components/ui";
import { Counter } from "@/components/motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="aurora" />
      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-aqua/20 bg-white px-4 py-1.5 text-xs font-medium text-deep shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aqua opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-aqua" />
          </span>
          Managed Hiring Intelligence OS · Built for US teams
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.08 }}
          className="font-display text-[clamp(3rem,8vw,5.5rem)] font-extrabold leading-[1.02] tracking-tight text-navy"
        >
          <span className="gradient-text">Smart</span> Hiring.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-navy/65 sm:text-xl"
        >
          RecruitOxide replaces subjective resume review with structured, role-aligned hiring
          intelligence for growing US teams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.32 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <CTAButton href="/solutions" variant="primary" size="lg">
            Explore the System <ArrowIcon />
          </CTAButton>
          <CTAButton href="/book-demo" variant="secondary" size="lg">
            Book Strategy Call
          </CTAButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-7 text-sm font-medium text-navy/45"
        >
          From 100 applicants to 10 interview-ready candidates in 5 days.
        </motion.p>

        {/* Enhanced floating stat chips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.6 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4 sm:gap-6"
        >
          {[
            { before: 100, after: 10, label: "Applicants to finalists", suffix: "" },
            { before: 30, after: 5, label: "Days to shortlist", suffix: " days", highlight: true },
            { before: 0, after: 83, label: "Faster than traditional", suffix: "%" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
              className={`stat-card relative overflow-hidden rounded-2xl border bg-white p-5 sm:p-6 shadow-[0_12px_40px_-20px_rgba(12,68,95,0.15)] ${
                s.highlight ? "border-aqua/30 pulse-glow" : "border-black/5"
              }`}
            >
              <div className="flex items-center justify-center gap-2 font-display text-2xl font-extrabold text-deep sm:text-3xl stat-number">
                <Counter to={s.before} />
                <span className="text-aqua/60">→</span>
                <span className={s.highlight ? "text-aqua" : "text-deep"}>
                  <Counter to={s.after} suffix={s.suffix} />
                </span>
              </div>
              <div className="mt-2 text-[11px] font-medium text-navy/55 sm:text-xs">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
