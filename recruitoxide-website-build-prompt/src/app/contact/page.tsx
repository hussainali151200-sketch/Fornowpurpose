import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { LeadForm } from "@/components/lead-form";
import { SITE } from "@/lib/site";
import { IconMail, IconPhone, IconLinkedIn, IconInstagram, IconLocation } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact — Talk to RecruitOxide",
  description: "Get in touch with the RecruitOxide team. Email hello@recruitoxide.com.",
};

const channels = [
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, Icon: IconMail },
  { label: "Phone", value: SITE.phone, href: `tel:${SITE.phone.replace(/[^+\d]/g, "")}`, Icon: IconPhone },
  { label: "LinkedIn", value: "linkedin.com/company/recruitoxide", href: SITE.linkedin, Icon: IconLinkedIn },
  { label: "Instagram", value: "@recruitoxide", href: SITE.instagram, Icon: IconInstagram },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk <span className="gradient-text">hiring intelligence.</span>
          </>
        }
        subtitle="Reach out and our team will respond quickly. For partnerships or support, we're here."
      />

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="space-y-4">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="card-hover group flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-aqua/10 text-aqua transition-all duration-300 group-hover:scale-105 group-hover:bg-aqua group-hover:text-white">
                    <c.Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-navy/45">
                      {c.label}
                    </span>
                    <span className="block font-medium text-navy">{c.value}</span>
                  </span>
                </a>
              ))}
              <div className="flex items-start gap-4 rounded-2xl border border-black/5 bg-white p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-aqua/10 text-aqua">
                  <IconLocation className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-navy/45">
                    Headquarters
                  </span>
                  <span className="mt-1 block font-medium text-navy">{SITE.address}</span>
                  <p className="mt-1 text-sm text-navy/55">Serving growing teams across the United States.</p>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-black/5 bg-white p-7 shadow-[0_24px_70px_-50px_rgba(12,68,95,0.7)] sm:p-9">
              <h2 className="font-display text-xl font-bold text-navy">Send us a message</h2>
              <p className="mt-1 text-sm text-navy/55">We typically reply within one business day.</p>
              <div className="mt-6">
                <LeadForm type="contact" submitLabel="Send Message" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
