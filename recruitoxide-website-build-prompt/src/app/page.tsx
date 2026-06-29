import { Hero } from "@/components/home/hero";
import {
  ProblemComparison,
  TwoWaysToHire,
  SystemArchitecture,
  HowItWorks,
  Outcomes,
  Industries,
  CaseStudies,
  Testimonials,
  AboutValues,
  FinalCTA,
} from "@/components/home/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemComparison />
      <SystemArchitecture />
      <HowItWorks />
      <Outcomes />
      <TwoWaysToHire />
      <Industries />
      <CaseStudies />
      <Testimonials />
      <AboutValues />
      <FinalCTA />
    </>
  );
}
