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
    </div>
  );
}

export default Home;
