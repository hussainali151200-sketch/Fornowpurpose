import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal, Stagger, StaggerItem, Counter } from "@/components/motion";
import { CTAButton, ArrowIcon, SectionHeading, Eyebrow } from "@/components/ui";
import { IconSignal, IconTransparency, IconPartnership, IconOutcomes } from "@/components/icons";
import { VideoBlock } from "@/components/video-block";

export const metadata: Metadata = {
  title: "About — The Managed Hiring Intelligence OS",
  description:
    "RecruitOxide is a US-based Managed Hiring Intelligence OS replacing resume noise with structured signal.",
};

const values = [
  { t: "Signal over noise", d: "We replace resume guesswork with structured, comparable intelligence.", Icon: IconSignal },
  { t: "Radical transparency", d: "Every score explains itself. No black boxes, ever.", Icon: IconTransparency },
  { t: "Managed partnership", d: "We run the hiring intelligence alongside your team.", Icon: IconPartnership },
  { t: "Measured outcomes", d: "Faster cycles, better hires, lower risk — proven, not promised.", Icon: IconOutcomes },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About RecruitOxide"
        title={
          <>
            We make hiring a <span className="gradient-text">structured decision.</span>
          </>
        }
        subtitle="A US-based Managed Hiring Intelligence OS combining software and managed execution — built to turn resume noise into role-aligned signal."
      />

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <Stagger className="grid gap-5 sm:grid-cols-3">
          {[
            { v: <><Counter to={100} />→<Counter to={10} /></>, l: "Applicants to finalists" },
            { v: <><Counter to={30} />→<Counter to={5} /> days</>, l: "Cycle compression" },
            { v: <><Counter to={83} suffix="%" /></>, l: "Faster than traditional hiring" },
          ].map((s, i) => (
            <StaggerItem key={i}>
              <div className="rounded-3xl border border-black/5 bg-white p-8 text-center shadow-[0_20px_60px_-44px_rgba(12,68,95,0.6)]">
                <div className="font-display text-3xl font-extrabold text-deep sm:text-4xl">{s.v}</div>
                <p className="mt-3 text-sm text-navy/55">{s.l}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-black/5 bg-white p-8">
              <Eyebrow>Our Mission</Eyebrow>
              <p className="mt-5 font-display text-2xl font-bold leading-snug text-navy">
                Make every hire a structured, defensible decision — replacing subjectivity with signal.
              </p>
              <p className="mt-5 leading-relaxed text-navy/60">
                Hiring shouldn&apos;t come down to a gut feeling at the end of a long week. We give teams the
                structured intelligence to decide with confidence, speed, and fairness.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-aqua/20 bg-gradient-to-br from-navy to-deep p-8 text-white">
              <Eyebrow>Our Vision</Eyebrow>
              <p className="mt-5 font-display text-2xl font-bold leading-snug">
                A world where great talent and great teams find each other in days, not months.
              </p>
              <p className="mt-5 leading-relaxed text-white/65">
                We&apos;re building the operating system that makes role-aligned, transparent hiring the
                default — for every growing team in the US and beyond.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Our Values" title="What we stand for." />
        </Reveal>
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
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
      </section>

      {/* Video 1 - upload /public/video1.mp4 */}
      <VideoBlock
        src="/video1.mp4"
        eyebrow="Watch Our Story"
        title="Intelligence, not intuition."
        subtitle="A quick look at how RecruitOxide changes the hiring equation for US teams."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Reveal>
          <div className="rounded-[2.5rem] border border-aqua/20 bg-gradient-to-br from-mist to-white p-10 text-center sm:p-14">
            <SectionHeading
              title="Let's build your hiring advantage."
              subtitle="See the system applied to one of your open roles."
            />
            <div className="mt-7 flex justify-center">
              <CTAButton href="/book-demo" variant="primary">
                Book a Strategy Call <ArrowIcon />
              </CTAButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
