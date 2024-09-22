"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const AboutSection: React.FC = () => {
  return (
    <section id="two-col-section" className="py-20 lg:py-28 bg-[#18344a] lg:bg-white">
      <div className="w-[95%] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 lg:pr-16 mb-12 lg:mb-0">
            <p className="text-lg md:text-xl font-semibold text-blue-300 lg:text-blue-600 mb-3">
              Let Us Help You Grow Your Business!
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-white lg:text-gray-900">
              YUSOLVE
            </h1>
            <h3 className="text-2xl md:text-3xl lg:text-3xl font-semibold mb-6 text-blue-100 lg:text-gray-700">
              Is Always Here to Support You
            </h3>
            <p className="text-lg md:text-xl text-gray-300 lg:text-gray-600 mb-6">
              You are an ambitious and independent entrepreneur, on the road to a better life.
            </p>
            <p className="text-lg md:text-xl text-gray-300 lg:text-gray-600 mb-8">
              Everything, from the food we eat, to the fuel we use to power our homes, cars and businesses, as well as critical medical supplies and equipment, are transported across the country and beyond by a group of hard working individuals like you, who spend countless days and nights on the road.
            </p>
            <Link href="/about-us" passHref>
              <Button
                variant="default"
                size="lg"
                className={cn(
                  "bg-white/10 hover:bg-white/20 text-white",
                  "lg:bg-blue-600 lg:hover:bg-blue-700 lg:text-white",
                  "text-base font-semibold",
                  "transition duration-300 shadow-lg",
                  "backdrop-blur-md border border-white/30",
                  "lg:backdrop-blur-none lg:border-none"
                )}
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full" style={{ paddingTop: '75%' }}>
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
                {/* Image without any shadows */}
                <Image
                  src="/images/hp-img.jpg"
                  alt="YUSOLVE"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                  className={cn(
                    "rounded-[2rem] relative z-10"
                  )}
                  priority
                />

                {/* Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#18344a]/50 to-transparent mix-blend-multiply"></div>

                {/* Highlights */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-60 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-white/10 to-transparent opacity-40 mix-blend-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
