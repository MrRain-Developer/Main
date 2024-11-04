import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Cover } from "./ui/cover";
import { TypewriterEffect } from "./TypewriterEffect";
export function SpotlightPreview() {
  return (
    <div className="h-screen w-full  flex md:items-center md:justify-center bg-slate-950  antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="font-medium text-4xl md:text-5xl lg:text-7xl max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 dark:via-white dark:to-white">
          Build amazing websites <br /> with <Cover>Arfiaa Mediaa</Cover>
        </h1>
        <TypewriterEffect />
       
        
      </div>
    </div>
  );
}
