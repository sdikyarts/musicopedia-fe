import HeroSection from "./components/sections/landing-page/HeroSection";
import FeaturedArtistsSection from "./components/sections/landing-page/FeaturedArtistsSection";
import FeaturedGroupsSection from "./components/sections/landing-page/FeaturedGroupsSection";
import FeaturedSoloistsSection from "./components/sections/landing-page/FeaturedSoloistsSection";
import BirthdaysSection from "./components/sections/landing-page/BirthdaysSection";
import AnniversariesSection from "./components/sections/landing-page/AnniversariesSection";
import HowItWorksSection from "./components/sections/landing-page/HowItWorksSection";

export default function Home() {
  return (
    <div className="pt-20 md:pt-24">
      <HeroSection />
      <div className="space-y-8">
        <FeaturedArtistsSection />
        <FeaturedGroupsSection />
        <FeaturedSoloistsSection />
        <BirthdaysSection />
        <AnniversariesSection />
        <HowItWorksSection />
      </div>
    </div>
  );
}
