import { useState, useEffect } from "react";

export function useComponentCode(componentPath: string) {
  const [code, setCode] = useState<string>("");
  const [language, setLanguage] = useState<string>("");

  useEffect(() => {
    async function fetchCode() {
      try {
        const response = await fetch(componentPath);
        const text = await response.text();
        setCode(text);

        // Determine language based on file extension
        const fileExtension = componentPath.split(".").pop()?.toLowerCase();
        switch (fileExtension) {
          case "js":
            setLanguage("javascript");
            break;
          case "ts":
            setLanguage("typescript");
            break;
          case "jsx":
            setLanguage("jsx");
            break;
          case "tsx":
            setLanguage("tsx");
            break;
          default:
            setLanguage("plaintext");
        }
      } catch (error) {
        console.error("Error fetching component code:", error);
      }
    }

    fetchCode();
  }, [componentPath]);

  return { code, language };
}
