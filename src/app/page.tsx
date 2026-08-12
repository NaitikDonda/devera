import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedWork } from "@/components/FeaturedWork";
import { DeviceShowcase } from "@/components/DeviceShowcase";
import { ParallaxGallery } from "@/components/ParallaxGallery";
import { Services } from "@/components/Services";
import { AboutSection } from "@/components/AboutSection";
import { FounderSection } from "@/components/FounderSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";
import { Reviews } from "@/components/Reviews";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedWork />
      <DeviceShowcase />
      <ParallaxGallery />
      <Services />
      <AboutSection />
      <FounderSection />
      <Reviews />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
