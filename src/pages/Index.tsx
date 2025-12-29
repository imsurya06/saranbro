"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageTicker from "@/components/ImageTicker";
import ImageTickerReverse from "@/components/ImageTickerReverse";
import ViewAllButton from "@/components/ViewAllButton";
import AboutSection from "@/components/AboutSection";
import VideographySection from "@/components/VideographySection";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const videographyVideos = [
    { vimeoId: "1149860125", title: "First Videography Project" }, 
    { vimeoId: "1149860178", title: "Second Videography Project" },
    { vimeoId: "1149860280", title: "Third Videography Project" }, // Added the new video
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <HeroSection />
      <ImageTicker />
      <ImageTickerReverse />
      <ViewAllButton />
      <AboutSection />
      <VideographySection videos={videographyVideos} />
      <MadeWithDyad />
    </div>
  );
};

export default Index;