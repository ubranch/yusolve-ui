import React from 'react';
import { FocusCards } from "@/components/ui/focus-cards";

const SolutionsSection: React.FC = () => {
  const cards = [
    {
      title: "DOT Safety Compliance",
      src: "https://simplexgroup.net/wp-content/uploads/2023/01/service-DOT.jpg",
      href: "/dot-safety-compliance/"
    },
    {
      title: "Permits & Tax Services",
      src: "https://simplexgroup.net/wp-content/uploads/2023/01/service-permits.jpg",
      href: "https://simplexgroup.net/permits/"
    },
    {
      title: "Freight Planning",
      src: "https://simplexgroup.net/wp-content/uploads/2023/01/service-freight-planning.jpg",
      href: "https://simplexgroup.net/freight-planning/"
    },
    {
      title: "Factoring",
      src: "https://simplexgroup.net/wp-content/uploads/2023/01/service-factoring.jpg",
      href: "https://simplexgroup.net/factoring/"
    },
    {
      title: "Insurance",
      src: "https://simplexgroup.net/wp-content/uploads/2023/01/service-insurance.jpg",
      href: "https://simplexgroup.net/insurance-coverage/"
    },
    {
      title: "ELD",
      src: "https://simplexgroup.net/wp-content/uploads/2023/01/service-eld.jpg",
      href: "https://simplexgroup.net/eld-system/"
    }
  ];

  return (
    <section id="services-section" className="py-20 lg:py-28 bg-white lg:bg-[#18344a]">
      <div className="w-[95%] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#18344a] lg:text-white mb-12">
          Our Solutions
        </h2>
        <FocusCards cards={cards} />
      </div>
    </section>
  );
};

export default SolutionsSection;
