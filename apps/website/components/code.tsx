import React, { useState, useEffect, useRef } from "react";
import { createHighlighter, makeSingletonHighlighter } from "shiki";
import { Button } from "@/components/button";
import { CopyToClipboard } from "./copy-to-clipboard";
import { customLightTheme, customDarkTheme } from "@/utils/customTheme";

const getHighlighter = makeSingletonHighlighter(createHighlighter);

interface CodeProps {
  code: string;
  language: string;
  filename?: string;
  hasCopyCode?: boolean;
}

const codeToHtml = async ({ code, language }: CodeProps) => {
  const highlighter = await getHighlighter({
    themes: [customLightTheme, customDarkTheme],
    langs: [language],
  });
  return highlighter.codeToHtml(code, {
    lang: language,
    themes: {
      light: customLightTheme.name,
      dark: customDarkTheme.name,
    },
  });
};

const Code: React.FC<CodeProps> = ({
  code,
  language,
  filename,
  hasCopyCode = true,
}) => {
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState(false);
  const codeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchHighlightedCode = async () => {
      const result = await codeToHtml({ code, language });
      setHighlightedCode(result);
    };
    fetchHighlightedCode();
  }, [code, language]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      containerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-[400px]">
      <div
        ref={codeRef}
        className={`no-scrollbar overflow-x-auto px-5 text-[.9em] -ml-[30px] ${
          isExpanded ? "max-h-none" : "max-h-[400px]"
        }`}
      >
        <code dir="ltr" dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      </div>
      {!isExpanded && (
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-950 to-transparent pointer-events-none" />
      )}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-2">
        <Button variant="secondary" className="text-xs" onClick={toggleExpand}>
          {isExpanded ? "Collapse" : "View Full Code"}
        </Button>
      </div>
    </div>
  );
};

export default Code;
