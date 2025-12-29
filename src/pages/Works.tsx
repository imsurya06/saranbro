"use client";

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ImageIcon, VideoIcon, Film, ChevronDown } from "lucide-react"; // Added icons
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideographySection from "@/components/VideographySection";
import ReelsGrid from "@/components/ReelsGrid"; // Import the new ReelsGrid component
import { MadeWithDyad } from "@/components/made-with-dyad";
import { cn } from "@/lib/utils"; // Import cn for conditional classNames

const photographyImages = [
  "/DSC00975.JPG",
  "/2W5A1246.JPG",
  "/DSC08204.JPG",
  "/0C8A1432.JPG",
  "/DSC03323.JPG",
  "/SHAL4208.JPG",
  "/0C8A3100.JPG",
  "/148A9514.JPG",
  // Add more photography image paths here
];

const videographyVideos = [
  { src: "https://drive.google.com/file/d/1pdQiu9TqUWiI2Tu0evlW0TZoTm1Vhnuv/preview", title: "First Google Drive Video" },
  { src: "https://drive.google.com", title: "Untitled Google Drive Video" }, // Added missing title
  { src: "https://drive.google.com/file/d/1qDRnO5Ibj3VmDUkLnyGLY-rsVr3bpMaV/preview", title: "Second Google Drive Video" },
  { src: "https://drive.google.com/file/d/14hLTsXBGBENiEoAdmfmDsRMWctZ3OTCK/preview", title: "Third Google Drive Video" },
  { src: "https://drive.google.com/file/d/10TuBPro-0givS0BsN9StoxYpiaU8r_D_/preview", title: "Google Drive Video" },
  { src: "https://drive.google.com/file/d/1Hx_pW1sotGI5zBTfSBEWaMaHSCL0pLx4/preview", title: "Another Google Drive Video" },
  { src: "https://drive.google.com/file/d/1IMPrl3htZwgTtD_AFc8LhfLLgjsP9qFB/preview", title: "Last Google Drive Video" },
  { src: "https://drive.google.com/file/d/11ggxZfbhuAN6A3P_B7dKl4ZIX4mjdqwY/preview", title: "Next Google Drive Video" },
  { src: "https://drive.google.com/file/d/1JtP4ShVqfNibeeluhQHM4Xj3KGr2vl20/preview", title: "New Google Drive Video" },
  { src: "https://drive.google.com/file/d/1DznzpDRkhNNFTlVqYpwPyYL3geiflrGi/preview", title: "Latest Google Drive Video" },
  { src: "https://drive.google.com/file/d/1ssQxSYnjt_r6SXnpQSO7TZB9-n3sV8Q8/preview", title: "Another New Google Drive Video" },
  { src: "https://drive.google.com/file/d/1HnlEr7r6MKXCh1nVck-k0PLdirGO6uJs/preview", title: "Yet Another Google Drive Video" },
  { src: "https://drive.google.com/file/d/1gwZKr4g2hvZtzJGINn6e0vemjZW_NkCN/preview", title: "Newest Google Drive Video" },
  { src: "https://drive.google.com/file/d/1aAEm6tb2uQrXV1P4OYtkMShWNqaN47T0/preview", title: "Another Latest Google Drive Video" },
  { src: "https://drive.google.com/file/d/1mbyk8blTx9UXIbssSd5Fd8cnapVzKANB/preview", title: "New Google Drive Video" },
];

const reelsVideos = [
  { src: "https://drive.google.com/file/d/1ftkrt6_p2diz0yfYqNDEpAh6lYGSPXXp/preview", title: "Reel 1" },
  { src: "https://drive.google.com/file/d/19dmHIeN8aQEE_AR2KXUmDlTBWUwJGi5w/preview", title: "Reel 2" },
  { src: "https://drive.google.com/file/d/1yd4NIsi3huoLh4besHQd2bXLv0wQ7g9M/preview", title: "Reel 3" },
  { src: "https://drive.google.com/file/d/1H6tfEIY-qHyXBlZ0UVAngM-FHHrnZKKo/preview", title: "Reel 4" },
  { src: "https://drive.google.com/file/d/1SoZC5WzyOBhV_QVJ5jLBLRME-7hsOFsn/preview", title: "Reel 5" },
];

const Works = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [activeTab, setActiveTab] = useState<"photography" | "videography">(
    queryParams.get("tab") === "videography" ? "videography" : "photography"
  );
  const [selectedVideographySubTab, setSelectedVideographySubTab] = useState<"videos" | "reels">(
    queryParams.get("tab") === "videography" && queryParams.get("subtab") === "reels"
      ? "reels"
      : "videos"
  );

  useEffect(() => {
    const tab = queryParams.get("tab");
    const subtab = queryParams.get("subtab");

    if (tab === "videography") {
      setActiveTab("videography");
      if (subtab === "reels") {
        setSelectedVideographySubTab("reels");
      } else {
        setSelectedVideographySubTab("videos");
      }
    } else {
      setActiveTab("photography");
    }
  }, [location.search]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-24 pb-16 px-4 sm:px-6 md:px-8 lg:px-[200px] xl:px-[200px]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-center liquid-glass-text mb-20 py-4">
          My Works
        </h1>

        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "photography" | "videography")} className="w-full">
          <TabsList className="grid w-full h-fit grid-cols-2 bg-gray-900/50 text-white rounded-full p-2 mb-8 mx-auto max-w-lg overflow-visible backdrop-blur-lg border border-white/10">
            <TabsTrigger
              value="photography"
              className="transition-all duration-300 ease-in-out data-[state=active]:bg-white/10 data-[state=active]:text-white data-[state=active]:shadow-sm rounded-full text-base sm:text-lg py-2 data-[state=active]:backdrop-blur-sm data-[state=active]:border data-[state=active]:border-white/20 flex items-center justify-center space-x-2"
            >
              <ImageIcon className="h-5 w-5" />
              <span>Photography</span>
            </TabsTrigger>

            <TabsTrigger
              value="videography"
              className={cn(
                "transition-all duration-300 ease-in-out rounded-full text-base sm:text-lg py-2 flex items-center justify-center space-x-2",
                activeTab === "videography"
                  ? "bg-white/10 text-white shadow-sm backdrop-blur-sm border border-white/20"
                  : "text-white/70 hover:text-white"
              )}
              asChild
            >
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={cn(
                    "flex items-center justify-center space-x-2 w-full h-full focus-visible:outline-none rounded-full",
                    activeTab === "videography"
                      ? "bg-white/10 text-white shadow-sm backdrop-blur-sm border border-white/20"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  <Film className="h-5 w-5" />
                  <span>Videography</span>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-900 border border-white/20 text-white rounded-lg p-1">
                  <DropdownMenuItem
                    onClick={() => {
                      setActiveTab("videography");
                      setSelectedVideographySubTab("videos");
                    }}
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-md cursor-pointer hover:bg-white/10",
                      selectedVideographySubTab === "videos" && "bg-white/10"
                    )}
                  >
                    <VideoIcon className="h-4 w-4" />
                    <span>Videos</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setActiveTab("videography");
                      setSelectedVideographySubTab("reels");
                    }}
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-md cursor-pointer hover:bg-white/10",
                      selectedVideographySubTab === "reels" && "bg-white/10"
                    )}
                  >
                    <Film className="h-4 w-4" />
                    <span>Reels</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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

          <TabsContent
            value="videography"
            className="-mx-4 sm:-mx-6 md:-mx-8 lg:-mx-[200px] xl:-mx-[200px]"
          >
            {selectedVideographySubTab === "videos" ? (
              <VideographySection videos={videographyVideos} showTitle={false} />
            ) : (
              <ReelsGrid videos={reelsVideos} />
            )}
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Works;