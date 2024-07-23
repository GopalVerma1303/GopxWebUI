/** @type {import('tailwindcss').Config} */

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./theme.config.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        roboto: ["Roboto Condensed", "sans-serif"],
      },
      animation: {
        flicker: "flicker 0.3s infinite",
        blob: "blob 7s linear infinite",
        bounce: "240ms ease 0s running bounce",
        "glow-line-horizontal":
          "glow-line-horizontal var(--animation-duration) ease-in forwards",
        "glow-line-vertical":
          "glow-line-vertical var(--animation-duration) ease-in forwards",
        "fade-in": "fade-in 1000ms var(--animation-delay, 0ms) ease forwards",
        "image-glow": "image-glow 4100ms 600ms ease-out forwards",
        "image-rotate": "image-rotate 1400ms ease forwards",
        "sketch-lines": "sketch-lines 1200ms ease-out forwards",
        zap: "zap 2250ms calc(var(--index) * 20ms) linear infinite",
      },
      backgroundImage: {
        "glass-gradient":
          "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
        "glow-lines":
          "linear-gradient(var(--direction), #9d9bf2 0.43%, #7877c6 14.11%, rgba(120, 119, 198, 0) 62.95%)",
        "hero-glow":
          "conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg)",
        "hero-gradient":
          "radial-gradient(ellipse 50% 80% at 20% 40%, rgba(93, 52, 221, 0.1), transparent), radial-gradient(ellipse 50% 80% at 80% 50%, rgba(120, 119, 198, 0.15),transparent)",
        "page-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120, 119, 198, 0.3), transparent)",
        "primary-gradient":
          "linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)",
        "radial-faded":
          "radial-gradient(circle at bottom center, var(--color), transparent 70%)",
      },
      boxShadow: {
        primary: "rgb(80 63 205 / 50%) 0px 1px 40px",
      },
      colors: {
        black: "#000212",
        gray: {
          100: "rgba(255, 255, 255, 0.08)", // transparent white
          200: "#f7f8f8", // off white
          300: "#b4bcd0", // primary text
          400: "#858699", // gray
          500: "#222326", // gray dark
        },
        transparent: "transparent",
        white: "#fff",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(20deg)" },
          "50%": { transform: "rotate(0deg)" },
          "75%": { transform: "rotate(-20deg)" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) rotate(0deg) scale(1)",
          },
          "100%": {
            transform: "translate(0px, 0px) rotate(360deg) scale(1)",
          },
        },
        "glow-line-horizontal": {
          "0%": { opacity: 0, transform: "translateX(0)" },
          "5%": { opacity: 1, transform: "translateX(0)" },
          "90%": { opacity: 1 },
          "100%": { opacity: 0, transform: "translateX(min(40vw, 30rem))" },
        },
        "glow-line-vertical": {
          "0%": { opacity: 0, transform: "translateY(0)" },
          "5%": { opacity: 1, transform: "translateY(0)" },
          "90%": { opacity: 1 },
          "100%": { opacity: 0, transform: "translateY(min(15vw, 30rem))" },
        },
        "fade-in": {
          from: { opacity: 0, transform: "translateY(-10px)" },
          to: { opacity: 1, transform: "none" },
        },
        "image-glow": {
          "0%": {
            opacity: 0,
            "animation-timing-function": "cubic-bezier(0.74, 0.25, 0.76, 1)",
          },
          "10%": {
            opacity: 1,
            "animation-timing-function": "cubic-bezier(0.12, 0.01, 0.08, 0.99)",
          },
          "100%": {
            opacity: 0.2,
          },
        },
        "image-rotate": {
          "0%": { transform: "rotateX(25deg)" },
          "25%": { transform: "rotateX(25deg) scale(0.9)" },
          "60%": { transform: "none" },
          "100%": { transform: "none" },
        },
        "sketch-lines": {
          "0%": { "stroke-dashoffset": 1 },
          "50%": { "stroke-dashoffset": 0 },
          "99%": { "stroke-dashoffset": 0 },
          "100%": { visiblity: "hidden" },
        },
        zap: {
          "0%, 9%, 11%, 100% ": {
            fill: "transparent",
          },
          "10%": {
            fill: "white",
          },
        },
        spacing: {
          0: "0",
          1: "0.4rem",
          2: "0.8rem",
          3: "1.2rem",
          4: "1.6rem",
          5: "2rem",
          6: "2.4rem",
          7: "2.8rem",
          8: "3.2rem",
          9: "3.6rem",
          10: "4rem",
          11: "4.4rem",
          12: "4.8rem",
          13: "5.2rem",
          14: "5.6rem",
          15: "6rem",
          16: "6.4rem",
          "nav-height": "var(--nav-height)",
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ["group-hover"],
    },
  },
  plugins: [
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        },
      );
    },
  ],
  darkMode: "class",
};
