import Hero from "@/components/sections/Hero";
import FourFs from "@/components/sections/FourFs";
import AboutSection from "@/components/sections/AboutSection";
import Stats from "@/components/sections/Stats";
import Lifestyle from "@/components/sections/Lifestyle";
import BookSection from "@/components/sections/BookSection";
import Transformation from "@/components/sections/Transformation";
import Testimonials from "@/components/sections/Testimonials";
import ApplyCTA from "@/components/sections/ApplyCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <FourFs />
      <AboutSection />
      <Lifestyle />
      <BookSection />
      <Transformation />
      <Testimonials />
      <ApplyCTA />
    </main>
  );
}