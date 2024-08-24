import cn from "clsx";
import type { ComponentProps, ReactElement } from "react";
import { useTheme } from "next-themes";
import { Highlighter } from "shiki";
import { useEffect, useState } from "react";

interface NextraCodeProps extends ComponentProps<"code"> {
  lang?: string;
}

export const NextraCode = ({
  children,
  className,
  lang,
  ...props
}: NextraCodeProps): ReactElement => {
  const { resolvedTheme } = useTheme();
  const [highlighter, setHighlighter] = useState<Highlighter | null>(null);
  const [highlightedCode, setHighlightedCode] = useState<string>("");

  useEffect(() => {
    const loadHighlighter = async () => {
      const { getHighlighter } = await import("shiki");
      const newHighlighter = await getHighlighter({
        themes: ["github-light", "github-dark"],
        langs: [lang || "typescript"],
      });
      setHighlighter(newHighlighter);
    };

    loadHighlighter();
  }, [lang]);

  useEffect(() => {
    if (highlighter && typeof children === "string") {
      const theme = resolvedTheme === "dark" ? "github-dark" : "github-light";
      const code = highlighter.codeToHtml(children, {
        lang: lang || "typescript",
        theme,
      });
      setHighlightedCode(code);
    }
  }, [highlighter, children, lang, resolvedTheme]);

  const hasLineNumbers = "data-line-numbers" in props;

  return (
    <code
      className={cn(
        "nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em]",
        "dark:nx-border-white/10 dark:nx-bg-white/10",
        hasLineNumbers && "[counter-reset:line]",
        className,
      )}
      dir="ltr"
      {...props}
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  );
};
