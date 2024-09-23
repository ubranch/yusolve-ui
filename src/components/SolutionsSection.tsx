import React from 'react';
import { FocusCards } from "@/components/ui/focus-cards";

const SolutionsSection: React.FC = () => {
  const cards = [
    {
      title: "DOT Safety Compliance",
      src: "/images/solutions/service-DOT.jpg",
      href: "/dot-safety-compliance/"
    },
    {
      title: "Permits & Tax Services",
      src: "/images/solutions/service-permits.jpg",
      href: "/permits/"
    },
    {
      title: "Freight Planning",
      src: "/images/solutions/service-freight-planning.jpg",
      href: "/freight-planning/"
    },
    {
      title: "Factoring",
      src: "/images/solutions/service-factoring.jpg",
      href: "/factoring/"
    },
    {
      title: "Insurance",
      src: "/images/solutions/service-insurance.jpg",
      href: "/insurance-coverage/"
    },
    {
      title: "ELD",
      src: "/images/solutions/service-eld.jpg",
      href: "/eld-system/"
    }
  ];

  return (
    <section id="services-section" className="py-20 lg:py-28 bg-white lg:bg-[#18344a]">
      <div className="w-[95%] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#18344a] lg:text-white mb-12">
          Our Solutions
        </h2>
        <div className="w-full"> {/* Added this wrapper div */}
          <FocusCards cards={cards} />
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
