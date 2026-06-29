import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionDetail } from "@/components/solution-detail";
import { getSolution } from "@/lib/site";

const s = getSolution("rolematch-engine");

export const metadata: Metadata = {
  title: s?.name,
  description: s?.short,
};

export default function Page() {
  if (!s) notFound();
  return <SolutionDetail s={s} />;
}
