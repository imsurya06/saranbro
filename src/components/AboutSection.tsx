"use client";

import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-black text-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-20">
        {/* Title */}
        <div className="flex justify-end mb-12">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-bold text-right">
            About Me
          </h2>
        </div>

        {/* Main content container - vertical flow */}
        <div className="flex flex-col gap-16 lg:gap-24">
          {/* Top Section: Description, Experience, Tools (left) and Image (right) - horizontal flow on large screens */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
            {/* Left Content Column: Description, Experience, Tools */}
            <div className="flex flex-col space-y-8 lg:w-1/2">
              {/* Description */}
              <div>
                <h3 className="text-2xl font-bold mb-2">Description</h3>
                <p className="text-base text-gray-300 max-w-lg">
                  A passionate cinematographer with 3+ years of experience, I specialize in translating vision into
                  cinematic storytelling, blending light, composition, and
                  motion to create immersive visuals.
                </p>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-2xl font-bold mb-2">Experience</h3>
                <p className="text-base text-gray-300">
                  <span className="font-bold">Cameraman & Video Editor | Envision Media works</span>
                  <br />
                  Duration: June 2024 - Present (1.5 years)
                </p>
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-2xl font-bold mb-2">Tools</h3>
                <p className="text-base text-gray-300">
                  Adobe Premiere Pro, Davinci Resolve, After Effects
                </p>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="flex justify-center lg:justify-end lg:w-1/2">
              <div className="w-full max-w-md lg:max-w-none rounded-lg overflow-hidden shadow-xl border border-gray-700">
                <img
                  src="/055A8314 (1).jpg"
                  alt="Sharan working with camera"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section: Numbered Skill Sections - horizontal flow on medium screens */}
          <div className="flex flex-col md:flex-row justify-between gap-8 pt-8">
            {/* Photography */}
            <div className="md:w-1/3"> {/* Removed text-center */}
              <p className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-600 mb-4">01</p>
              <h4 className="text-xl font-bold mb-2">Photography</h4>
              <p className="text-sm text-gray-300">
                Wedding and event photographer capturing moments with creativity
                and precision. Skilled in lighting,
                composition, and editing.
              </p>
            </div>

            {/* Videography */}
            <div className="md:w-1/3"> {/* Removed text-center */}
              <p className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-600 mb-4">02</p>
              <h4 className="text-xl font-bold mb-2">Videography</h4>
              <p className="text-sm text-gray-300">
                Creative videographer skilled in visual
                storytelling, framing, and lighting.
                Experienced in filming, editing, and
                delivering high-quality videos.
              </p>
            </div>

            {/* Post Production */}
            <div className="md:w-1/3"> {/* Removed text-center */}
              <p className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-600 mb-4">03</p>
              <h4 className="text-xl font-bold mb-2">Post Production</h4>
              <p className="text-sm text-gray-300">
                Creative videographer skilled in visual
                storytelling, framing, and lighting.
                Experienced in filming, editing, and
                delivering high-quality videos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;