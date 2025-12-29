"use client";

import React from "react";
import MasonryGrid from "./MasonryGrid";

const PhotosSection = () => {
  return (
    <section id="photos" className="w-full bg-gray-950 text-white py-16 md:py-24">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="flex justify-center md:justify-start mb-12">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-bold text-center md:text-left">
            Photos
          </h2>
        </div>
        <MasonryGrid />
      </div>
    </section>
  );
};

export default PhotosSection;