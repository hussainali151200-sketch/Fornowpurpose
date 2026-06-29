import Link from "next/link";

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="46" fill="#ffffff" stroke="#37a8bb" strokeWidth="5" />
      <text
        x="20"
        y="68"
        fontFamily="var(--font-manrope), Arial, sans-serif"
        fontSize="56"
        fontWeight="800"
        fill="#1a2e4a"
      >
        R
      </text>
      <circle cx="62" cy="46" r="17" fill="none" stroke="#37a8bb" strokeWidth="5" />
      <circle cx="62" cy="41" r="5" fill="#1a2e4a" />
      <path d="M52 55 a10 8 0 0 1 20 0 z" fill="#1a2e4a" />
      <line x1="74" y1="58" x2="84" y2="70" stroke="#37a8bb" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ className = "", textClass = "" }: { className?: string; textClass?: string }) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="RecruitOxide home">
      <LogoMark className="h-9 w-9 shrink-0 transition-transform duration-500 group-hover:rotate-[-8deg]" />
      <span className={`font-display text-[1.35rem] font-extrabold tracking-tight ${textClass}`}>
        <span className="text-navy">Recruit</span>
        <span className="text-aqua">Oxide</span>
      </span>
    </Link>
  );
}
