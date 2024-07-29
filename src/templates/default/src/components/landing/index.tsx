"use client";

import Navigation from "@/components/navigation";
import HeroSection from "@/components/landing/hero_section";
import FeaturedPlants from "@/components/landing/featured_plants";
import HowItWorks from "@/components/landing/how_it_works";
import Testimonials from "@/components/landing/testimonials";
import CtaButton from "@/components/landing/cta_button";
import { usePlatformStore } from "@/store/platform.store";

export const LandingPage = ({ platform }: { platform: any }) => {
  const setPlatform = usePlatformStore((state) => state.setPlatform);
  setPlatform(platform);

  return (
    <>
      <Navigation />
      <HeroSection />
      <FeaturedPlants />
      <HowItWorks />
      <Testimonials />
      <CtaButton />
    </>
  );
};
