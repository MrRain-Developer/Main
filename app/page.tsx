import Image from "next/image";
import { AnimatedPinDemo } from "../components/AnimatedPin";
import { Slidingbar } from "../components/SlidingBar";
import { Carousel } from "../components/Carousel";
import { NavGrid } from "../components/NavGrid";

export default function Home() {
  return (
    <div >
      <header className="">

        {/* Hero Section */}

        <NavGrid/>
        {/* <div >
          <div className="mb-8">
            <h3 className="text-lg">Go Digital for
              the 21st Century</h3>
            <h1 className="text-2xl">Go Digital for
              the 21st Century</h1>
            <h2 className="text-lg">UI/UX | Web Development |
              Digital Marketing </h2>
          </div>


          <div className="bg-black h-[32rem] border-zinc-500 border-2 p-4 rounded-2xl">
            <Carousel />

            <div className="mt-4">
              <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Better Data</span> Scalable AI.</h1>
              <p className="text-lg font-normal text-black lg:text-xl dark:text-gray-200">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            </div>
          </div>

        </div> */}


      </header>
      <AnimatedPinDemo/>
    </div>
  );
}
