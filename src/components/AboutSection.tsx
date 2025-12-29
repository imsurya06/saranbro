"use client";

import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-black text-white py-8 md:py-12 lg:py-16">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        {/* Title */}
        <div className="flex justify-center md:justify-end mb-12">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-bold text-center md:text-right">
            About Me
          </h2>
        </div>
        {/* Main content container - vertical flow */}
        <div className="flex flex-col gap-16 md:gap-24"> {/* Adjusted gap for md and up */}
          {/* Top Section: Image (top on mobile), Description, Experience, Tools (bottom on mobile) - horizontal flow on large screens */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center md:items-stretch"> {/* Changed lg to md */}
            {/* Left Content Column: Description, Experience, Tools (now first for desktop) */}
            <div className="flex flex-col space-y-8 md:w-1/2 h-full items-center md:items-start justify-center"> {/* Changed lg to md */}
              {/* Description */}
              <div className="text-left w-full">
                <h3 className="text-2xl font-bold mb-2">Description</h3>
                <p className="text-base md:text-lg text-gray-300 max-w-lg md:mx-0"> {/* Changed lg to md */}
                  A passionate cinematographer with 3+ years of experience, I specialize in translating vision into cinematic storytelling, blending light, composition, and motion to create immersive visuals.
                </p>
              </div>
              {/* Experience */}
              <div className="text-left w-full">
                <h3 className="text-2xl font-bold mb-2">Experience</h3>
                <p className="text-base md:text-lg text-gray-300"> {/* Changed lg to md */}
                  <span className="font-bold">Cameraman & Video Editor | Envision Media works</span>
                  <br />
                  Duration: June 2024 - Present (1.5 years)
                </p>
              </div>
              {/* Tools */}
              <div className="text-left w-full">
                <h3 className="text-2xl font-bold mb-2">Tools</h3>
                <p className="text-base md:text-lg text-gray-300"> {/* Changed lg to md */}
                  Adobe Premiere Pro, Davinci Resolve, After Effects
                </p>
              </div>
            </div>
            {/* Right Image Column (now second for desktop) */}
            <div className="flex justify-center md:justify-end md:w-1/2"> {/* Changed lg to md */}
              <div className="w-full max-w-md md:max-w-none rounded-lg overflow-hidden shadow-xl border border-gray-700 h-full"> {/* Changed lg to md */}
                <img src="/055A8314 (1).jpg" alt="Sharan working with camera" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          {/* Bottom Section: Numbered Skill Sections - horizontal flow on medium screens */}
          <div className="flex flex-col md:flex-row justify-between gap-8 pt-8">
            {/* Photography */}
            <div className="md:w-1/3 text-center md:text-left">
              <p className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-600 mb-4">01</p>
              <h4 className="text-xl font-bold mb-2">Photography</h4>
              <p className="text-sm md:text-base text-gray-300"> {/* Changed lg to md */}
                Wedding and event photographer capturing moments with creativity and precision. Skilled in lighting, composition, and editing.
              </p>
            </div>
            {/* Videography */}
            <div className="md:w-1/3 text-center md:text-left">
              <p className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-600 mb-4">02</p>
              <h4 className="text-xl font-bold mb-2">Videography</h4>
              <p className="text-sm md:text-base text-gray-300"> {/* Changed lg to md */}
                Creative videographer skilled in visual storytelling, framing, and lighting. Experienced in filming, editing, and delivering high-quality videos.
              </p>
            </div>
            {/* Post Production */}
            <div className="md:w-1/3 text-center md:text-left">
              <p className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-600 mb-4">03</p>
              <h4 className="text-xl font-bold mb-2">Post Production</h4>
              <p className="text-sm md:text-base text-gray-300"> {/* Changed lg to md */}
                Creative videographer skilled in visual storytelling, framing, and lighting. Experienced in filming, editing, and delivering high-quality videos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;