/** @type {import('next').NextConfig} */
import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
  flexsearch: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
});

const nextConfig = {
  images: {
    domains: [
      "bettercallgopal.vercel.app",
      "webui-gopx.vercel.app",
      "gopx.dev",
      "webui.gopx.dev",
      "www.gopx.dev",
      "www.codedeployingsquad.tech",
      "media.licdn.com",
      "github.com",
      "opengraph.githubassets.com",
    ],
  },
  reactStrictMode: true,
  transpilePackages: ["ui"],
};

export default withNextra(nextConfig);
