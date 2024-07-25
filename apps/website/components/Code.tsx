import React, { useEffect, useState } from "react";
import { createHighlighter } from "shiki";
import { FaCopy, FaCheck } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface CodeProps {
  code: string;
  language: string;
}

const Code: React.FC<CodeProps> = ({ code, language }) => {
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const highlight = async () => {
      const highlighter = await createHighlighter({
        themes: ["github-dark", "github-light"],
        langs: ["javascript", "typescript", "tsx", "jsx"],
      });
      const highlighted = await highlighter.codeToHtml(code, {
        lang: language,
        themes: {
          dark: "github-dark",
          light: "github-light",
        },
      });
      setHighlightedCode(highlighted);
    };
    highlight();
  }, [code, language]);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg dark:bg-[#24292E] bg-[#FFFFFF]">
      <div className="absolute top-4 right-4 z-10">
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <button className="p-2 dark:bg-gray-700 bg-black/50 rounded-md hover:bg-black/70 dark:hover:bg-gray-600 transition-colors">
            {copied ? (
              <FaCheck className="text-white" />
            ) : (
              <FaCopy className="text-white" />
            )}
          </button>
        </CopyToClipboard>
      </div>
      <div className="overflow-x-auto">
        <pre className="whitespace-pre overflow-x-scroll py-8">
          <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
      </div>
    </div>
  );
};

export default Code;
