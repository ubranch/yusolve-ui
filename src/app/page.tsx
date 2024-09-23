import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import SolutionsSection from '@/components/SolutionsSection';
import PricingSection from '@/components/PricingSection';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutSection />
      <SolutionsSection />
      <PricingSection />
      {/* Other page content */}
    </main>
  );
}
