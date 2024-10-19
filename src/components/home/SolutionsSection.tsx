'use client';
import React from 'react';
import { FocusCards } from '@/components/ui/focus-cards';
import { motion } from 'framer-motion';
import { LampContainer } from '@/components/ui/lamp';
import Container from '@/components/ui/container';

const SolutionsSection: React.FC = () => {
  const cards = [
    {
      title: 'DOT Safety Compliance',
      src: '/images/solutions/service-DOT.jpg',
      href: '/solution',
    },
    {
      title: 'Permits & Tax Services',
      src: '/images/solutions/service-permits.jpg',
      href: '/solution',
    },
    {
      title: 'Freight Planning',
      src: '/images/solutions/service-freight-planning.jpg',
      href: '/solution',
    },
    {
      title: 'Factoring',
      src: '/images/solutions/service-factoring.jpg',
      href: '/solution',
    },
    {
      title: 'Insurance',
      src: '/images/solutions/service-insurance.jpg',
      href: '/solution',
    },
    {
      title: 'ELD',
      src: '/images/solutions/service-eld.jpg',
      href: '/solution',
    },
  ];

  return (
    <section
      id='services-section'
      className='relative bg-white'
    >
      <LampContainer
        className='md:pt-30 pb-20 pt-40 sm:pb-32 sm:pt-44 md:pb-40 lg:pb-52 lg:pt-52'
        bgColor='bg-white'
      >
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: -10 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: 'easeInOut',
          }}
          className='mx-auto mt-0 max-w-[90%] bg-gradient-to-br from-[#18344a] to-cyan-600 bg-clip-text pb-4 text-center text-5xl font-bold tracking-tight text-transparent opacity-50 sm:text-6xl md:text-6xl lg:text-7xl'
        >
          Our Solutions
        </motion.h2>
      </LampContainer>

      <Container className='relative z-10 -mt-32 pb-20 sm:-mt-40 sm:pb-24 md:-mt-48 lg:-mt-56 lg:pb-32'>
        <div className='mt-8 w-full sm:mt-12 md:mt-16 lg:mt-20'>
          <FocusCards cards={cards} />
        </div>
      </Container>
    </section>
  );
};

export default SolutionsSection;
