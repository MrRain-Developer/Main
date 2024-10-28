import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { Cover } from "../components/ui/cover";

export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 text-3xl text-center md:text-4xl lg:text-7xl">
      <h1 className=" text-4xl md:text-4xl lg:text-6xl max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 dark:via-white dark:to-white">
        Build amazing websites <br /> at <Cover>Arfiaa Mediaa</Cover>
      </h1>
      </div>
    </BackgroundGradientAnimation>
  );
}
