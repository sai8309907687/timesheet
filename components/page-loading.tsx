import React from "react";
import { LoaderCircle } from "lucide-react"; // Hero UI does not have a dedicated spinner, so using Lucide React
// import { cn } from "@/lib/utils"; // If you have a utility for Tailwind class merging

const PageLoader = ({
  loadingText = "Please wait, loading...",
}: {
  loadingText?: string;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="text-white text-lg flex flex-col items-center">
        <LoaderCircle className="animate-spin w-10 h-10 text-white" />
        <p className="mt-4 text-white font-medium">{loadingText}</p>
      </div>
    </div>
  );
};

export default PageLoader;
