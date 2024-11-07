import { Content } from "../../components/Content";
import { LinkPreviewOne } from "../../components/LinkPreview";
import { LinkPreviewTwo } from "../../components/LinkPreview";

// `app/page.tsx` is the UI for the `/` URL
export default function Blog() {
  return (
    <div className=" bg-zinc-100 dark:bg-black">
      <div className="relative h-[30rem]">
        {/* Hero Background */}
        <div className="absolute inset-0 bg-gray-500">
          <img
            src="/images/test.png"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Darker Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Additional gradient overlay (optional) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/50"></div>

        {/* Hero Content */}
        <div className="relative h-full max-w-screen-md mx-auto p-4 md:py-8 flex flex-col justify-center">
          <h1 className="mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Better Data
            </span>{" "}
            Scalable AI.
          </h1>
          <p className="text-lg font-normal text-gray-100 lg:text-xl max-w-2xl">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
      </div>

      <Content />

      <div className="max-w-screen-lg mx-auto pt-16">
        <div className="grid grid-cols-2 gap-4 ">
          <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
            <LinkPreviewOne />
          </div>

          <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
            <LinkPreviewTwo />
          </div>
        </div>
      </div>
    </div>
  );
}
