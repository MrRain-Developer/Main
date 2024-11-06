'use client'
import { CardHoverEffectDemo } from "../../components/HoverEffect";

export default function Service() {
  return (
    <div className="min-h-screen  bg-gray-100">
      <div className="container px-6 py-12 max-w-screen-lg mx-auto">
        <h2 className="text-6xl font-bold">
          Innovation Something2 Power the AI Test which is the best
        </h2>
      </div>
      <div className="w-full h-[40rem]">
        <img
          src="/images/test.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

      <CardHoverEffectDemo />

      <div className="container px-6 py-12 max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold mb-8">Latest Technologies We Use</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Vue.js</h3>
            <p className="text-gray-600">
              A progressive and flexible JavaScript framework for building web applications.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Next.js</h3>
            <p className="text-gray-600">
              A popular React-based framework for building server-rendered, statically generated, and performance-optimized web applications.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Nuxt.js</h3>
            <p className="text-gray-600">
              A Vue.js-based framework for building server-rendered, statically generated, and performance-optimized web applications.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Laravel</h3>
            <p className="text-gray-600">
              A popular PHP framework for building robust, scalable, and maintainable web applications.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">React</h3>
            <p className="text-gray-600">
              A JavaScript library for building reusable UI components and managing state changes in web applications.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Node.js</h3>
            <p className="text-gray-600">
              A JavaScript runtime environment for building scalable and high-performance server-side applications.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
