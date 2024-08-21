import React from "react";
import { cn } from "@/utils/cn";

const linkClassName = cn(
  "nx-text-xs hover:cursor-pointer nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100",
  "contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50",
);

const BugLink: React.FC = () => {
  return <a className={linkClassName}>🐞 Report a bug →</a>;
};

export default BugLink;
