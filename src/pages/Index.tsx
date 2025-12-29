"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageTicker from "@/components/ImageTicker";
import ImageTickerReverse from "@/components/ImageTickerReverse";
import ViewAllButton from "@/components/ViewAllButton";
import AboutSection from "@/components/AboutSection";
import VideographySection from "@/components/VideographySection"; // New import
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  // Placeholder for your Vimeo videos.
  // Replace '76979871' with your actual Vimeo video ID.
  // You can find the video ID in the Vimeo URL (e.g., vimeo.com/76979871)
  const videographyVideos = [
    { vimeoId: "76979871", title: "Placeholder Video 1" }, 
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <HeroSection />
      <ImageTicker />
      <ImageTickerReverse />
      <ViewAllButton />
      <AboutSection />
      <VideographySection videos={videographyVideos} /> {/* New section added here */}
      <MadeWithDyad />
    </div>
  );
};

export default Index;