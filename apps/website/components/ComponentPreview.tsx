"use client";

import React, { useMemo } from "react";
import { Tabs } from "nextra/components";
import Showcase from "@/components/Showcase2";
import { Pre } from "@/components/pre";
import { NextraCode } from "@/components/code";
import { ComponentName, registry } from "@/registry/index";
import { LuLoader2 } from "react-icons/lu";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: ComponentName;
  align?: "center" | "start" | "end";
  preview?: boolean;
}

export function ComponentPreview({
  name,
  children,
  className,
  align = "center",
  preview = false,
  ...props
}: ComponentPreviewProps) {
  const [key, setKey] = React.useState(0); // State to trigger re-render of preview
  const Codes = React.Children.toArray(children) as React.ReactElement[];
  const Code = Codes[0]; // first child

  const Preview = React.useMemo(() => {
    const Component = registry[name]?.component;

    if (!Component) {
      console.error(`Component with name "${name}" not found in registry.`);
      return (
        <p className="text-sm text-muted-foreground">
          Component{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{" "}
          not found in registry.
        </p>
      );
    }

    return <Component />;
  }, [name, key]);

  return (
    <Tabs items={["Preview", "Code"]}>
      <Tabs.Tab>
        <Showcase>
          <React.Suspense
            fallback={
              <div className="flex items-center text-sm text-muted-foreground">
                <LuLoader2 className="mr-2 size-4 animate-spin" />
                Loading...
              </div>
            }
          >
            {Preview}
          </React.Suspense>
        </Showcase>
      </Tabs.Tab>
      <Tabs.Tab>
        <Pre filename={`${name}.tsx`} hasCopyCode>
          <NextraCode data-line-numbers>{Code}</NextraCode>
        </Pre>
      </Tabs.Tab>
    </Tabs>
  );
}

export default ComponentPreview;
