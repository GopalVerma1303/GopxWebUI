import React from "react";
import GhostLabel from "@/components/ui/ghost-label";
import BlogRow from "@/components/ui/blog-row";

type BlogPost = {
  title: string;
  date: Date;
  readTime: number;
  description: string;
  link: string;
};

const dummyBlogPosts: BlogPost[] = [
  {
    title: "The Future of AI in Web Development",
    date: new Date("2023-08-15"),
    readTime: 5,
    description:
      "Explore how AI is transforming the landscape of web development, from code generation to user experience optimization.",
    link: "#",
  },
  {
    title: "Mastering React Hooks",
    date: new Date("2023-07-22"),
    readTime: 8,
    description:
      "A deep dive into React Hooks, covering useEffect, useContext, and custom hooks to supercharge your React applications.",
    link: "#",
  },
  {
    title: "TypeScript Best Practices in 2023",
    date: new Date("2023-06-30"),
    readTime: 6,
    description:
      "Learn the latest TypeScript best practices to write more maintainable and scalable code in your projects.",
    link: "#",
  },
];

const BlogList: React.FC = () => {
  const blogsByYear = dummyBlogPosts.reduce(
    (acc, post) => {
      const year = post.date.getFullYear();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(post);
      return acc;
    },
    {} as Record<number, BlogPost[]>,
  );

  const years = Object.keys(blogsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="w-full max-w-2xl mx-auto py-12 px-4">
      <div className="-mt-0">
        {years.map((year) => (
          <div key={year} className="relative mt-20">
            <GhostLabel text={year.toString()} />
            {blogsByYear[year].map((post, index) => (
              <BlogRow key={index} post={post} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
