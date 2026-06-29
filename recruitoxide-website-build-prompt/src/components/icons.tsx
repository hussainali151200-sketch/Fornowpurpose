import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ---------- Solution / layer icons (minimal line style) ---------- */
export function IconVisualize(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <path d="M3 9h18M9 21V9" />
      <circle cx="15" cy="6" r="0.5" fill="currentColor" />
    </svg>
  );
}

export function IconExperience(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5l5 3.5-5 3.5z" />
    </svg>
  );
}

export function IconAssessment(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21h18" />
      <rect x="5" y="11" width="3.5" height="7" rx="1" />
      <rect x="10.25" y="6" width="3.5" height="12" rx="1" />
      <rect x="15.5" y="9" width="3.5" height="9" rx="1" />
    </svg>
  );
}

export function IconRoleMatch(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function IconConsole(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="3.5" width="19" height="13" rx="2" />
      <path d="M8 20.5h8M12 16.5v4" />
      <path d="M6.5 12.5l2.5-2.5 2.5 2 3-3.5" />
    </svg>
  );
}

export function IconLearning(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 7L3 4.5 12 2l9 2.5z" />
      <path d="M5 8v5c0 1.4 3.1 3 7 3s7-1.6 7-3V8" />
      <path d="M21 6v5.5" />
    </svg>
  );
}

export const solutionIconMap: Record<string, (p: IconProps) => React.ReactElement> = {
  "job-visualization": IconVisualize,
  "experience-the-role": IconExperience,
  "assessment-suite": IconAssessment,
  "rolematch-engine": IconRoleMatch,
  "intelligence-console": IconConsole,
  "learning-development": IconLearning,
};

/* ---------- Value icons ---------- */
export function IconSignal(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 18l5-6 4 3 6-9" />
      <path d="M18 6h3v3" />
    </svg>
  );
}

export function IconTransparency(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function IconPartnership(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 12l2 2 4-4" />
      <path d="M16 3.5a2.5 2.5 0 013 2.5c0 .8-.4 1.6-1 2.1M8 3.5a2.5 2.5 0 00-3 2.5c0 .8.4 1.6 1 2.1" />
      <path d="M3 20c0-3 2.7-5 6-5h6c3.3 0 6 2 6 5" />
      <circle cx="12" cy="9" r="3.2" />
    </svg>
  );
}

export function IconOutcomes(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

/* ---------- Social / contact icons ---------- */
export function IconLinkedIn(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="3" />
      <path d="M7 10v7M7 7v.01" />
      <path d="M11 17v-4a2 2 0 014 0v4M11 10v7" />
    </svg>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 3.5h3l1.5 5-2 1.5a13 13 0 005.5 5.5l1.5-2 5 1.5v3a2 2 0 01-2 2A16.5 16.5 0 013 5.5a2 2 0 012-2z" />
    </svg>
  );
}

export function IconLocation(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

/* ---------- Misc ---------- */
export function IconCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function IconCalendar(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M8 2.5v4M16 2.5v4" />
    </svg>
  );
}
