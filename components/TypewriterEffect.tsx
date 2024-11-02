"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function TypewriterEffect() {
  const words = [
    {
      text: "WE will help ",
    },
    {
      text: "you to build",
    },
    {
      text: "Your Dream Website",
      className: "text-blue-500 dark:text-blue-200",

    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-auto  ">
      <div className="">
        <TypewriterEffectSmooth words={words} />
      </div>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border border-white border-transparent text-white text-sm transition-transform hover:scale-95">
          Contact now
        </button>
      </div>
    </div>
  );
}
