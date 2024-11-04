import { Content } from "../../components/Content";

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <div className="text-zinc-100">
      <div className="max-w-screen-xl mx-auto p-4 md:py-8">
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

      <Content />
<div className="h-40 w-full bg-red-400"></div>
    </div>
  );
}
