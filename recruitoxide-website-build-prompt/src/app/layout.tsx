import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://recruitoxide.com"),
  title: {
    default: "RecruitOxide — Managed Hiring Intelligence OS",
    template: "%s · RecruitOxide",
  },
  description:
    "RecruitOxide replaces subjective resume review with structured, role-aligned hiring intelligence. From 100 applicants to 10 interview-ready candidates in 5 days.",
  keywords: [
    "hiring intelligence",
    "recruitment software",
    "managed hiring",
    "RoleMatch",
    "candidate assessment",
    "hiring OS",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "RecruitOxide — Managed Hiring Intelligence OS",
    description:
      "Smarter Hiring. Talent. Intelligence. Results. Reduce hiring cycles from 30 days to 5.",
    url: "https://recruitoxide.com",
    siteName: "RecruitOxide",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased text-ink bg-[#f7fafb]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
