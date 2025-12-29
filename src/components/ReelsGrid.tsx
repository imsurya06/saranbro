"use client";

import React from "react";

interface ReelVideoProps {
  src: string;
  title: string;
}

interface ReelsGridProps {
  videos: ReelVideoProps[];
}

const ReelsGrid = ({ videos }: ReelsGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:px-6 md:px-8 lg:px-[200px] xl:px-[200px]">
      {videos.map((video, index) => (
        <div key={index} className="relative w-full rounded-lg overflow-hidden shadow-lg" style={{ paddingBottom: "177.77%" /* 9:16 Aspect Ratio for vertical videos */ }}>
          <iframe
            src={video.src}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full object-cover"
            title={video.title}
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default ReelsGrid;