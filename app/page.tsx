import Hero from "../components/sections/hero";
import Problem from "../components/sections/problem";
import Solution from "../components/sections/solution";
import Features from "../components/sections/features";
import HowItWorks from "../components/sections/how-it-works";
import Credibility from "../components/sections/credibility";
import TargetAudience from "../components/sections/target-audience";
import CTA from "../components/sections/cta";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Credibility />
      <TargetAudience />
      <CTA />
    </div>
  );
}
