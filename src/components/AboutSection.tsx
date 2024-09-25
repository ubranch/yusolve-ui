'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import SectionContainer from '@/components/SectionContainer';

const AboutSection: React.FC = () => {
  return (
    <section
      id='two-col-section'
      className='relative bg-[#18344a] py-20 lg:bg-white lg:py-28'
    >
      {/* Grid effect background */}
      <div className='z-100 absolute inset-0 h-full w-full bg-[#1e3344]/30 bg-[linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 backdrop-blur-[1px] [mask-image:radial-gradient(ellipse_55%_95%_at_30%_10%,#000_70%,transparent_100%)] lg:bg-[linear-gradient(to_right,#18344a_1px,transparent_1px),linear-gradient(to_bottom,#18344a_1px,transparent_1px)]'></div>{' '}
      <SectionContainer>
        <div className='flex flex-col items-center lg:flex-row'>
          {/* Left Column */}
          <div className='mb-12 w-full lg:mb-0 lg:w-1/2 lg:pr-16'>
            <p className='mb-3 text-lg font-semibold text-blue-300 md:text-xl lg:text-[#18344a]/80'>
              Let Us Help You Grow Your Business!
            </p>
            <h1 className='mb-2 text-4xl font-bold text-white md:text-5xl lg:text-6xl lg:text-[#18344a]'>
              YUSOLVE
            </h1>
            <h3 className='mb-6 text-2xl font-semibold text-blue-100 md:text-3xl lg:text-3xl lg:text-[#18344a]/90'>
              Is Always Here to Support You
            </h3>
            <p className='mb-6 text-lg text-gray-300 md:text-xl lg:text-[#18344a]/70'>
              You are an ambitious and independent entrepreneur, on the road to
              a better life.
            </p>
            <p className='mb-8 text-lg text-gray-300 md:text-xl lg:text-[#18344a]/70'>
              Everything, from the food we eat, to the fuel we use to power our
              homes, cars and businesses, as well as critical medical supplies
              and equipment, are transported across the country and beyond by a
              group of hard working individuals like you, who spend countless
              days and nights on the road.
            </p>
            <Link href='/about-us' passHref>
              <Button
                variant='default'
                size='lg'
                className={cn(
                  'bg-[#3a5265]/50 text-white hover:bg-white/20',
                  'lg:bg-[#3a5265] lg:text-white lg:hover:bg-[#1e3344]/20',
                  'text-base font-semibold',
                  'shadow-lg transition duration-300',
                  'border border-white/30 lg:border-2',
                  'hover:border-white/70 lg:hover:border-[#1e3344]/50'
                )}
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Right Column */}
          <div className='mt-0 w-full lg:mt-0 lg:w-1/2'>
            <div className='relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-lg sm:aspect-[3/2] md:aspect-[9/5] lg:aspect-[16/10]'>
              <Image
                src='/images/hp-img.jpg'
                alt='YUSOLVE'
                layout='fill'
                objectFit='cover'
                className='rounded-[2rem]'
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                onError={(e) => {
                  console.error('Error loading image:', e);
                  e.currentTarget.src = '/images/placeholder.jpg';
                }}
              />
              {/* Overlay for depth */}
              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-[#18344a]/30 to-transparent mix-blend-multiply'></div>
              {/* Highlights */}
              <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 mix-blend-overlay'></div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default AboutSection;
