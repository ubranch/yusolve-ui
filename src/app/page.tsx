import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import SolutionsSection from '@/components/home/SolutionsSection';
import PricingSection from '@/components/home/PricingSection';
import TestimonialSection from '@/components/home/TestimonialSection';

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
