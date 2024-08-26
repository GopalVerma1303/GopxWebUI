"use client";

import { TemplateData } from "@/content/template-data";
import { cn } from "@/utils/cn";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TemplateButton = ({
  href,
  children,
  variant,
}: {
  href: string;
  children: string;
  variant?: string;
}) => {
  return (
    <Link
      href={href || ""}
      target="_blank"
      rel="noreferrer"
      className={cn(
        `hover:bg-red-500/90 rounded-lg bg-red-500 px-2 py-1 text-sm font-medium text-white transition-all duration-300 ease-in-out`,
        variant === "primary" && "bg-red-500 text-white",
        variant === "secondary" &&
          "border bg-white text-gray-900 hover:bg-gray-100/50",
      )}
    >
      {children}
    </Link>
  );
};

const Template = () => {
  const router = usePathname();
  const template = TemplateData.find((t) => t.id === "stoic");

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          {/* Fixed info section */}
          <div className="lg:sticky lg:top-36 lg:h-[calc(100vh-4rem)] lg:w-1/3">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center gap-2">
                <h1 className="text-xl font-medium">{template.name}</h1>
                {template.discount && (
                  <div className="text-xs font-medium text-red-500">
                    {template.discount}% off
                  </div>
                )}
              </div>
              <div className="flex flex-row items-center gap-1 text-lg">
                <p className="font-semibold text-red-500">${template?.price}</p>
                <p className="text-xs text-gray-600/50 line-through">
                  ${template?.originalPrice}
                </p>
              </div>
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-200">
                {template.description}
              </div>
              <div className="flex flex-row gap-2">
                <Link
                  href={template.downloadLink || ""}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-red-500 px-2 py-1 text-sm font-medium text-white transition-all duration-300 ease-in-out hover:bg-red-500/90"
                >
                  Download Template
                </Link>
                <TemplateButton
                  href={template.livePreviewLink}
                  variant="secondary"
                >
                  Live Preview
                </TemplateButton>
              </div>
            </div>
          </div>

          {/* Scrollable images section */}
          <div className="mt-8 lg:mt-0 lg:w-2/3">
            <div className="flex flex-col gap-8">
              {template.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`${template.name} - Image ${index + 1}`}
                  width={1200}
                  height={600}
                  className="w-full rounded-lg border"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
