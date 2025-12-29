"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageTicker from "@/components/ImageTicker";
import ImageTickerReverse from "@/components/ImageTickerReverse";
import ViewAllButton from "@/components/ViewAllButton";
import PhotosSection from "@/components/PhotosSection";
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
      <PhotosSection />
      <AboutSection />
      <section id="work" className="min-h-screen flex items-center justify-center bg-gray-700 p-8">
        <h2 className="text-5xl font-bold">Work Section Placeholder</h2>
      </section>
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-800 p-8">
        <h2 className="text-5xl font-bold">Contact Section Placeholder</h2>
      </section>
      <MadeWithDyad />
    </div>
  );
};

export default Index;