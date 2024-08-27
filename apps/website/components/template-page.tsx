"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TEMPLATES } from "@/content/store";
import TechStack from "@/components/TechStack";

const Template = ({ id }: { id: string }) => {
  const template = TEMPLATES.find((p) => p.id === id);

  if (!template) {
    return <div>Template not found.</div>;
  }

  return (
    <div className="w-full max-w-7xl mx-auto my-28 flex flex-col gap-20 px-5">
      <div className="grid md:grid-cols-2 grid-cols-1 md:items-start items-center ">
        <div className="flex flex-col gap-6 md:text-left text-center">
          <h2 className="text-4xl font-bold">{template.name}</h2>
          <p className="opacity-60 text-lg">{template.description}</p>
          <div className="mx-auto w-full flex justify-center md:justify-normal ">
            <TechStack techStack={template.stack} />
          </div>
        </div>
        <div className="flex md:justify-end justify-center  self-end md:mt-0 mt-6">
          <div className="flex gap-4 flex-col md:flex-row">
            <Link
              href={template.livePreviewLink}
              target="_blank"
              className="px-10 bg-black/15 dark:bg-white/15 text-opacity-90  py-2 rounded-md focus:bg-opacity-25 active:bg-opacity-30 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 w-fit transition-transform duration-300 hover:scale-105 gap-2"
            >
              Live Preview
            </Link>
            <Link
              href={template.downloadLink}
              target="_blank"
              className="px-10 bg-black font-medium dark:bg-white text-white dark:text-black text-opacity-90 py-2 rounded-md focus:bg-opacity-25 active:bg-opacity-30 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 w-fit transition-transform duration-300 hover:scale-105"
            >
              Buy now ${template.sp}
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {template.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="Product 1"
            width={500}
            height={300}
            className="w-full rounded-lg shadow-md"
          />
        ))}
      </div>
      <section className="">
        <div className="mx-auto flex flex-col lg:flex-row gap-x-48">
          <h2 className="text-3xl font-bold mb-12 ">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {template.featuresList.map((feature, index) => (
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
          href={"/store"}
          className="px-10 bg-black font-medium dark:bg-white text-white dark:text-black text-opacity-90 py-2 rounded-md focus:bg-opacity-25 active:bg-opacity-30 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 w-fit transition-transform duration-300 hover:scale-105"
        >
          Explore more templates
        </Link>
      </section>
    </div>
  );
};

export default Template;

const FeatureItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="opacity-50">{description}</p>
  </div>
);
