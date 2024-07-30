import React, { useEffect, useState } from "react";
import { Tabs, Code } from "nextra/components";
import { getHighlighter, Highlighter } from "shiki";
import { Pre } from "@/components/Pre";

interface ComponentShowcaseProps {
  component: React.ReactElement;
  componentName: string;
  componentPath: string;
  componentProps: Array<{ prop: string; type: string; description: string }>;
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
  componentPath,
  componentProps, // Accepting componentProps
}: ComponentShowcaseProps) {
  const [highlighter, setHighlighter] = useState<Highlighter | null>(null);
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [componentCode, setComponentCode] = useState<string>("");

  useEffect(() => {
    // Fetch the component code
    fetch(`/api/getComponentCode?filePath=${encodeURIComponent(componentPath)}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.code) {
          setComponentCode(data.code);
        }
      })
      .catch((error) => console.error("Error fetching component code:", error));

    getHighlighter({
      themes: [lightTheme, darkTheme],
      langs: ["tsx"],
    }).then((hl) => {
      setHighlighter(hl);
    });
  }, [componentPath]);

  useEffect(() => {
    if (highlighter && componentCode) {
      const highlighted = highlighter.codeToHtml(componentCode, {
        lang: "tsx",
        themes: {
          light: "custom-light",
          dark: "custom-dark",
        },
      });
      setHighlightedCode(highlighted);
    }
  }, [highlighter, componentCode]);

  return (
    <div className="w-full mt-[30px]">
      <Tabs items={["Preview", "Code", "Props"]}>
        <Tabs.Tab>
          <div className="bg-preview-container bg-preview-container-light rounded-xl p-6 py-20">
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
        <Tabs.Tab>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-black/10 dark:bg-white/10">
                  <th className="border border-gray-600 px-4 py-2">Prop</th>
                  <th className="border border-gray-600 px-4 py-2">Type</th>
                  <th className="border border-gray-600 px-4 py-2">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {componentProps.map((prop) => (
                  <tr key={prop.prop}>
                    <td className="border border-gray-600 px-4 py-2">
                      <Code>{prop.prop}</Code>
                    </td>
                    <td className="border border-gray-600 px-4 py-2">
                      <Code>{prop.type}</Code>
                    </td>
                    <td className="border border-gray-600 px-4 py-2">
                      {prop.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
}
