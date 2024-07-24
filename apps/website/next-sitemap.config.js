/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://webui.gopx.dev",
  changefreq: "daily",
  priority: 1.0,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ["/terms-and-conditions", "/privacy-policy"],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "black-listed-bot",
        disallow: ["/terms-and-conditions", "/privacy-policy"],
      },
    ],
  },
};
