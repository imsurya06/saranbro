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
      <ViewAllButton href="/works?tab=photography" /> {/* Re-added and linked to photography tab */}
      <AboutSection />
      <VideographySection videos={videographyVideos} parallaxEffect={true} /> {/* Enabled parallax effect */}
      <ViewAllButton href="/works?tab=videography" /> {/* Updated this View All button to link to the videography tab on the Works page */}
      <Footer /> {/* Add the Footer component here */}
      <MadeWithDyad />
    </div>
  );
};

export default Index;