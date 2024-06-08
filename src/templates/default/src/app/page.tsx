// app/page.tsx
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero_section";
import FeaturedPlants from "@/components/featured_plants";
import HowItWorks from "@/components/how_it_works";
import Testimonials from "@/components/testimonials";
import CtaButton from "@/components/cta_button";

export default function LandingPage() {
  return (
    <main className="">
      <Navigation />
      <HeroSection />
      <FeaturedPlants />
      <HowItWorks />
      <Testimonials />
      <CtaButton />
    </main>
  );
}
