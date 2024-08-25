import { createHighlighter, makeSingletonHighlighter } from "shiki";
import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import { customLightTheme, customDarkTheme } from "@/utils/customTheme";

const getHighlighter = makeSingletonHighlighter(createHighlighter);

const codeToHtml = async ({ code, language }) => {
  const highlighter = await getHighlighter({
    themes: [customLightTheme, customDarkTheme],
    langs: ["tsx"],
  });

  return highlighter.codeToHtml(code, {
    lang: "tsx",
    themes: {
      light: customLightTheme.name,
      dark: customDarkTheme.name,
    },
  });
};

export default function Code({ code, language }) {
  const [highlightedCode, setHighlightedCode] = useState("");

  useEffect(() => {
    const fetchHighlightedCode = async () => {
      const result = await codeToHtml({ code, language });
      setHighlightedCode(result);
    };
    fetchHighlightedCode();
  }, [code, language]);

  return (
    <code dir="ltr" dangerouslySetInnerHTML={{ __html: highlightedCode }} />
  );
}
