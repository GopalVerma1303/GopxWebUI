import { Feed, FeedOptions, Item } from "feed";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { siteConfig } from "@/config/site.config";

interface BlogMeta {
  title: string;
  date: string;
  description: string;
  tag: string;
  ogImage: string;
}

interface Blog {
  meta: BlogMeta;
  content: string;
  slug: string;
}

function isValidDate(date: Date): boolean {
  return date instanceof Date && !isNaN(date.getTime());
}

async function getBlogData(): Promise<Blog[]> {
  const blogDirectories = ["pages/components", "pages/docs", "pages/templates"];

  let blogs: Blog[] = [];

  for (const dir of blogDirectories) {
    const directoryPath = path.join(process.cwd(), dir);
    const filenames = fs.readdirSync(directoryPath);

    const dirBlogs: Blog[] = filenames
      .filter((filename) => filename !== "_meta.json")
      .map((filename) => {
        const filePath = path.join(directoryPath, filename);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(fileContent);

        return {
          meta: data as BlogMeta,
          content,
          slug: path
            .join(dir.replace(/^pages\//, ""), filename)
            .replace(/\.mdx?$/, ""),
        };
      });

    blogs = blogs.concat(dirBlogs);
  }

  return blogs;
}

export default async function generateRssFeed(): Promise<void> {
  const site_url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : siteConfig.siteUrl;
  const feedOptions: FeedOptions = {
    title: `Gopal Verma | ${siteConfig.name}`,
    description:
      "I'm Gopal Verma, an indie developer, freelancer, and full-stack developer based in India. I do open-source projects and freelance work.",
    id: site_url,
    link: site_url,
    image: `${site_url}/logo.png`,
    favicon: `${site_url}/favicon.png`,
    updated: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, ${
      siteConfig.creator.name
    }`,
    feedLinks: {
      rss2: `${site_url}/rss.xml`,
      json: `${site_url}/rss.json`,
      atom: `${site_url}/atom.xml`,
    },
  };

  const feed = new Feed(feedOptions);

  const blogs = await getBlogData();

  blogs.forEach((blog) => {
    const blogDate = new Date(blog.meta?.date);
    const validDate = isValidDate(blogDate) ? blogDate : new Date();

    if (!isValidDate(blogDate)) {
      console.warn(
        `Invalid date found for blog: ${blog.slug}, using current date.`,
      );
    }

    const item: Item = {
      title: blog.meta?.title || blog.slug,
      description: blog.meta?.description,
      link: `${site_url}/${blog.slug}`,
      guid: blog.slug,
      date: validDate,
    };

    feed.addItem(item);
  });

  fs.writeFileSync("./public/rss.xml", feed.rss2());
  fs.writeFileSync("./public/rss.json", feed.json1());
  fs.writeFileSync("./public/atom.xml", feed.atom1());
}

generateRssFeed().catch((err) => console.error(err));
