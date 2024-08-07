import { useRouter } from "next/router";
import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import Image from "next/image";
import {
  GitHubIcon,
  TwitterXIcon,
  DiscordIcon,
  RssIcon,
  SiteMapIcon,
} from "@/components/icons";
import { SOCIAL_MEDIA_LINKS } from "@/content/social-media";
import Footer from "@/components/Footer";

const logo = (
  <div className="flex items-center gap-2">
    <Image
      src={"/webui-light-rounded.png"}
      width={40}
      height={40}
      alt="logo"
      className="dark:hidden rounded-lg shadow-lg dark:shadow-gray-300/50"
    />
    <Image
      src={"/webui-dark-rounded.png"}
      width={40}
      height={40}
      alt="logo"
      className="hidden dark:block rounded-lg shadow-lg dark:shadow-gray-700/50"
    />
    <p className=" font-bold hidden lg:inline-block">GOPX WEBUI</p>
  </div>
);

const config: DocsThemeConfig = {
  project: {
    link: SOCIAL_MEDIA_LINKS.github.link,
    icon: <GitHubIcon />,
  },
  docsRepositoryBase: SOCIAL_MEDIA_LINKS.github_docsRepositoryBase.link,
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s - webui.gopx.dev",
      };
    }
  },
  logo,
  head: function useHead() {
    const { title, frontMatter } = useConfig();
    const { route } = useRouter();
    const socialCard =
      route === "/" || !title
        ? `${SOCIAL_MEDIA_LINKS.website.link}/og.jpeg`
        : `${SOCIAL_MEDIA_LINKS.website.link}/api/og?title=${title}&description=${frontMatter.description}${frontMatter.image ? `&image=${frontMatter.image}` : "https://webui.gopx.dev/og.jpeg"}`;

    const description =
      frontMatter.description ||
      "Beautiful UI Components for Web at Your Fingertips!";
    const siteName = "webui.gopx.dev";
    const siteUrl = "https://webui.gopx.dev";

    return (
      <>
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={description} />
        <meta name="author" content="Gopal Verma" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}${route}`} />
        <meta
          property="og:title"
          content={title ? `${title} – ${siteName}` : siteName}
        />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={socialCard} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bettercallgopal" />
        <meta name="twitter:creator" content="@bettercallgopal" />
        <meta name="twitter:url" content={`${siteUrl}${route}`} />
        <meta
          name="twitter:title"
          content={title ? `${title} – ${siteName}` : siteName}
        />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={socialCard} />

        {/* Pinterest */}
        <meta name="pinterest-rich-pin" content="true" />
        <meta name="pinterest:description" content={description} />
        <meta name="pinterest:image" content={socialCard} />

        {/* LinkedIn */}
        <meta property="linkedin:card" content="summary_large_image" />
        <meta
          property="linkedin:title"
          content={title ? `${title} – ${siteName}` : siteName}
        />
        <meta property="linkedin:description" content={description} />
        <meta property="linkedin:image" content={socialCard} />

        {/* WhatsApp */}
        <meta property="og:site_name" content={siteName} />
        <meta
          property="og:title"
          content={title ? `${title} – ${siteName}` : siteName}
        />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={socialCard} />

        {/* Instagram (Note: Instagram uses Open Graph tags) */}
        {/* Already covered by Open Graph tags */}

        {/* Snapchat */}
        <meta property="snapchat:sticker" content={socialCard} />
        <meta property="snapchat:app_id" content="YOUR_SNAPCHAT_APP_ID" />

        {/* TikTok */}
        <meta property="tiktok:app_id" content="YOUR_TIKTOK_APP_ID" />
        <meta
          property="tiktok:title"
          content={title ? `${title} – ${siteName}` : siteName}
        />
        <meta property="tiktok:description" content={description} />
        <meta property="tiktok:image" content={socialCard} />

        {/* Canonical URL */}
        <link rel="canonical" href={`${siteUrl}${route}`} />

        <meta name="apple-mobile-web-app-title" content="gopx.dev" />
        <link rel="icon" href="/favicon.ico" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteName,
            url: siteUrl,
            author: {
              "@type": "Person",
              name: "Gopal Verma",
            },
            description: description,
          })}
        </script>
      </>
    );
  },
  // primaryHue: { dark: 230, light: 230 },
  // primarySaturation: 30,
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <div className="w-screen h-full">
        <Footer />
      </div>
    ),
  },
  search: {
    placeholder: "Search for something...",
  },
  navbar: {
    extraContent: [
      <DiscordIcon key="discord" />,
      <TwitterXIcon key="twitter" />,
    ],
  },
  toc: {
    backToTop: true,
    // extraContent: (
    //   <img alt="placeholder cat" src="https://placekitten.com/g/300/200" />
    // ),
  },
};

export default config;
