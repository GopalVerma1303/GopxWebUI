import { createHighlighter, makeSingletonHighlighter } from "shiki";
import { useState, useEffect } from "react";
import { customLightTheme, customDarkTheme } from "@/utils/customTheme";

const getHighlighter = makeSingletonHighlighter(createHighlighter);

interface CodeProps {
  code: string;
  language: string;
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

const Code: React.FC<CodeProps> = ({ code, language }) => {
  const [highlightedCode, setHighlightedCode] = useState<string>("");

  useEffect(() => {
    const fetchHighlightedCode = async () => {
      const result = await codeToHtml({ code, language });
      setHighlightedCode(result);
    };
    fetchHighlightedCode();
  }, [code, language]);

  return (
    <div className="-ml-[30px]">
      <code dir="ltr" dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </div>
  );
};

export default Code;
