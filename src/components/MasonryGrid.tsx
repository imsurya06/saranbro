"use client";

import React from "react";

const placeholderImages = [
  "https://via.placeholder.com/600x400?text=Image+1",
  "https://via.placeholder.com/400x600?text=Image+2",
  "https://via.placeholder.com/800x500?text=Image+3",
  "https://via.placeholder.com/500x700?text=Image+4",
  "https://via.placeholder.com/700x450?text=Image+5",
  "https://via.placeholder.com/450x550?text=Image+6",
  "https://via.placeholder.com/650x400?text=Image+7",
  "https://via.placeholder.com/550x750?text=Image+8",
];

const MasonryGrid = () => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
      {placeholderImages.map((src, index) => (
        <div key={index} className="mb-4 break-inside-avoid">
          <img
            src={src}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;