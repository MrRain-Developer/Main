import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipText() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="h-[10rem] flex justify-center items-center px-4">
      <div className="text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites with Arfiaa Mediaa
      </div>
    </div>
  );
}
