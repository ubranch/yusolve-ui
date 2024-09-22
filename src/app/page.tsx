import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import SolutionsSection from '@/components/SolutionsSection';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutSection />
      <SolutionsSection />
      {/* Other page content */}
    </main>
  );
}
