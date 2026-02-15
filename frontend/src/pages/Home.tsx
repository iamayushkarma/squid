import CompaniesSection from "@/components/sections/CompaniesSection";
import FeatureSection from "@/components/sections/FeatureSection";
import GetInTouch from "@/components/sections/GetInTouch";
import GridMask from "@/components/sections/GridMask";
import GuideSection from "@/components/sections/GuideSection";
import HeroSection from "@/components/sections/HeroSection";
import { useLayoutEffect } from "react";

function Home() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <GridMask />
      <FeatureSection />
      <GuideSection />
      <CompaniesSection />
      <GetInTouch />
    </div>
  );
}

export default Home;
