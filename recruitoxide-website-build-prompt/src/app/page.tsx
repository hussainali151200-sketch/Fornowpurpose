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
import { HeroVideo } from "@/components/hero-video";
import { VideoBlock } from "@/components/video-block";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemComparison />
      <SystemArchitecture />
      <HowItWorks />
      {/* Pipeline video (video2) - upload /public/video2.mp4 */}
      <HeroVideo
        src="/video2.mp4"
        eyebrow="The Pipeline"
        title="From 100 applicants to 10 finalists in 5 days."
        subtitle="A 90-second look at how the RecruitOxide Hiring Intelligence OS delivers a decision-ready shortlist."
      />
      <Outcomes />
      <TwoWaysToHire />
      <Industries />
      <CaseStudies />
      <Testimonials />
      <AboutValues />
      {/* Philosophy video (video1) - upload /public/video1.mp4 */}
      <VideoBlock
        src="/video1.mp4"
        eyebrow="Our Philosophy"
        title="Structured hiring, not subjective guessing."
        subtitle="See how RecruitOxide replaces resume noise with role-aligned signal — from the first click to the signed offer."
        reversed
      />
      <FinalCTA />
    </>
  );
}
