"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageTicker from "@/components/ImageTicker";
import ImageTickerReverse from "@/components/ImageTickerReverse";
import ViewAllButton from "@/components/ViewAllButton";
import AboutSection from "@/components/AboutSection";
import VideographySection from "@/components/VideographySection";
import Footer from "@/components/Footer"; // Import the new Footer component
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
      <ViewAllButton /> {/* This one is for the image tickers */}
      <AboutSection />
      <VideographySection videos={videographyVideos} />
      <ViewAllButton /> {/* Added this View All button for the videography section */}
      <Footer /> {/* Add the Footer component here */}
      <MadeWithDyad />
    </div>
  );
};

export default Index;