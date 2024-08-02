import React from "react";
import { format, parseISO } from "date-fns";
import TextTooltip from "./TextTooltip";

type BlogPost = {
  title: string;
  date: Date;
  readTime: number;
  description: string;
  link: string;
};

// @ts-ignore
export default function BlogRow({ post }: { post: BlogPost }) {
  const formattedDate = format(post.date, "MMM dd");

  return (
    <a href={post.link}>
      <TextTooltip text={post.title} link={"#"} hoverMessage={post.description}>
        <div className="group flex flex-col md:flex-row justify-between items-start md:items-center gap-[4px] md:gap-[12px] w-full opacity-70 hover:opacity-100 transition-opacity duration-200 ease-in-out py-[5px] relative ">
          <div className="flex gap-[5px] items-center">
            <p className="text-xl group-hover:underline">{post.title}</p>
            <p className="text-xs transform transition-transform duration-200 ease-in-out group-hover:animate-flicker">
              {"↗"}
            </p>
          </div>
          <div className="flex gap-[8px] items-center flex-shrink-0">
            <p className="opacity-50 text-sm">{formattedDate}</p>
            <p className="opacity-50 text-sm">•</p>
            <p className="opacity-50 text-sm">{post.readTime} mins</p>
          </div>
        </div>
      </TextTooltip>
    </a>
  );
}
