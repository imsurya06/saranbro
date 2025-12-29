"use client";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideographySection from "@/components/VideographySection";
import { MadeWithDyad } from "@/components/made-with-dyad";

const photographyImages = [
  "/DSC00975.JPG",
  "/2W5A1246.JPG",
  "/DSC08204.JPG",
  "/0C8A1432.JPG",
  "/DSC03323.JPG",
  "/SHAL4208.JPG",
  "/0C8A3100.JPG",
  "/148A9514.JPG",
  // Removed "/urban-solitude-1.png"
  // Add more photography image paths here
];

const videographyVideos = [
  { vimeoId: "1149860125", title: "First Videography Project" },
  { vimeoId: "1149860178", title: "Second Videography Project" },
  { vimeoId: "1149860280", title: "Third Videography Project" },
  { src: "https://drive.google.com/file/d/10TuBPro-0givS0BsN9StoxYpiaU8r_D_/preview", title: "Google Drive Video" },
  { src: "https://drive.google.com/file/d/1Hx_pW1sotGI5zBTfSBEWaMaHSCL0pLx4/preview", title: "Another Google Drive Video" }, // Added the new Google Drive video
];

const Works = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get("tab") === "videography" ? "videography" : "photography";

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-24 pb-16 px-4 sm:px-6 md:px-8 lg:px-[200px] xl:px-[200px]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-center liquid-glass-text mb-20 py-4">
          My Works
        </h1>

        <Tabs defaultValue={initialTab} className="w-full">
          <TabsList className="grid w-full h-fit grid-cols-2 bg-gray-900/50 text-white rounded-full p-2 mb-8 mx-auto max-w-lg overflow-visible backdrop-blur-lg border border-white/10">
            <TabsTrigger
              value="photography"
              className="transition-all duration-300 ease-in-out data-[state=active]:bg-white/10 data-[state=active]:text-white data-[state=active]:shadow-sm rounded-full text-base sm:text-lg py-2 data-[state=active]:backdrop-blur-sm data-[state=active]:border data-[state=active]:border-white/20"
            >
              Photography
            </TabsTrigger>
            <TabsTrigger
              value="videography"
              className="transition-all duration-300 ease-in-out data-[state=active]:bg-white/10 data-[state=active]:text-white data-[state=active]:shadow-sm rounded-full text-base sm:text-lg py-2 flex items-center justify-center data-[state=active]:backdrop-blur-sm data-[state=active]:border data-[state=active]:border-white/20"
            >
              Videography <Link to="/#videography" className="ml-2 text-gray-400 hover:text-white transition-colors"></Link>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="photography">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photographyImages.map((src, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <img
                      src={src}
                      alt={`Photography ${index + 1}`}
                      className="w-full h-auto object-cover rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] p-0 border-0 bg-transparent shadow-none">
                    <img
                      src={src}
                      alt="Preview"
                      className="w-full h-full object-contain max-h-[80vh]"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videography">
            <VideographySection videos={videographyVideos} showTitle={false} /> {/* Added showTitle={false} */}
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Works;