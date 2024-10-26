import Image from "next/image";
import { AnimatedPinDemo } from "../components/AnimatedPin";
import { Slidingbar } from "../components/SlidingBar";

export default function Home() {
  return (
    <div >
      <header className="grid grid-cols-2 h-[40rem] w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md ">

        <div className="dark:text-white text-neutral-600 text-center text-4xl mt-20 font-bold">
          <h3>Go Digital for
            the 21st Century</h3>
          <h1>Go Digital for
            the 21st Century</h1>
          <h2>UI/UX | Web Development |
            Digital Marketing</h2>
        </div>

        <Slidingbar />

      </header>
      {/* <AnimatedPinDemo/> */}
    </div>
  );
}
