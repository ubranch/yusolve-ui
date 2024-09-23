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
    <section id="services-section" className="relative bg-white lg:bg-[#18344a]">
      
      <LampContainer
        className="pt-40 sm:pt-44 md:pt-30 lg:pt-52 pb-20 sm:pb-32 md:pb-40 lg:pb-52"
        bgColor="bg-white lg:bg-[#18344a]"
      >
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="mt-0 bg-gradient-to-br from-[#18344a] to-cyan-600 lg:from-slate-100 lg:to-cyan-600 pb-4 bg-clip-text text-center text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-medium tracking-tight text-transparent max-w-[90%] mx-auto"
        >
          Our Solutions
        </motion.h2>
      </LampContainer>

      <div className="relative z-10 w-[95%] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24 lg:pb-32 -mt-32 sm:-mt-40 md:-mt-48 lg:-mt-56">
        <div className="w-full mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <FocusCards cards={cards} />
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
