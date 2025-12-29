"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full bg-black text-white flex items-center justify-center overflow-hidden pt-20 pb-16 md:py-16 lg:py-0 md:pb-24 lg:pb-32">
      {/* Background Robotic Arm Image - hidden on mobile */}
      <img 
        src="/robot-arm-camera.png" 
        alt="Robotic Arm Background" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1000px] lg:w-[1200px] opacity-30 z-0 pointer-events-none hidden md:block" 
      />
      
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-[200px] grid grid-cols-1 gap-8 items-center">
        {/* Content Container - Stacked vertically on mobile, image first */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center w-full"> {/* Changed items-center to items-start md:items-center */}
          {/* Right Content (Image) - Now first for mobile, aligned left, full width */}
          <div className="flex flex-col items-start text-left space-y-6 w-full md:w-1/2 order-first md:order-none"> {/* Added order-first md:order-none, changed alignment and width */}
            <img 
              src="/urban-solitude-1.png" 
              alt="Sharan playing chess" 
              className="w-full sm:w-64 md:w-72 h-auto rounded-lg shadow-lg" // Changed w-56 to w-full for mobile, kept sm:w-64 and md:w-72
            />
            <p className="text-xs sm:text-sm md:text-base font-sans"> {/* Removed max-w-xs */}
              Creating cinematic imagery with clarity, emotion, and intention.
            </p>
          </div>

          {/* Left Content (Text) - Now second for mobile, aligned left, full width */}
          <div className="flex flex-col items-start text-left space-y-6 w-full md:w-1/2"> {/* Changed alignment and width */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight">
              Sharan,
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-sans"> {/* Removed max-w-xs sm:max-w-sm */}
              Viscom student with a passion for cinematography and visual storytelling.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-sans font-semibold text-left"> {/* Changed text-center to text-left */}
              I can do: <span className="font-bold">Cinematography, Photography, Post Production.</span>
            </p>
            <Button className="mt-2 px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg md:text-xl bg-white/10 text-white border border-white/20 hover:bg-white/20 rounded-full transition-colors duration-300">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;