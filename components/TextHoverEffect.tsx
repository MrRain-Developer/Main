import React from "react";
import { TextHoverEffect } from "../components/ui/text-hover-effect";
import Link from "next/link";
export function TextHoverEffectDemo() {
  return (
    <Link href="/">
    <div className="h-[40rem] flex items-center justify-center">
      <TextHoverEffect text="ARFIAA MEDIA" />
    </div>
    </Link>
  );
}
