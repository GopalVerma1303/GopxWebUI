// src/components/Pre.tsx
import React, { useCallback, useRef } from "react";
import cn from "clsx";
import { WordWrapIcon } from "./icons";
import { Button } from "./button";
import { CopyToClipboard } from "./copy-to-clipboard";

interface PreProps {
  children: React.ReactNode;
  className?: string;
  hasCopyCode?: boolean;
  filename?: string;
  maxHeight?: string;
  [key: string]: any;
}

export const Pre: React.FC<PreProps> = ({
  children,
  className,
  hasCopyCode,
  filename,
  maxHeight,
  ...props
}) => {
  const preRef = useRef<HTMLPreElement>(null);

  const toggleWordWrap = useCallback(() => {
    const htmlDataset = document.documentElement.dataset;
    const hasWordWrap = "nextraWordWrap" in htmlDataset;
    if (hasWordWrap) {
      delete htmlDataset.nextraWordWrap;
    } else {
      htmlDataset.nextraWordWrap = "";
    }
  }, []);

  return (
    <div className="nextra-code-block nx-relative nx-mt-6 first:nx-mt-0">
      {filename && (
        <div className="nx-absolute nx-top-0 nx-z-[1] nx-w-full nx-truncate nx-rounded-t-xl bg-[#E5EAFA] nx-py-2 nx-px-4 nx-text-xs nx-text-gray-700 dark:bg-[#272C3E] dark:nx-text-gray-200">
          {filename}
        </div>
      )}
      <div
        className={cn(
          "nx-relative",
          "nx-bg-primary-700/5 nx-mb-4 nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10",
          "contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40",
          filename ? "nx-pt-8" : "nx-pt-4",
        )}
      >
        <pre
          className={cn(
            "nx-overflow-x-auto nx-overflow-y-auto nx-text-[.9em] nx-p-4 no-scrollbar scroll-smooth",
            className,
          )}
          style={{ maxHeight: maxHeight || "500px" }}
          ref={preRef}
          {...props}
        >
          {children}
        </pre>
      </div>
      <div
        className={cn(
          "nx-opacity-0 nx-transition [div:hover>&]:nx-opacity-100 focus-within:nx-opacity-100",
          "nx-flex nx-gap-1 nx-absolute nx-m-[11px] nx-right-0",
          filename ? "nx-top-8" : "nx-top-0",
        )}
      >
        <Button
          onClick={toggleWordWrap}
          className="md:nx-hidden"
          title="Toggle word wrap"
        >
          <WordWrapIcon className="nx-pointer-events-none nx-h-4 nx-w-4" />
        </Button>
        {hasCopyCode && (
          <CopyToClipboard
            getValue={() =>
              preRef.current?.querySelector("code")?.textContent || ""
            }
          />
        )}
      </div>
    </div>
  );
};
