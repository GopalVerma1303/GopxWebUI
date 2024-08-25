export const customLightTheme = {
  name: "custom-light-theme",
  colors: {
    "editor.background": "transparent",
    "editor.foreground": "#414141",
  },
  tokenColors: [
    {
      scope: ["text", "source"],
      settings: {
        foreground: "#414141",
      },
    },
    {
      scope: [
        "constant",
        "variable.other.constant",
        "variable.language",
        "constant.numeric",
        "constant.language",
        "constant.character",
        "constant.other",
      ],
      settings: {
        foreground: "#1976d2",
      },
    },
    {
      scope: ["string", "string.regexp", "string.quoted", "string.template"],
      settings: {
        foreground: "#22863a",
      },
    },
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: "#aaa",
        fontStyle: "italic",
      },
    },
    {
      scope: [
        "keyword",
        "keyword.control",
        "keyword.operator",
        "keyword.other",
        "storage",
        "storage.type",
        "storage.modifier",
      ],
      settings: {
        foreground: "#d32f2f",
      },
    },
    {
      scope: ["variable", "variable.parameter", "variable.other"],
      settings: {
        foreground: "#ff9800",
      },
    },
    {
      scope: [
        "entity.name.function",
        "support.function",
        "entity.name.method",
        "meta.function-call",
      ],
      settings: {
        foreground: "#6f42c1",
      },
    },
    {
      scope: ["punctuation", "meta.brace", "meta.delimiter"],
      settings: {
        foreground: "#212121",
      },
    },
    {
      scope: ["string.regexp", "constant.character.escape"],
      settings: {
        foreground: "#22863a",
      },
    },
    {
      scope: ["constant.other.reference.link", "string.other.link"],
      settings: {
        foreground: "#22863a",
        fontStyle: "underline",
      },
    },
    {
      scope: ["entity.name.tag", "meta.tag"],
      settings: {
        foreground: "#22863a",
      },
    },
    {
      scope: ["entity.other.attribute-name", "meta.attribute"],
      settings: {
        foreground: "#6f42c1",
      },
    },
    {
      scope: ["markup.heading", "markup.bold"],
      settings: {
        foreground: "#d32f2f",
        fontStyle: "bold",
      },
    },
    {
      scope: ["markup.italic"],
      settings: {
        fontStyle: "italic",
      },
    },
  ],
};

export const customDarkTheme = {
  name: "custom-dark-theme",
  colors: {
    "editor.background": "transparent",
    "editor.foreground": "#d1d1d1",
  },
  tokenColors: [
    {
      scope: ["text", "source"],
      settings: {
        foreground: "#d1d1d1",
      },
    },
    {
      scope: [
        "constant",
        "variable.other.constant",
        "variable.language",
        "constant.numeric",
        "constant.language",
        "constant.character",
        "constant.other",
      ],
      settings: {
        foreground: "#79b8ff",
      },
    },
    {
      scope: ["string", "string.regexp", "string.quoted", "string.template"],
      settings: {
        foreground: "#4bb74a",
      },
    },
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: "#6b737c",
        fontStyle: "italic",
      },
    },
    {
      scope: [
        "keyword",
        "keyword.control",
        "keyword.operator",
        "keyword.other",
        "storage",
        "storage.type",
        "storage.modifier",
      ],
      settings: {
        foreground: "#f97583",
      },
    },
    {
      scope: ["variable", "variable.parameter", "variable.other"],
      settings: {
        foreground: "#ff9800",
      },
    },
    {
      scope: [
        "entity.name.function",
        "support.function",
        "entity.name.method",
        "meta.function-call",
      ],
      settings: {
        foreground: "#b392f0",
      },
    },
    {
      scope: ["punctuation", "meta.brace", "meta.delimiter"],
      settings: {
        foreground: "#bbb",
      },
    },
    {
      scope: ["string.regexp", "constant.character.escape"],
      settings: {
        foreground: "#4bb74a",
      },
    },
    {
      scope: ["constant.other.reference.link", "string.other.link"],
      settings: {
        foreground: "#ffab70",
        fontStyle: "underline",
      },
    },
    {
      scope: ["entity.name.tag", "meta.tag"],
      settings: {
        foreground: "#4bb74a",
      },
    },
    {
      scope: ["entity.other.attribute-name", "meta.attribute"],
      settings: {
        foreground: "#b392f0",
      },
    },
    {
      scope: ["markup.heading", "markup.bold"],
      settings: {
        foreground: "#f97583",
        fontStyle: "bold",
      },
    },
    {
      scope: ["markup.italic"],
      settings: {
        fontStyle: "italic",
      },
    },
  ],
};
