"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageTicker from "@/components/ImageTicker";
import ImageTickerReverse from "@/components/ImageTickerReverse";
import ViewAllButton from "@/components/ViewAllButton";
import AboutSection from "@/components/AboutSection";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <HeroSection />
      <ImageTicker />
      <ImageTickerReverse />
      <ViewAllButton />
      <AboutSection />
      {/* Removed placeholder sections */}
      <MadeWithDyad />
    </div>
  );
};

export default Index;