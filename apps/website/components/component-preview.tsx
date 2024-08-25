"use client";
import * as React from "react";
import { cn } from "@/utils/cn";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import { Icons } from "@/components/magicui-icons";
import { ComponentName, registry } from "@/registry/index";
import { ComponentSource } from "./component-source";
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

export function ComponentPreview({
  name,
  className,
  align = "center",
  preview = false,
  ...props
}: ComponentPreviewProps) {
  const [sourceCode, setSourceCode] = React.useState<string>("");
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const Component = registry[name]?.component;

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

  const Preview = React.useMemo(() => {
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
  }, [name, Component]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      className={cn(
        "relative my-4 flex flex-col space-y-2 lg:max-w-[120ch]",
        className,
      )}
      {...props}
    >
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        {!preview && (
          <div className="flex items-center justify-between pb-3">
            <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
              <TabsTrigger
                value="preview"
                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Preview
              </TabsTrigger>
              <TabsTrigger
                value="code"
                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Code
              </TabsTrigger>
            </TabsList>
          </div>
        )}
        <TabsContent value="preview" className="relative rounded-md">
          <React.Suspense
            fallback={
              <div className="flex items-center text-sm text-muted-foreground">
                <Icons.spinner className="mr-2 size-4 animate-spin" />
                Loading...
              </div>
            }
          >
            {Preview}
          </React.Suspense>
        </TabsContent>
        <TabsContent value="code">
          <Pre filename={`${name}.tsx`} hasCopyCode>
            {sourceCode}
          </Pre>
        </TabsContent>
      </Tabs>
    </div>
  );
}
