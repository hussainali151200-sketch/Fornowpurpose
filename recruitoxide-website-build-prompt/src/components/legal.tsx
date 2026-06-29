import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";

export interface LegalSection {
  heading: string;
  body: string[];
}

export function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={`Last updated: ${updated}`} />
      <section className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
        <Reveal>
          <p className="text-base leading-relaxed text-navy/65">{intro}</p>
        </Reveal>
        <div className="mt-10 space-y-8">
          {sections.map((s, i) => (
            <Reveal key={s.heading} delay={i * 0.03}>
              <div>
                <h2 className="font-display text-xl font-bold text-navy">{s.heading}</h2>
                {s.body.map((p, j) => (
                  <p key={j} className="mt-3 text-sm leading-relaxed text-navy/60">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
