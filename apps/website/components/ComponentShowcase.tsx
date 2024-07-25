// components/ComponentShowcase.tsx
import React from "react";
import { Tabs } from "nextra/components";
import Code from "@/components/Code";
import { useComponentCode } from "@/hooks/useComponentCode";

interface ComponentShowcaseProps {
  component: React.ReactNode;
  componentName: string;
  componentPath: string;
}

export function ComponentShowcase({
  component,
  componentName,
  componentPath,
}: ComponentShowcaseProps) {
  const { code, language } = useComponentCode(componentPath);

  return (
    <Tabs items={["Preview", "Code"]}>
      <Tabs.Tab>
        <div className="bg-preview-container bg-preview-container-light rounded-xl p-6 py-20">
          <div className="w-full h-full flex items-center justify-center">
            {component}
          </div>
        </div>
      </Tabs.Tab>
      <Tabs.Tab>
        {code ? (
          <Code code={code} language={language} />
        ) : (
          <p>Loading code...</p>
        )}
      </Tabs.Tab>
    </Tabs>
  );
}
