"use client";

import React from "react";
import { Button } from "@/components/ui/button"; // Keep Button import if it's used elsewhere, but we'll change this specific instance

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full bg-black text-white flex items-center justify-center overflow-hidden pt-20 pb-16 md:pt-24 lg:pt-32 md:pb-24 lg:pb-32"> {/* Adjusted top padding for md and lg screens */}
      {/* Background Robotic Arm Image - hidden on mobile */}
      <img 
        src="/robot-arm-camera.png" 
        alt="Robotic Arm Background" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1000px] lg:w-[1200px] opacity-30 z-0 pointer-events-none hidden md:block" 
      />
      
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-[200px] grid grid-cols-1 gap-8 items-center">
        {/* Content Container - Stacked vertically on mobile */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center w-full">
          {/* Left Content - Centered on mobile */}
          <div className="flex flex-col items-start text-left space-y-6 md:w-1/2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight w-full text-left">
              Sharan,
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-sans w-full text-left max-w-xs">
              Viscom student with a passion for cinematography and visual storytelling.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-sans font-normal w-full text-left max-w-xs">
              I can do: <span className="font-medium inline-block">Photography, Videography and Post production.</span> {/* Changed font-bold to font-medium */}
            </p>
            {/* Changed Button to an <a> tag with mailto link */}
            <a 
              href="mailto:blackashsharan@gmail.com" 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base sm:text-lg md:text-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 mt-2 px-6 py-4 sm:px-8 sm:py-6 bg-white/10 text-white border border-white/20 hover:bg-white/20 duration-300 animate-button-pulse"
            >
              Get in Touch
            </a>
          </div>
          
          {/* Right Content - Centered on mobile */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-6 md:w-1/2">
            <img 
              src="/urban-solitude-1.png" 
              alt="Sharan playing chess" 
              className="w-56 sm:w-64 md:w-72 h-auto rounded-lg shadow-lg" 
            />
            <p className="text-sm sm:text-base md:text-lg font-sans max-w-xs">
              Creating cinematic imagery with clarity, emotion, and intention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;