import React, { useEffect, useState } from "react";
import { Tabs, Code } from "nextra/components";
import { getHighlighter, Highlighter } from "shiki";
import { Pre } from "@/components/Pre";

interface ComponentShowcaseProps {
  component: React.ReactElement;
  componentName: string;
}

const lightTheme = {
  name: "custom-light",
  settings: [
    { scope: ["text"], settings: { foreground: "#414141" } },
    { scope: ["constant", "support"], settings: { foreground: "#1976d2" } },
    { scope: ["string", "markup.quote"], settings: { foreground: "#22863a" } },
    { scope: ["comment"], settings: { foreground: "#aaa" } },
    { scope: ["keyword"], settings: { foreground: "#d32f2f" } },
    { scope: ["variable.parameter"], settings: { foreground: "#ff9800" } },
    {
      scope: ["entity.name.function", "support.function"],
      settings: { foreground: "#6f42c1" },
    },
    { scope: ["punctuation"], settings: { foreground: "#212121" } },
    { scope: ["markup.underline.link"], settings: { foreground: "#22863a" } },
  ],
  bg: "transparent",
  colors: {},
};

const darkTheme = {
  name: "custom-dark",
  settings: [
    { scope: ["text"], settings: { foreground: "#d1d1d1" } },
    { scope: ["constant", "support"], settings: { foreground: "#79b8ff" } },
    { scope: ["string", "markup.quote"], settings: { foreground: "#ffab70" } },
    { scope: ["comment"], settings: { foreground: "#6b737c" } },
    { scope: ["keyword"], settings: { foreground: "#f97583" } },
    { scope: ["variable.parameter"], settings: { foreground: "#ff9800" } },
    {
      scope: ["entity.name.function", "support.function"],
      settings: { foreground: "#b392f0" },
    },
    {
      scope: ["string.regexp", "constant.character.escape"],
      settings: { foreground: "#4bb74a" },
    },
    { scope: ["punctuation"], settings: { foreground: "#bbb" } },
    { scope: ["markup.underline.link"], settings: { foreground: "#ffab70" } },
  ],
  bg: "transparent",
  colors: {},
};

export function ComponentShowcase({
  component,
  componentName,
}: ComponentShowcaseProps) {
  const [highlighter, setHighlighter] = useState<Highlighter | null>(null);
  const [highlightedCode, setHighlightedCode] = useState<string>("");

  // Extract the props from the component
  const props = component.props;

  // Generate the code string
  const code = `<${componentName}
${Object.entries(props)
  .map(([key, value]) => `  ${key}=${JSON.stringify(value)}`)
  .join("\n")}
/>`;

  useEffect(() => {
    getHighlighter({
      themes: [lightTheme, darkTheme],
      langs: ["tsx"],
    }).then((hl) => {
      setHighlighter(hl);
    });
  }, []);

  useEffect(() => {
    if (highlighter) {
      const highlighted = highlighter.codeToHtml(code, {
        lang: "tsx",
        themes: {
          light: "custom-light",
          dark: "custom-dark",
        },
      });
      setHighlightedCode(highlighted);
    }
  }, [highlighter, code]);

  return (
    <div className="w-full mt-[30px]">
      <Tabs items={["Preview", "Code"]}>
        <Tabs.Tab>
          <div className="bg-preview-container bg-preview-container-light rounded-xl p-6 py-20 h-full min-h-[500px] flex justify-center items-center">
            <div className="w-full h-full flex items-center justify-center">
              {component}
            </div>
          </div>
        </Tabs.Tab>
        <Tabs.Tab>
          <Pre filename={componentName} hasCopyCode={true} maxHeight="400px">
            <Code>
              <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
            </Code>
          </Pre>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
}
