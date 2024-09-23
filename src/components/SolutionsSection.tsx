"use client";
import React from 'react';
import { FocusCards } from "@/components/ui/focus-cards";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

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
    <section id="services-section" className="pb-20 lg:pb-28 bg-white lg:bg-[#18344a]">
      <LampContainer className='pt-40'>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="mt-0 bg-gradient-to-br from-slate-100 to-cyan-600 pb-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Our Solutions
        </motion.h2>
      </LampContainer>
      <div className="w-[95%] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="w-full">
          <FocusCards cards={cards} />
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
