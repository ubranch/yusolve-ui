import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import SolutionsSection from '@/components/SolutionsSection';
import PricingSection from '@/components/PricingSection';
import TestimonialSection from '@/components/TestimonialSection';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutSection />
      <SolutionsSection />
      <PricingSection />
      <TestimonialSection />
      {/* Other page content */}
    </main>
  );
}
