"use client";

import * as React from "react";
import { ComponentName } from "@/registry/index";
import { Pre } from "./pre";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: ComponentName;
  align?: "center" | "start" | "end";
  preview?: boolean;
}

interface ComponentData {
  name: string;
  registryDependencies: string[];
  files: { name: string; content: string }[];
  type: string;
}

export function ComponentSource({
  name,
  className,
  align = "center",
  preview = false,
  ...props
}: ComponentPreviewProps) {
  const [sourceCode, setSourceCode] = React.useState<string>("");
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchSourceCode = async () => {
      try {
        // First, fetch the index.json to determine the component type and file path
        const indexResponse = await fetch("/registry/index.json");
        const indexData = await indexResponse.json();

        const componentInfo = indexData.find((item: any) => item.name === name);
        if (!componentInfo) {
          throw new Error(`Component "${name}" not found in registry index.`);
        }

        // Determine the correct path based on the component type
        let componentPath;
        switch (componentInfo.type) {
          case "components:ui":
            componentPath = `/registry/components/ui/${name}.json`;
            break;
          case "components:example":
            componentPath = `/registry/components/example/${name}.json`;
            break;
          case "components:block":
            componentPath = `/registry/components/block/${name}.json`;
            break;
          default:
            throw new Error(`Unknown component type: ${componentInfo.type}`);
        }

        // Fetch the component data
        const componentResponse = await fetch(componentPath);
        const data: ComponentData = await componentResponse.json();
        setSourceCode(data.files[0]?.content || "");
        setLoading(false);
      } catch (err) {
        console.error("Error fetching component data:", err);
        setError(
          err instanceof Error ? err.message : "An unknown error occurred",
        );
        setLoading(false);
      }
    };

    fetchSourceCode();
  }, [name]);

  return (
    <Pre filename={`${name}.tsx`} hasCopyCode>
      {sourceCode}
    </Pre>
  );
}
