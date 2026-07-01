import Link from "next/link";
import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-0 ${className}`} aria-label="RecruitOxide home">
      <Image
        src="/logo.svg"
        alt="RecruitOxide"
        width={180}
        height={36}
        priority
        className="h-8 w-auto transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </Link>
  );
}
