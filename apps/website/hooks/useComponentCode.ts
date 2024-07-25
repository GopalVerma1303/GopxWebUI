// hooks/useComponentCode.ts
import { useState, useEffect } from "react";

export function useComponentCode(componentPath: string) {
  const [code, setCode] = useState<string | null>(null);
  const [language, setLanguage] = useState<string>("typescript");

  useEffect(() => {
    async function fetchCode() {
      try {
        const response = await fetch(
          `/api/getComponentCode?path=${encodeURIComponent(componentPath)}`,
        );
        const data = await response.json();
        setCode(data.code);
        setLanguage(data.language);
      } catch (error) {
        console.error("Failed to fetch component code:", error);
      }
    }

    fetchCode();
  }, [componentPath]);

  return { code, language };
}
