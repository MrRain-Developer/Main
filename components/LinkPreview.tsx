"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "../components/ui/link-preview";

export function LinkPreviewOne() {
  return (
    <div className="flex justify-center items-center h-[10rem] flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-sm max-w-3xl mx-auto ">
        <LinkPreview url="https://tailwindcss.com" className="font-bold">
          Tailwind CSS
        </LinkPreview>
        and
        <LinkPreview url="https://framer.com/motion" className="font-bold">
          Framer Motion
        </LinkPreview>
        are a great way to build modern websites.
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-sm max-w-3xl mx-auto">
        Visit
        <LinkPreview
          url="https://ui.aceternity.com"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Aceternity UI
        </LinkPreview>
        for amazing Numberone and Framer Motion components.
      </p>
    </div>
  );
}

export function LinkPreviewTwo() {
    return (
      <div className="flex justify-center items-center h-[10rem] flex-col px-4">

        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-sm max-w-3xl mx-auto">
        <img src="/images/test.png" className="h-20 w-40 object-cover rounded-md float-left m-2" />
          <LinkPreview url="https://tailwindcss.com" className="font-bold p-2">
           Tailwind CSS
          </LinkPreview>
          and
          <LinkPreview url="https://framer.com/motion" className="font-bold p-2">
            Framer Motion
          </LinkPreview>
        are a great way to build modern websites. Hi I would try something which i dont know what to say
        is just ot full fill this content i just want to test
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-sm max-w-3xl mx-auto">
          Visit
          <LinkPreview
            url="https://ui.aceternity.com"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          >
            Aceternity UI
          </LinkPreview>
          for amazing numbertwo and Framer Motion components.
        </p>
      </div>
    );
  }
