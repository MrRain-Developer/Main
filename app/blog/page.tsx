import { Content } from "../../components/Content";
import { LinkPreviewOne } from "../../components/LinkPreview";
import { LinkPreviewTwo } from "../../components/LinkPreview";

// `app/page.tsx` is the UI for the `/` URL
export default function Blog() {
  return (
    <div className="text-zinc-100">
      <div className="max-w-screen-md mx-auto p-4 md:py-8">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Better Data
          </span>
          Scalable AI.
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
      </div>
      <div className="w-full h-[30rem] bg-gray-500"></div>

      <Content />
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-2 gap-4 m-4">
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
