import './globals.css'
import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";


export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
const DummyContent = () => {
  return (
    <div className="grid grid-cols-1 h-[40rem] w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md">
      <p className="dark:text-white text-neutral-600 text-center text-4xl mt-40 font-bold">
        Scroll back up to reveal Navbar
      </p>
      <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
    </div>
  );
};




// RootLayout component where FloatingNav is used globally
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <FloatingNavDemo />

        <main>{children}</main>

        <footer>

          <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                  <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                  <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Contact</a>
                  </li>
                </ul>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
            </div>
          </footer>

        </footer>
      </body>
    </html>
  );
}
