"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { CTAButton, ArrowIcon, Eyebrow } from "@/components/ui";
import { IconCheck, IconClose } from "@/components/icons";

const plans = [
  {
    name: "Starter",
    setup: "$899",
    monthly: "$299",
    tagline: "For teams hiring their first structured roles.",
    highlight: false,
    summary: ["1 active role", "JD Visualizer", "Simulator", "Core Assessment Suite", "Up to 100 candidates"],
  },
  {
    name: "Growth",
    setup: "$1,699",
    monthly: "$599",
    tagline: "For growing teams hiring continuously.",
    highlight: true,
    summary: ["Up to 8 active roles", "Full Assessment Suite", "CV Gate + White-Label", "L&D + Dashboards", "Up to 500 candidates"],
  },
  {
    name: "Enterprise",
    setup: "$4,299",
    monthly: "Custom",
    tagline: "For high-volume, multi-site hiring operations.",
    highlight: false,
    summary: ["Unlimited roles", "Assessment Integrity Suite", "Full white-label", "Unlimited candidates", "Dedicated success team"],
  },
];

type Cell = string | boolean;

const rows: { label: string; starter: Cell; growth: Cell; enterprise: Cell }[] = [
  { label: "Setup Price", starter: "$899", growth: "$1,699", enterprise: "$4,299" },
  { label: "Standard Monthly*", starter: "$299", growth: "$599", enterprise: "Custom" },
  { label: "Role Capacity", starter: "1 role", growth: "Up to 8 roles", enterprise: "Unlimited" },
  { label: "JD Visualizer", starter: true, growth: true, enterprise: true },
  { label: "Simulator", starter: true, growth: true, enterprise: true },
  { label: "Assessment Suite", starter: "Core", growth: "Full", enterprise: "Full + Custom" },
  { label: "CV Gate", starter: false, growth: true, enterprise: true },
  { label: "White-Label", starter: false, growth: true, enterprise: true },
  { label: "LnD Modules", starter: false, growth: true, enterprise: true },
  { label: "Dashboards", starter: false, growth: true, enterprise: true },
  { label: "Assessment Integrity Suite", starter: false, growth: false, enterprise: true },
  { label: "Candidates", starter: "Up to 100", growth: "Up to 500", enterprise: "Unlimited" },
  { label: "Minor & Major Revisions", starter: "2 minor / 1 major", growth: "Unlimited minor / 4 major", enterprise: "Unlimited" },
];

function CellValue({ value }: { value: Cell }) {
  if (value === true) return <IconCheck className="mx-auto h-5 w-5 text-aqua" />;
  if (value === false) return <IconClose className="mx-auto h-4 w-4 text-navy/20" />;
  return <span className="text-navy/70">{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Pricing that scales with <span className="gradient-text">your hiring.</span>
          </>
        }
        subtitle="Transparent plans for structured hiring intelligence — from your first role to enterprise scale."
      />

      {/* Plan Cards */}
      <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-8">
        <Stagger className="grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <StaggerItem key={p.name} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className={`relative flex h-full flex-col overflow-hidden rounded-2xl border p-8 ${
                  p.highlight
                    ? "border-aqua/30 bg-navy text-white shadow-[0_24px_60px_-20px_rgba(12,68,95,0.3)]"
                    : "border-black/5 bg-white shadow-[0_12px_40px_-20px_rgba(0,0,0,0.06)]"
                }`}
              >
                {p.highlight && (
                  <span className="absolute right-6 top-6 rounded-full bg-aqua/20 px-3 py-1 text-xs font-semibold text-aqua-300">
                    Most popular
                  </span>
                )}
                <h3 className={`font-display text-lg font-bold ${p.highlight ? "text-white" : "text-navy"}`}>
                  {p.name}
                </h3>
                <p className={`mt-1 text-sm ${p.highlight ? "text-white/60" : "text-navy/55"}`}>{p.tagline}</p>

                <div className="mt-6">
                  <div className="flex items-end gap-1">
                    <span className={`font-display text-4xl font-extrabold ${p.highlight ? "text-white" : "text-navy"}`}>
                      {p.setup}
                    </span>
                    <span className={`pb-1 text-sm ${p.highlight ? "text-white/55" : "text-navy/50"}`}>setup</span>
                  </div>
                  <p className={`mt-1 text-sm ${p.highlight ? "text-aqua-300" : "text-deep"}`}>
                    then {p.monthly}{p.monthly !== "Custom" ? " / month*" : ""}
                  </p>
                </div>

                <ul className="mt-7 flex-1 space-y-3">
                  {p.summary.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <IconCheck className={`mt-0.5 h-4 w-4 shrink-0 ${p.highlight ? "text-aqua-300" : "text-aqua"}`} />
                      <span className={p.highlight ? "text-white/80" : "text-navy/70"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <CTAButton href="/book-demo" variant={p.highlight ? "aqua" : "primary"} className="w-full">
                    Get Started <ArrowIcon />
                  </CTAButton>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Full Feature Comparison Table */}
      <section className="mx-auto max-w-5xl px-5 pb-12 sm:px-8">
        <Reveal>
          <div className="text-center">
            <Eyebrow>Full Comparison</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-extrabold text-navy">Feature-by-feature breakdown.</h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-black/5 bg-white shadow-[0_12px_40px_-20px_rgba(0,0,0,0.06)]">
            <div className="min-w-[640px]">
              <div className="grid grid-cols-4 border-b border-black/5 bg-mist/60">
                <div className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-navy/50">Feature</div>
                <div className="px-5 py-4 text-center text-sm font-bold text-navy">Starter</div>
                <div className="px-5 py-4 text-center text-sm font-bold text-aqua">Growth</div>
                <div className="px-5 py-4 text-center text-sm font-bold text-navy">Enterprise</div>
              </div>
              {rows.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-4 items-center ${i < rows.length - 1 ? "border-b border-black/5" : ""} ${
                    i < 2 ? "bg-mist/30" : ""
                  }`}
                >
                  <div className="px-5 py-3.5 text-sm font-medium text-navy/75">{row.label}</div>
                  <div className="px-5 py-3.5 text-center text-sm"><CellValue value={row.starter} /></div>
                  <div className="px-5 py-3.5 text-center text-sm font-medium"><CellValue value={row.growth} /></div>
                  <div className="px-5 py-3.5 text-center text-sm"><CellValue value={row.enterprise} /></div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Notes */}
      <section className="mx-auto max-w-5xl px-5 pb-24 sm:px-8">
        <Reveal>
          <div className="rounded-2xl border border-black/5 bg-mist/50 p-6 sm:p-8">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-navy/60">Notes</h3>
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-navy/60">
              <li>* Standard Monthly applies after the one-time setup and covers platform access, hosting, and ongoing support for your active roles.</li>
              <li>Setup includes role calibration, JD visualization, simulator configuration, and assessment weighting tuned to each role.</li>
              <li>Minor revisions adjust copy, weights, and thresholds. Major revisions restructure roles, simulations, or scoring models.</li>
              <li>Candidate volumes reset monthly. Additional capacity is available on Growth and Enterprise plans.</li>
              <li>Enterprise pricing is tailored to volume, multi-site needs, integrations, and the Assessment Integrity Suite.</li>
            </ul>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/book-demo" variant="primary">
                Book a Strategy Call <ArrowIcon />
              </CTAButton>
              <CTAButton href="/contact" variant="secondary">
                Contact Sales
              </CTAButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
