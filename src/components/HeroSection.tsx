"use client";

import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img
        src="/placeholder.svg" // Replace with actual hero image path
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 text-center text-white p-4">
        <h2 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-4 animate-fade-in-up">
          Sha
        </h2>
        <p className="text-2xl md:text-4xl font-light animate-fade-in-up delay-200">
          Photographer
        </p>
      </div>
    </section>
  );
};

export default HeroSection;