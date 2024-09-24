'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const AboutSection: React.FC = () => {
  return (
    <section id="two-col-section" className="py-20 lg:py-28 bg-[#18344a] lg:bg-white relative">
      {/* Grid effect background */}
<div className="absolute inset-0 z-100 h-full w-full bg-transparent opacity-10 bg-[linear-gradient(to_right,#18344a_1px,transparent_1px),linear-gradient(to_bottom,#18344a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_0%,#000_70%,transparent_100%)] backdrop-blur-[1px]"></div>      <div className="w-[95%] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 lg:pr-16 mb-12 lg:mb-0">
            <p className="text-lg md:text-xl font-semibold text-blue-300 lg:text-[#18344a]/80 mb-3">
              Let Us Help You Grow Your Business!
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-white lg:text-[#18344a]">
              YUSOLVE
            </h1>
            <h3 className="text-2xl md:text-3xl lg:text-3xl font-semibold mb-6 text-blue-100 lg:text-[#18344a]/90">
              Is Always Here to Support You
            </h3>
            <p className="text-lg md:text-xl text-gray-300 lg:text-[#18344a]/70 mb-6">
              You are an ambitious and independent entrepreneur, on the road to a better life.
            </p>
            <p className="text-lg md:text-xl text-gray-300 lg:text-[#18344a]/70 mb-8">
              Everything, from the food we eat, to the fuel we use to power our homes, cars and businesses, as well as critical medical supplies and equipment, are transported across the country and beyond by a group of hard working individuals like you, who spend countless days and nights on the road.
            </p>
            <Link href="/about-us" passHref>
              <Button
                variant="default"
                size="lg"
                className={cn(
                  "bg-white/10 hover:bg-white/20 text-white",
                  "lg:bg-[#18344a] lg:hover:bg-[#18344a]/90 lg:text-white",
                  "text-base font-semibold",
                  "transition duration-300 shadow-lg",
                  "backdrop-blur-md border border-white/50",
                  "lg:border-white/20",
                  "hover:border-white/70 lg:hover:border-white/40"
                )}
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 mt-0 lg:mt-0">
            <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] md:aspect-[9/5] lg:aspect-[16/10] rounded-[2rem] overflow-hidden shadow-lg">
              <Image
                src="/images/hp-img.jpg"
                alt="YUSOLVE"
                layout="fill"
                objectFit="cover"
                className="rounded-[2rem]"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={(e) => {
                  console.error("Error loading image:", e);
                  // Fallback to a placeholder or default image
                  e.currentTarget.src = "/images/placeholder.jpg";
                }}
              />
              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#18344a]/30 to-transparent mix-blend-multiply pointer-events-none"></div>
              {/* Highlights */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 mix-blend-overlay pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
