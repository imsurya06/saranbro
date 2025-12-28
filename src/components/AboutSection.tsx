"use client";

import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-black text-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="flex justify-end mb-12">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold text-right">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Content Column */}
          <div className="flex flex-col space-y-8">
            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p className="text-gray-300 max-w-lg">
                A passionate cinematographer with 3+ years of experience, I specialize in translating vision into
                cinematic storytelling, blending light, composition, and
                motion to create immersive visuals.
              </p>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-gray-300">
                <span className="font-medium">Cameraman & Video Editor | Envision Media works</span>
                <br />
                Duration: June 2024 - Present (1.5 years)
              </p>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Tools</h3>
              <p className="text-gray-300">
                Adobe Premiere Pro, Davinci Resolve, After Effects
              </p>
            </div>

            {/* Numbered Skill Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {/* Photography */}
              <div>
                <p className="text-4xl font-bold text-gray-600 mb-4">01</p>
                <h4 className="text-lg font-semibold mb-2">Photography</h4>
                <p className="text-gray-300 text-sm">
                  Wedding and event photographer capturing moments with creativity
                  and precision. Skilled in lighting,
                  composition, and editing.
                </p>
              </div>

              {/* Videography */}
              <div>
                <p className="text-4xl font-bold text-gray-600 mb-4">02</p>
                <h4 className="text-lg font-semibold mb-2">Videography</h4>
                <p className="text-gray-300 text-sm">
                  Creative videographer skilled in visual
                  storytelling, framing, and lighting.
                  Experienced in filming, editing, and
                  delivering high-quality videos.
                </p>
              </div>

              {/* Post Production */}
              <div>
                <p className="text-4xl font-bold text-gray-600 mb-4">03</p>
                <h4 className="text-lg font-semibold mb-2">Post Production</h4>
                <p className="text-gray-300 text-sm">
                  Creative videographer skilled in visual
                  storytelling, framing, and lighting.
                  Experienced in filming, editing, and
                  delivering high-quality videos.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-none rounded-lg overflow-hidden shadow-xl border border-gray-700">
              <img
                src="/055A8314 (1).jpg"
                alt="Sharan working with camera"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;