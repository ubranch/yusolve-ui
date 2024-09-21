'use client';

import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center font-sans font-medium">
      {/* Background Video */}
      <video
        id="background_video"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Shadow Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            You Keep Our Nation Running
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white mb-5 max-w-xl">
            Encouraging and supporting transportation entrepreneurs, just like you for over 20 years!
          </p>
          <Button
            variant="default"
            size="lg"
            className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 text-base font-semibold shadow-lg"
            onClick={() => {
              // TODO: Implement modal functionality
              console.log("Open consultation modal");
            }}
          >
            GET A FREE CONSULTATION
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
