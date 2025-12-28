"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden py-20 md:py-0"
    >
      {/* Background Robotic Arm Image */}
      <img
        src="/robot-arm-camera.png"
        alt="Robotic Arm Camera"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1000px] lg:w-[1200px] opacity-30 z-0 pointer-events-none"
      />

      <div className="relative z-10 w-full px-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h1 className="text-6xl md:text-7xl font-heading font-bold tracking-tight">
            Sharan.
          </h1>
          <p className="text-lg md:text-xl font-sans max-w-md">
            Viscom student with a passion for cinematography and visual storytelling.
          </p>
          <p className="text-lg md:text-xl font-sans font-semibold max-w-md">
            I can do: <span className="font-bold">Cinematography, Photography, Post Production.</span>
          </p>
          <Button className="mt-6 px-8 py-6 text-lg bg-white text-black hover:bg-gray-200 rounded-full transition-colors duration-300">
            Get in Touch
          </Button>
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-6 mt-10 md:mt-0">
          <img
            src="/urban-solitude-1.png"
            alt="Sharan playing chess"
            className="w-64 h-auto rounded-lg shadow-lg"
          />
          <p className="text-base md:text-lg font-sans max-w-xs">
            Creating cinematic imagery with clarity, emotion, and intention.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;