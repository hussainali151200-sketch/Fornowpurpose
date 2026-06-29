export const SITE = {
  name: "RecruitOxide",
  domain: "recruitoxide.com",
  email: "hello@recruitoxide.com",
  instagram: "https://www.instagram.com/recruitoxide/",
  linkedin: "https://www.linkedin.com/company/recruitoxide/",
  address: "New Mexico, United States",
  phone: "+1 (505) 555-0142",
  tagline: "Smarter Hiring. Talent. Intelligence. Results.",
};

export type SolutionKey =
  | "job-visualization"
  | "experience-the-role"
  | "assessment-suite"
  | "rolematch-engine"
  | "intelligence-console"
  | "learning-development";

export interface Solution {
  key: SolutionKey;
  name: string;
  trademark?: string;
  short: string;
  tagline: string;
  demoUrl: string;
  icon: string;
  accent: string;
  problem: string;
  description: string;
  impact: { label: string; value: string }[];
  features: { title: string; body: string }[];
  hero: string;
}

export const SOLUTIONS: Solution[] = [
  {
    key: "job-visualization",
    name: "Job Visualization Layer",
    short: "Turn static job descriptions into living, structured role intelligence.",
    tagline: "See the role before the resume.",
    demoUrl: "https://jd.recruitoxide.com",
    icon: "🪟",
    accent: "from-[#0c445f] to-[#37a8bb]",
    hero: "Every role, visualized. Every expectation, structured.",
    problem:
      "Traditional job descriptions are walls of text that hide what the role truly demands. Candidates self-select poorly and hiring teams compare apples to oranges.",
    description:
      "The Job Visualization Layer converts a flat job post into an interactive blueprint — time allocation, team fit, requirements with weighted proficiency, growth paths, and live hiring intelligence. It aligns expectations before a single resume is reviewed.",
    impact: [
      { label: "Clearer expectations", value: "100%" },
      { label: "Fewer mismatched applicants", value: "-42%" },
      { label: "Faster candidate self-qualification", value: "3x" },
    ],
    features: [
      { title: "Time & Day Modeling", body: "A transparent breakdown of how a week actually flows in the role." },
      { title: "Where You Fit", body: "Org placement and the capability map candidates bring to the team." },
      { title: "Weighted Requirements", body: "Proficiency-scored skills marked required, preferred, or nice-to-have." },
      { title: "Beyond the Description", body: "Live candidate-match and projected role outcomes a static doc can't show." },
    ],
  },
  {
    key: "experience-the-role",
    name: "Experience The Role™",
    trademark: "™",
    short: "An interactive, simulation-based preview of a real day in the role.",
    tagline: "Not a description. Not a test. A real day at work.",
    demoUrl: "https://role.recruitoxide.com",
    icon: "🎬",
    accent: "from-[#1a2e4a] to-[#0c445f]",
    hero: "Let candidates live the role before they apply.",
    problem:
      "Resumes and interviews can't reveal how someone performs in the actual moments of a job. Bad fits slip through and good candidates opt out blindly.",
    description:
      "Experience The Role™ drops candidates into a guided, scenario-based simulation — a morning inbox to triage, escalations to handle, decisions to make. It captures behavioral signal that no questionnaire can, in about five minutes.",
    impact: [
      { label: "Behavioral signal captured", value: "5 min" },
      { label: "Self-selection accuracy", value: "+58%" },
      { label: "Reduced early attrition", value: "-31%" },
    ],
    features: [
      { title: "Scenario Moments", body: "Realistic, sequenced workplace moments candidates navigate live." },
      { title: "No Questions, No Tests", body: "Signal emerges from decisions, not from quiz answers." },
      { title: "Role Authenticity", body: "Branded to the hiring company and tuned to the actual job." },
      { title: "Structured Output", body: "Every choice feeds the RoleMatch™ Engine as comparable data." },
    ],
  },
  {
    key: "assessment-suite",
    name: "Assessment Suite",
    short: "Standardized, role-aligned evaluation across skills, behavior, and aptitude.",
    tagline: "Replace gut-feel with measured, comparable signal.",
    demoUrl: "https://assessment.recruitoxide.com",
    icon: "📊",
    accent: "from-[#0c445f] to-[#37a8bb]",
    hero: "Assessment that measures what the role actually needs.",
    problem:
      "Generic tests measure trivia, not job readiness. Interview scores drift between panelists, making candidate comparison unreliable and biased.",
    description:
      "The Assessment Suite delivers role-calibrated evaluations across CV signal, aptitude, language, and technical depth — producing consistent, weighted scores every stakeholder can trust and compare side by side.",
    impact: [
      { label: "Scoring consistency", value: "99%" },
      { label: "Bias reduction", value: "High" },
      { label: "Evaluation time saved", value: "-70%" },
    ],
    features: [
      { title: "Role Calibration", body: "Each assessment is weighted to the specific role's priorities." },
      { title: "Multi-Dimensional", body: "CV, aptitude, language, and technical signals in one profile." },
      { title: "Comparable Scores", body: "Standardized output so candidates rank against the same bar." },
      { title: "Audit-Ready", body: "Transparent, explainable scoring for compliant hiring decisions." },
    ],
  },
  {
    key: "rolematch-engine",
    name: "RoleMatch™ Engine",
    trademark: "™",
    short: "Deterministic, weighted matching that turns signal into a single score.",
    tagline: "Weighted, role-aligned logic. Transparent intelligence.",
    demoUrl: "https://engine.recruitoxide.com",
    icon: "🎯",
    accent: "from-[#1a2e4a] to-[#37a8bb]",
    hero: "One transparent score that explains itself.",
    problem:
      "Black-box matching tools spit out scores nobody can defend. Hiring managers can't see why a candidate ranked where they did — so they don't trust it.",
    description:
      "RoleMatch™ extracts key role-aligned signals from resumes — including keywords, skills, experience duration, and measurable performance indicators — then aggregates weighted category scores into one transparent match index. Each category shows its raw score, weight, and contribution, so every result is explainable and defensible.",
    impact: [
      { label: "Overall match clarity", value: "86%+" },
      { label: "Explainable categories", value: "100%" },
      { label: "Decision confidence", value: "Very High" },
    ],
    features: [
      { title: "Weighted Breakdown", body: "Raw score × configured role weight = transparent contribution." },
      { title: "Skill Radar", body: "Visual capability map across the dimensions that matter." },
      { title: "Extracted Intelligence", body: "Years, tools, metrics, and certifications surfaced automatically." },
      { title: "Structured Risk Insight", body: "Clear gaps and strengths instead of a mysterious number." },
    ],
  },
  {
    key: "intelligence-console",
    name: "Intelligence Console™",
    trademark: "™",
    short: "An executive overview of every intelligence layer at a glance.",
    tagline: "All your hiring intelligence, centralized.",
    demoUrl: "https://console.recruitoxide.com",
    icon: "🧭",
    accent: "from-[#0c445f] to-[#1a2e4a]",
    hero: "Command your entire pipeline from one console.",
    problem:
      "Hiring data lives in scattered spreadsheets, inboxes, and tools. Leaders can't see the funnel, the trends, or who's actually decision-ready.",
    description:
      "The Intelligence Console™ unifies applicants, screening, shortlists, and RoleMatch™ averages into a single executive view — with category scores, trends, distribution, and a ranked candidate table. The full funnel, decision-ready.",
    impact: [
      { label: "Pipeline visibility", value: "Real-time" },
      { label: "Time to shortlist", value: "5 days" },
      { label: "Faster than traditional", value: "83%" },
    ],
    features: [
      { title: "Funnel Metrics", body: "Total applicants, screened, shortlisted, and average RoleMatch™." },
      { title: "Score Trends", body: "Track quality movement across the hiring window." },
      { title: "Distribution View", body: "See how candidate quality clusters at a glance." },
      { title: "Ranked Candidates", body: "Top candidates with status, ready for the decision call." },
    ],
  },
  {
    key: "learning-development",
    name: "Learning & Development Layer",
    short: "Continuous learning from candidate prep to post-hire performance growth.",
    tagline: "More than hiring — a continuous learning journey.",
    demoUrl: "https://learn.recruitoxide.com",
    icon: "🎓",
    accent: "from-[#37a8bb] to-[#0c445f]",
    hero: "Hiring is the start. Growth is the system.",
    problem:
      "Most hiring stops at the offer. New hires ramp slowly, onboarding is inconsistent, and skill gaps surface only after they cost the team.",
    description:
      "The Learning & Development Layer extends intelligence beyond hire — structured onboarding paths, modules, quizzes, and adaptive tracks that unlock based on real performance signals, turning a new hire into a high performer faster.",
    impact: [
      { label: "Faster ramp to productivity", value: "2x" },
      { label: "Onboarding consistency", value: "100%" },
      { label: "Adaptive learning paths", value: "Dynamic" },
    ],
    features: [
      { title: "Onboarding Paths", body: "Structured module sequences tailored to each role." },
      { title: "Video, Docs & Quizzes", body: "Multi-format learning that confirms understanding." },
      { title: "Adaptive Tracks", body: "What comes next is tuned to real performance signals." },
      { title: "Continuous Growth", body: "From candidate prep to ongoing skill development." },
    ],
  },
];

export const NAV_LINKS = [
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function getSolution(key: string) {
  return SOLUTIONS.find((s) => s.key === key);
}
