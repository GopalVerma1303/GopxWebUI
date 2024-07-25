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
      scope: ["constant", "variable.other.constant", "variable.language"],
      settings: {
        foreground: "#1976d2",
      },
    },
    {
      scope: ["string", "string.regexp"],
      settings: {
        foreground: "#22863a",
      },
    },
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: "#aaa",
      },
    },
    {
      scope: ["keyword"],
      settings: {
        foreground: "#d32f2f",
      },
    },
    {
      scope: ["variable.parameter"],
      settings: {
        foreground: "#ff9800",
      },
    },
    {
      scope: ["entity.name.function", "support.function"],
      settings: {
        foreground: "#6f42c1",
      },
    },
    {
      scope: ["punctuation"],
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
      scope: ["constant", "variable.other.constant", "variable.language"],
      settings: {
        foreground: "#79b8ff",
      },
    },
    {
      scope: ["string", "string.regexp"],
      settings: {
        foreground: "#ffab70",
      },
    },
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: "#6b737c",
      },
    },
    {
      scope: ["keyword"],
      settings: {
        foreground: "#f97583",
      },
    },
    {
      scope: ["variable.parameter"],
      settings: {
        foreground: "#ff9800",
      },
    },
    {
      scope: ["entity.name.function", "support.function"],
      settings: {
        foreground: "#b392f0",
      },
    },
    {
      scope: ["punctuation"],
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
  ],
};
