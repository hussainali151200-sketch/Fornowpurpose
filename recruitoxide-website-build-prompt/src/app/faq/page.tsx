"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { CTAButton, ArrowIcon } from "@/components/ui";

const faqs = [
  {
    q: "Is RecruitOxide an ATS?",
    a: "No. RecruitOxide is a Managed Hiring Intelligence OS. We're not an applicant tracking system, a resume scanner, a job board, or a recruitment agency. We combine structured intelligence layers with managed execution to deliver decision-ready shortlists.",
  },
  {
    q: "How do you turn 100 applicants into 10 finalists?",
    a: "Candidates self-qualify through the Job Visualization Layer and Experience The Role™ simulation. The Assessment Suite and RoleMatch™ Engine then score everyone consistently and transparently, surfacing the top decision-ready candidates in the Intelligence Console™.",
  },
  {
    q: "How do you compress 30 days into 5?",
    a: "By replacing manual screening and subjective interviews with structured, weighted evaluation that runs in parallel. The result is a ranked, explainable shortlist in roughly five days instead of a month.",
  },
  {
    q: "Do you replace our recruiters?",
    a: "No — we make them dramatically more effective. RecruitOxide handles the structured intelligence and managed execution so your team spends time only on decision-ready candidates.",
  },
  {
    q: "Which industries do you serve?",
    a: "We're tuned for high-volume, signal-critical hiring: call centers, BPO, medical billing, healthcare, and SaaS — though the system adapts to most US roles.",
  },
  {
    q: "Is the scoring explainable and compliant?",
    a: "Yes. Every RoleMatch™ score shows its category breakdown — raw score, weight, and contribution. It's deterministic, transparent, and audit-ready for US compliance.",
  },
  {
    q: "Can I try the product before buying?",
    a: "Absolutely. Each intelligence layer has a live demo you can explore, and you can book a strategy call to see the full system applied to one of your roles.",
  },
  {
    q: "What does managed execution include?",
    a: "Our team models your role into structured intelligence, runs assessments and simulations, and delivers a ranked shortlist — working alongside your hiring team end to end.",
  },
];

function Item({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={i * 0.04}>
      <div className="overflow-hidden rounded-2xl border border-black/5 bg-white/80 backdrop-blur">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="font-display font-bold text-navy">{q}</span>
          <span
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-aqua/10 text-aqua transition-transform duration-300 ${
              open ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="px-6 pb-5 text-sm leading-relaxed text-navy/60">{a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Questions, <span className="gradient-text">answered.</span>
          </>
        }
        subtitle="Everything you need to know about the RecruitOxide Hiring Intelligence OS."
      />
      <section className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Item key={f.q} q={f.q} a={f.a} i={i} />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-5 pb-24 text-center sm:px-8">
        <Reveal>
          <div className="rounded-3xl border border-aqua/20 bg-gradient-to-br from-navy to-deep p-10 text-white">
            <h2 className="font-display text-2xl font-extrabold">Still have questions?</h2>
            <p className="mx-auto mt-3 max-w-md text-white/65">
              Book a strategy call and we&apos;ll walk through your exact hiring challenge.
            </p>
            <div className="mt-7 flex justify-center">
              <CTAButton href="/book-demo" variant="aqua">
                Book a Strategy Call <ArrowIcon />
              </CTAButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
