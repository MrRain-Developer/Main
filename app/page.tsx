import { AnimatedPinDemo } from "../components/AnimatedPin";
import { SpotlightPreview } from "../components/SpotlightPreview";
import { ScrollParallax } from "../components/ScrollParallax";
import { StickyScrollReveal } from "../components/StickyScrollReveal";
import { LampDemo } from "../components/LampSectionHeader";
import { MacbookScrollDemo } from "../components/MacbookScrollDemo";
import { CompareDemo } from "../components/CompareDemo";
import { FlipText } from "../components/FlipText";
import { Price } from "../components/Price";
import CallToAction from "../components/CallToAction";
import { NavGrid } from "../components/NavGrid";
import { motion } from "framer-motion";
import { ScrollBlur } from "../components/ScrollBlur";

export default function Home() {
  return (
    <div className="bg-black">
      <header>
        {/* <Carousel /> */}
        <SpotlightPreview />
      </header>

      {/* <LampDemo /> */}

      <div className="bg-[#0c343c]">
        <div className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent sm:text-5xl md:text-7xl">
          Build lamps <br /> the right way
        </div>
        <div className="max-w-7xl mx-auto bg-transparent mt-4  px-4l">
          <NavGrid />
        </div>
      </div>

      <ScrollParallax />
      {/* <MacbookScrollDemo /> */}
      <ScrollBlur/>
      <StickyScrollReveal />

      <div className="bg-black">
        <div className="bg-gradient-to-r from-transparent via-slate-700 to-transparent h-[1px] w-full max-w-[110rem] rounded-full mx-auto" />
        <FlipText />
        <div className="bg-gradient-to-r from-transparent via-slate-700 to-transparent h-[1px] w-full max-w-[40rem] rounded-full mx-auto" />

        <div className="grid grid-cols-1 md:grid-cols-2">
          <AnimatedPinDemo />
          <CompareDemo />
        </div>
      </div>

      <div className="bg-gradient-to-b from-black via-teal-900 to-black p-4">
        <Price />
      </div>

      <CallToAction />
    </div>
  );
}
