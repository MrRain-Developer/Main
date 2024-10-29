import React from "react";
import { Compare } from "./ui/compare";

export function CompareDemo() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 px-4 w-fit h-fit mt-10">
        <Compare
          firstImage="https://assets.aceternity.com/code-problem.png"
          secondImage="https://assets.aceternity.com/code-solution.png"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[300px] w-[300px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] lg:h-[500px] lg:w-[500px] "
          slideMode="hover"
        />
      </div>
    </div>
  );
}
