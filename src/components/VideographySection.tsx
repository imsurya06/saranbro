"use client";

import React from "react";

interface VideoProps {
  vimeoId: string;
  title: string;
}

const VideographySection = ({ videos }: { videos: VideoProps[] }) => {
  return (
    <section id="videography" className="w-full bg-black text-white py-16 md:py-20 lg:py-24 flex flex-col items-center">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-[200px] xl:px-[200px] mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-center">
          Videography
        </h2>
      </div>
      <div className="w-full flex flex-col gap-0"> {/* Changed gap-8 to gap-0 */}
        {videos.map((video, index) => (
          <div key={index} className="relative w-full" style={{ paddingBottom: "56.25%" /* 16:9 Aspect Ratio */ }}>
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
    </section>
  );
};

export default VideographySection;