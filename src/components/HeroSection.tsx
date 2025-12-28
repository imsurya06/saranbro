"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react"; // Import the ArrowRight icon

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-[100vh] md:h-[80vh] lg:h-[50vh] w-full bg-black text-white flex items-center justify-center overflow-hidden pt-20 pb-0 md:py-0"
    >
      {/* Background Robotic Arm Image */}
      <img
        src="/robot-arm-camera.png"
        alt="Robotic Arm Background"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1000px] lg:w-[1200px] opacity-30 z-0 pointer-events-none"
      />

      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-[200px] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* New Center Image (now the camera image) - Hidden on mobile/tablet, visible on large screens */}
        <img
          src="/camera-hero.png"
          alt="Center Camera"
          className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] opacity-50 z-20 pointer-events-none"
        />

        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight">
            Sharan.
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-sans max-w-md">
            Viscom student with a passion for cinematography and visual storytelling.
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-sans font-semibold max-w-md">
            I can do: <span className="font-bold">Cinematography, Photography, Post Production.</span>
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6"> {/* Container for buttons */}
            <Button className="px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg md:text-xl bg-white/10 text-white border border-white/20 hover:bg-white/20 rounded-full transition-colors duration-300">
              Get in Touch
            </Button>
            <Button className="px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg md:text-xl bg-white/10 text-white border border-white/20 hover:bg-white/20 rounded-full transition-colors duration-300 group"> {/* Added group for hover effect */}
              View Works <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /> {/* Arrow icon */}
            </Button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-6 mt-10 md:mt-0">
          <img
            src="/urban-solitude-1.png"
            alt="Sharan playing chess"
            className="w-56 sm:w-64 md:w-72 h-auto rounded-lg shadow-lg"
          />
          <p className="text-xs sm:text-sm md:text-base font-sans max-w-xs">
            Creating cinematic imagery with clarity, emotion, and intention.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;