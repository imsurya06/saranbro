"use client";

import React from "react";


const AboutSection = () => {

  return (
    <section id="about" className={`w-full bg-black text-white pt-10 pb-16 md:pb-20 lg:pb-24 flex flex-col justify-center`}>
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-[200px] xl:px-[200px]">
        {/* Title */}
        <div className="flex justify-center md:justify-end mb-8 md:mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-center md:text-right liquid-glass-text">
            About Me
          </h2>
        </div>
        {/* Main content container - vertical flow */}
        <div className="flex flex-col gap-8 md:gap-16"> {/* Changed gap-12 to gap-8 for mobile/tablet (32px) */}
          {/* Top Section: Image (top on mobile), Description, Experience, Tools (bottom on mobile) - horizontal flow on large screens */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-stretch">
            {/* Left Content Column: Description, Experience, Tools (now first for desktop) */}
            <div className="flex flex-col space-y-8 md:w-1/2 h-full items-center md:items-start justify-center"> {/* Changed space-y-6 to space-y-8 (32px) */}
              {/* Description */}
              <div className="text-left w-full">
                <h3 className="text-2xl font-bold mb-2">Description</h3>
                <p className="text-base md:text-lg text-gray-300 max-w-lg md:max-w-xl md:mx-0">
                  A passionate cinematographer with 3+ years of experience, I specialize in translating vision into cinematic storytelling, blending light, composition, and motion to create immersive visuals.
                </p>
              </div>
              {/* Experience */}
              <div className="text-left w-full">
                <h3 className="text-2xl font-bold mb-2">Experience</h3>
                <p className="text-base md:text-lg text-gray-300">
                  <span className="font-bold">Cameraman & Video Editor | Envision Media works</span>
                  <br />
                  Duration: June 2024 - Present (1.5 years)
                </p>
              </div>
              {/* Tools */}
              <div className="text-left w-full">
                <h3 className="text-2xl font-bold mb-2">Tools</h3>
                <p className="text-base md:text-lg text-gray-300">
                  Adobe Premiere Pro, Davinci Resolve, After Effects
                </p>
              </div>
            </div>
            {/* Right Image Column (now second for desktop) */}
            <div className="flex justify-center md:justify-end md:w-1/2">
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-lg overflow-hidden shadow-xl border border-gray-700 h-full">
                <img 
                  src="/055A8314 (1)-2.jpg" 
                  alt="Sharan working with camera" 
                  className="w-full h-full object-cover" 
                  loading="lazy" // Optimized: Lazy load
                  decoding="async" // Optimized: Asynchronous decoding
                  width="600" // Specified width for layout shift prevention
                  height="800" // Specified height for layout shift prevention (assuming portrait)
                />
              </div>
            </div>
          </div>
          {/* Bottom Section: Numbered Skill Sections - horizontal flow on medium screens */}
          <div className="flex flex-col md:flex-row justify-between gap-8 pt-6">
            {/* Photography */}
            <div className="md:w-1/3 text-center md:text-left bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-600 mb-3">01</p>
              <h4 className="text-xl font-bold mb-2">Photography</h4>
              <p className="text-base md:text-lg text-gray-300">
                Wedding and event photographer capturing moments with creativity and precision. Skilled in lighting, composition, and editing.
              </p>
            </div>
            {/* Videography */}
            <div className="md:w-1/3 text-center md:text-left bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-600 mb-3">02</p>
              <h4 className="text-xl font-bold mb-2">Videography</h4>
              <p className="text-base md:text-lg text-gray-300">
                Creative videographer skilled in visual storytelling, framing, and lighting. Experienced in filming, editing, and delivering high-quality videos.
              </p>
            </div>
            {/* Post Production */}
            <div className="md:w-1/3 text-center md:text-left bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-600 mb-3">03</p>
              <h4 className="text-xl font-bold mb-2">Post Production</h4>
              <p className="text-base md:text-lg text-gray-300">
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