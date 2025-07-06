import Hero from "../components/sections/hero";
import Features from "../components/sections/features";
import Pricing from "../components/sections/pricing";
import Download from "../components/sections/download";
import CTA from "../components/sections/cta";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <Pricing />
      <Download />
      <CTA />
    </div>
  );
}
