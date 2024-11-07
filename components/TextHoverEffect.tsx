import React from "react";
import { TextHoverEffect } from "../components/ui/text-hover-effect";
import Link from "next/link";
export function TextHoverEffectDemo() {
  return (
    <Link href="/">
    <div className="h-[20rem] flex items-center justify-center bg-zinc-100 dark:bg-[#0c343c]">
      <TextHoverEffect text="ARFIAA MEDIA" />
    </div>
    </Link>
  );
}
