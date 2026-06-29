import type { Metadata } from "next";
import { LegalPage } from "@/components/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of RecruitOxide's website and services.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="January 1, 2026"
      intro="These Terms of Service (\u201cTerms\u201d) govern your access to and use of the RecruitOxide website and services. By accessing or using our services, you agree to be bound by these Terms. If you do not agree, do not use our services."
      sections={[
        {
          heading: "1. Services",
          body: [
            "RecruitOxide provides a Managed Hiring Intelligence operating system combining software capabilities and managed execution. Features, availability, and pricing may change over time.",
          ],
        },
        {
          heading: "2. Eligibility & Accounts",
          body: [
            "You must be at least 18 years old and able to form a binding contract to use our services.",
            "You are responsible for maintaining the confidentiality of any account credentials and for all activity under your account.",
          ],
        },
        {
          heading: "3. Acceptable Use",
          body: [
            "You agree not to misuse the services, including by attempting unauthorized access, interfering with operation, or using the services for unlawful, discriminatory, or harmful purposes.",
            "You are responsible for ensuring your use of hiring intelligence complies with applicable employment and anti-discrimination laws.",
          ],
        },
        {
          heading: "4. Intellectual Property",
          body: [
            "All content, trademarks, and software associated with RecruitOxide \u2014 including Experience The Role\u2122, RoleMatch\u2122, and Intelligence Console\u2122 \u2014 are owned by RecruitOxide or its licensors and are protected by law.",
            "You may not copy, modify, distribute, or reverse engineer any part of the services except as expressly permitted.",
          ],
        },
        {
          heading: "5. Fees & Payment",
          body: [
            "Paid plans are billed according to the plan you select. Fees are non-refundable except as required by law or expressly stated.",
          ],
        },
        {
          heading: "6. Disclaimers & Limitation of Liability",
          body: [
            "The services are provided \u201cas is\u201d without warranties of any kind. RecruitOxide does not guarantee any specific hiring outcome.",
            "To the maximum extent permitted by law, RecruitOxide is not liable for indirect, incidental, or consequential damages arising from your use of the services.",
          ],
        },
        {
          heading: "7. Governing Law & Contact",
          body: [
            "These Terms are governed by the laws of the State of New Mexico, United States, without regard to conflict-of-law principles.",
            "Questions about these Terms? Contact hello@recruitoxide.com.",
          ],
        },
      ]}
    />
  );
}
