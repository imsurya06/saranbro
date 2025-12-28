"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ViewAllButton = ({ href = "/works" }: { href?: string }) => {
  return (
    <div className="flex justify-center py-8 bg-gray-950"> {/* Added py-8 for vertical spacing and bg-gray-950 to match ticker background */}
      <Link to={href}>
        <Button className="px-6 py-4 text-base bg-white/10 text-white border border-white/20 hover:bg-white/20 rounded-full transition-colors duration-300 flex items-center space-x-2">
          <span>View All</span>
          <ChevronRight className="h-5 w-5" />
        </Button>
      </Link>
    </div>
  );
};

export default ViewAllButton;