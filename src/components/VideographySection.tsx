"use client";

import React from "react";

interface VideoProps {
  vimeoId: string;
  title: string;
}

interface VideographySectionProps {
  videos: VideoProps[];
  showTitle?: boolean; // New prop to control title visibility
  parallaxEffect?: boolean; // New prop to enable/disable parallax
}

const VideographySection = ({ videos, showTitle = true, parallaxEffect = false }: VideographySectionProps) => {
  return (
    <section id="videography" className="w-full bg-black text-white py-16 md:py-20 lg:py-24 flex flex-col items-center">
      {showTitle && ( // Conditionally render the title
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-[200px] xl:px-[200px] mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-center liquid-glass-text pb-2">
            Videography
          </h2>
        </div>
      )}
      {parallaxEffect ? (
        // Parallax layout for home page
        <div className="relative w-full">
          {videos.map((video, index) => (
            <div key={video.vimeoId} className="min-h-screen flex items-center justify-center">
              <div
                className="sticky w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] rounded-lg overflow-hidden shadow-2xl border border-white/20"
                style={{
                  top: `${10 + index * 5}vh`, // Staggered top positions for overlap
                  zIndex: videos.length - index, // Ensures later videos appear on top
                  paddingBottom: "56.25%", // 16:9 aspect ratio
                }}
              >
                <iframe
                  src={`https://player.vimeo.com/video/${video.vimeoId}?background=1`}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  title={video.title}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Original layout for Works page
        <div className="w-full flex flex-col gap-8">
          {videos.map((video, index) => (
            <div key={video.vimeoId} className="relative w-full" style={{ paddingBottom: "56.25%" /* 16:9 Aspect Ratio */ }}>
              <iframe
                src={`https://player.vimeo.com/video/${video.vimeoId}?background=1`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                title={video.title}
              ></iframe>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default VideographySection;