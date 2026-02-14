import CompaniesSection from "@/components/sections/CompaniesSection";
import FeatureSection from "@/components/sections/FeatureSection";
import GridMask from "@/components/sections/GridMask";
import GuideSection from "@/components/sections/GuideSection";
import HeroSection from "@/components/sections/HeroSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <GridMask />
      <FeatureSection />
      <GuideSection />
      <CompaniesSection />
    </div>
  );
}

export default Home;
