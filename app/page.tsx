import { AnimatedPinDemo } from "../components/AnimatedPin";
import { SpotlightPreview } from "../components/SpotlightPreview";
import { ScrollParallax } from "../components/ScrollParallax";
import { StickyScrollReveal } from "../components/StickyScrollReveal";
import { LampDemo } from "../components/LampSectionHeader";
import { MacbookScrollDemo } from "../components/MacbookScrollDemo";
import { CompareDemo } from "../components/CompareDemo";
import { FlipText } from "../components/FlipText";
export default function Home() {
  return (
    <div>
      <header>
        {/* <Carousel /> */}
        <SpotlightPreview />
      </header>

      <LampDemo />

      <ScrollParallax />
      <MacbookScrollDemo />
      <StickyScrollReveal />

      <>
        <div className="bg-gradient-to-r from-transparent via-slate-700 to-transparent h-[1px] w-full max-w-[110rem] rounded-full mx-auto" />
        <FlipText />
        <div className="bg-gradient-to-r from-transparent via-slate-700 to-transparent h-[1px] w-full max-w-[40rem] rounded-full mx-auto" />

        <div className="grid grid-cols-1 md:grid-cols-2">
          <AnimatedPinDemo />
          <CompareDemo />
        </div>
      </>
    </div>
  );
}
