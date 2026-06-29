import type { Metadata } from "next";
import { LegalPage } from "@/components/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How RecruitOxide collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="January 1, 2026"
      intro="RecruitOxide ('we', 'us', or 'our') respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit recruitoxide.com or use our services. By using our website, you consent to the practices described here."
      sections={[
        {
          heading: "1. Information We Collect",
          body: [
            "We collect information you provide directly, such as your name, email address, company, phone number, and any message content submitted through our forms.",
            "We also collect limited technical information automatically, including IP address, browser type, device information, and usage data via cookies and similar technologies.",
          ],
        },
        {
          heading: "2. How We Use Your Information",
          body: [
            "We use your information to respond to inquiries, schedule and conduct strategy calls, provide and improve our services, send relevant communications, and comply with legal obligations.",
            "We do not sell your personal information to third parties.",
          ],
        },
        {
          heading: "3. Legal Bases & Your Rights",
          body: [
            "Depending on your jurisdiction (including under US state privacy laws such as the CCPA/CPRA), you may have the right to access, correct, delete, or restrict the processing of your personal information, and to opt out of certain data practices.",
            "To exercise these rights, contact us at hello@recruitoxide.com.",
          ],
        },
        {
          heading: "4. Data Sharing",
          body: [
            "We may share information with trusted service providers who help us operate our business (for example, email delivery and analytics providers), under appropriate confidentiality and data-protection terms.",
            "We may disclose information if required by law or to protect our rights and the safety of others.",
          ],
        },
        {
          heading: "5. Data Retention & Security",
          body: [
            "We retain personal information for as long as necessary to fulfill the purposes described in this policy or as required by law.",
            "We implement reasonable administrative, technical, and physical safeguards to protect your information. No method of transmission over the internet is 100% secure.",
          ],
        },
        {
          heading: "6. Children's Privacy",
          body: [
            "Our services are not directed to individuals under 16, and we do not knowingly collect personal information from children.",
          ],
        },
        {
          heading: "7. Changes & Contact",
          body: [
            "We may update this Privacy Policy from time to time. The 'Last updated' date reflects the most recent revision.",
            "Questions? Contact us at hello@recruitoxide.com or RecruitOxide, New Mexico, United States.",
          ],
        },
      ]}
    />
  );
}
