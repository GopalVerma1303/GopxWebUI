"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Template: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto my-28 flex flex-col gap-20 px-12">
      <div className="grid md:grid-cols-2 grid-cols-1 md:items-start items-center ">
        <div className="flex flex-col gap-6 md:text-left text-center">
          <h2 className="text-4xl font-bold">Devsite Template</h2>
          <p className="opacity-60 text-lg">
            A simple, clean, modern and minimalistic landing page template for
            startups. Filled with microinteractions to keep your users engaged.
          </p>
          <p>Nextjs, ReactJs, TailwindCSS</p>
        </div>
        <div className="flex md:justify-end justify-center  self-end md:mt-0 mt-6">
          <div className="flex gap-4">
            <Link
              href={"https://github.com/GopalVerma1303/gopx.dev"}
              target="_blank"
              className="px-10 bg-black/15 dark:bg-white/15 text-opacity-90  py-2 rounded-md focus:bg-opacity-25 active:bg-opacity-30 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 w-fit transition-transform duration-300 hover:scale-105 gap-2"
            >
              Live Preview
            </Link>
            <Link
              href={"https://gopx.dev"}
              target="_blank"
              className="px-10 bg-black font-medium dark:bg-white text-white dark:text-black text-opacity-90 py-2 rounded-md focus:bg-opacity-25 active:bg-opacity-30 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 w-fit transition-transform duration-300 hover:scale-105"
            >
              Buy now $9
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Image
          src="/assets/templates/gopx-1.png"
          alt="Product 1"
          width={500}
          height={300}
          className="w-full rounded-lg shadow-md"
        />
        <Image
          src="/assets/templates/gopx-1.png"
          alt="Product 2"
          width={500}
          height={300}
          className="w-full rounded-lg shadow-md"
        />
        <Image
          src="/assets/templates/gopx-1.png"
          alt="Product 3"
          width={500}
          height={300}
          className="w-full rounded-lg shadow-md"
        />
        <Image
          src="/assets/templates/gopx-1.png"
          alt="Product 4"
          width={500}
          height={300}
          className="w-full rounded-lg shadow-md"
        />
      </div>
      <section className="">
        <div className="mx-auto flex flex-col lg:flex-row gap-x-48">
          <h2 className="text-3xl font-bold mb-12 ">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {featuresList.map((feature, index) => (
              <FeatureItem
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center mt-16">
        <Link
          href={"https://webui.gopx.dev/store/templates"}
          target="_blank"
          className="px-10 bg-black font-medium dark:bg-white text-white dark:text-black text-opacity-90 py-2 rounded-md focus:bg-opacity-25 active:bg-opacity-30 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 w-fit transition-transform duration-300 hover:scale-105"
        >
          Explore more templates
        </Link>
      </section>
    </div>
  );
};

export default Template;

const FeatureItem = ({ title, description }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const featuresList = [
  {
    title: "Built with Next.js Tailwind CSS and framer motion",
    description:
      "A well structured template that is super easy to customize and play with.",
  },
  {
    title: "Modern, Minimal and Clean Design",
    description:
      "A modern, minimal and clean design that is tastefully filled with microinteractions to keep your users engaged.",
  },
  {
    title: "SEO Optimized",
    description:
      "Optimized for search engines, with a focus on SEO best practices.",
  },
  {
    title: "Mobile responsive",
    description:
      "Ensures optimal viewing experience across all devices and screen sizes.",
  },
  {
    title: "Dark Mode",
    description:
      "Dark mode is supported, ensuring a comfortable viewing experience for your users.",
  },
  {
    title: "Typescript",
    description:
      "Built with Typescript, ensuring type safety and autocomplete for your code.",
  },
  {
    title: "Easy to deploy and customize",
    description:
      "Easily deploy your website to Vercel, Netlify, or any other platform.",
  },
  {
    title: "Help and support",
    description:
      "We have a support chat where you can ask questions and get help from our community or our team directly.",
  },
  {
    title: "Future updates",
    description:
      "We regularly update the templates with new features and improvements.",
  },
  {
    title: "Cal.com Calendar Scheduling Support",
    description:
      "Integrated Cal.com booking modal for seamless call scheduling experience.",
  },
];
