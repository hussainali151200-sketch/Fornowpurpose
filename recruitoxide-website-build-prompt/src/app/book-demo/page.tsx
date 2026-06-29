import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { LeadForm } from "@/components/lead-form";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description:
    "Book a RecruitOxide strategy call. See how we turn 100 applicants into 10 decision-ready candidates in 5 days.",
};

const gcalEmbed = process.env.NEXT_PUBLIC_GCAL_EMBED_URL;

export default function BookDemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a Strategy Call"
        title={
          <>
            See your hiring, <span className="gradient-text">transformed.</span>
          </>
        }
        subtitle="In 30 minutes we'll map your open role to the RecruitOxide system and show how to reach a decision-ready shortlist in 5 days."
      />

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Calendar */}
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.06)]">
              <Eyebrow>Pick a time</Eyebrow>
              <h2 className="mt-4 font-display text-xl font-bold text-navy">Schedule instantly</h2>
              <div className="mt-5 flex-1 overflow-hidden rounded-xl border border-black/5 bg-mist">
                {gcalEmbed ? (
                  <iframe
                    src={gcalEmbed}
                    title="Book a RecruitOxide strategy call"
                    className="h-[520px] w-full"
                    style={{ border: 0 }}
                  />
                ) : (
                  <div className="flex h-[400px] flex-col items-center justify-center px-8 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-aqua/10 text-2xl">
                      📅
                    </div>
                    <p className="mt-4 font-display font-bold text-navy">Calendar not configured</p>
                    <p className="mt-2 max-w-xs text-sm text-navy/55">
                      Set <code className="rounded bg-navy/5 px-1.5 py-0.5 text-xs">NEXT_PUBLIC_GCAL_EMBED_URL</code>{" "}
                      to your Google Appointment Schedule embed URL. Meanwhile, use the form to request a time.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-black/5 bg-white p-7 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.06)] sm:p-9">
              <Eyebrow>Or request a time</Eyebrow>
              <h2 className="mt-4 font-display text-xl font-bold text-navy">Tell us about your role</h2>
              <p className="mt-1 text-sm text-navy/55">We'll reach out to confirm your strategy call.</p>
              <div className="mt-6">
                <LeadForm type="book-demo" submitLabel="Request Strategy Call" showRole />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
