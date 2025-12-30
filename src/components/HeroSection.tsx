"use client";

import React from "react";
import TypingEffect from "./TypingEffect"; // Import the new TypingEffect component

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full bg-black text-white flex items-center justify-center overflow-hidden pt-20 pb-16 md:pt-24 lg:pt-32 md:pb-24 lg:pb-32"> {/* Adjusted top padding for md and lg screens */}
      {/* Background Robotic Arm Image - hidden on mobile */}
      <img 
        src="/robot-arm-camera.png" 
        alt="Robotic Arm Background" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1000px] lg:w-[1200px] opacity-30 z-0 pointer-events-none hidden md:block" 
        loading="lazy" // Optimized: Lazy load
        decoding="async" // Optimized: Asynchronous decoding
      />
      
      <div className="relative z-10 w-full px-0 sm:px-8 md:px-12 lg:px-[200px] grid grid-cols-1 gap-8 items-center">
        {/* Content Container - Stacked vertically on mobile, 3 columns on md and up */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-12 items-center w-full">
          {/* Left Content - First column on desktop */}
          <div className="flex flex-col items-start text-left space-y-6 md:col-span-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight w-full text-left">
              <TypingEffect text="Sharan," speed={150} />
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-sans w-full text-left max-w-xs">
              Viscom student with a passion for cinematography and visual storytelling.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-sans font-normal w-full text-left max-w-xs">
              I can do: <span className="font-medium inline-block">Photography, Videography and Post production.</span>
            </p>
            <a 
              href="mailto:blackashsharan@gmail.com" 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base sm:text-lg md:text-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 mt-2 px-6 py-4 sm:px-8 sm:py-6 bg-white/10 text-white border border-white/20 hover:bg-white/20 duration-300 animate-button-pulse"
            >
              Get in Touch
            </a>
          </div>
          
          {/* New Center Image - Second column on desktop, hidden on mobile */}
          <div className="hidden md:flex justify-center items-center md:col-span-1">
            <img
              src="/camera dark.png"
              alt="Camera Illustration"
              className="w-80 h-auto lg:w-96 opacity-60 animate-float" 
              loading="lazy" // Optimized: Lazy load
              decoding="async" // Optimized: Asynchronous decoding
              style={{ willChange: 'transform' }} // Optimized: Hint for animation performance
            />
          </div>

          {/* Right Content - Third column on desktop */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-6 md:col-span-1">
            <img 
              src="/urban-solitude-1.png" 
              alt="Sharan's Portfolio" 
              className="w-56 sm:w-64 md:w-72 h-auto rounded-lg shadow-lg" 
              loading="lazy" // Optimized: Lazy load
              decoding="async" // Optimized: Asynchronous decoding
            />
            <p className="text-sm sm:text-base md:text-lg font-sans w-56 sm:w-64 md:w-72 text-right">
              Creating cinematic imagery with clarity, emotion, and intention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;