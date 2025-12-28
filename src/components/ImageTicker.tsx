"use client";

import React from "react";

const images = [
  "/DSC00975.JPG",
  "/2W5A1246.JPG",
  "/DSC08204.JPG",
  "/0C8A1432.JPG",
];

const ImageTicker = () => {
  // Component to render a single set of images with their internal gaps
  const ImageSet = () => (
    <div className="flex gap-x-8">
      {images.map((src, index) => (
        <div key={index} className="flex-shrink-0 w-64 h-40 md:w-80 md:h-52 lg:w-96 lg:h-64">
          <img
            src={src}
            alt={`Ticker Image ${index + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      ))}
    </div>
  );

  return (
    <section className="w-full overflow-hidden py-8 bg-gray-950">
      {/* The container for the two sets that will be animated. No gap-x here. */}
      <div className="flex animate-ticker">
        <ImageSet />
        <ImageSet />
      </div>
    </section>
  );
};

export default ImageTicker;