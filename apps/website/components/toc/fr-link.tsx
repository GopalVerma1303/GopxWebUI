import React from "react";
import { cn } from "@/utils/cn";
import { SOCIAL_MEDIA_LINKS } from "@/content/social-media";

const linkClassName = cn(
  "nx-text-xs hover:cursor-pointer nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100",
  "contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50",
);

const FRLink: React.FC = () => {
  return (
    <a
      href={`${SOCIAL_MEDIA_LINKS.github.link}/issues/new?title=Feature%20request%20for&labels=enhancement`}
      className={linkClassName}
    >
      Request a feature →
    </a>
  );
};

export default FRLink;
