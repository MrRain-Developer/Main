import Image from "next/image";
import { AnimatedPinDemo } from "../components/AnimatedPin";
import { Slidingbar } from "../components/SlidingBar";
import { Carousel } from "../components/Carousel";
import { NavGrid } from "../components/NavGrid";
import { BackgroundGradientAnimationDemo } from "../components/GradientBackground";
import { ScrollParallax } from "../components/ScrollParallax";
import { StickyScrollReveal } from "../components/StickyScrollReveal";
import { LampDemo } from "../components/LampSectionHeader";
export default function Home() {
  return (
    <div>
      <header>
        {/* <Carousel /> */}
        <BackgroundGradientAnimationDemo />
      </header>

     
      <LampDemo />
        
     
      <ScrollParallax />

      <StickyScrollReveal />
      <AnimatedPinDemo />

    </div>
  );
}
