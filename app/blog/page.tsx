"use client";
import useSWR from "swr";
import React from "react";
import LoadingCircles from "@components/LoadingCircles";
import { BlogInfo } from "../../types/blog";
import { ScrollShadow } from "@nextui-org/react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const BLOG_URL_PREFIX =
  "https://raw.githubusercontent.com/cyborgoat/tech-reservoir/main";
export default function BlogHome() {
  const { data, error, isLoading } = useSWR(
    `${BLOG_URL_PREFIX}/assets/catalog.json`,
    fetcher
  );

  if (error) return "An error has occurred.";

  if (isLoading) return <LoadingCircles />;

  let blogList = data as BlogInfo[];
  return (
    <div className="flex flex-col w-3/5 mx-auto gap-y-2 pb-36">
      {blogList.map((blogInfo, ix) => {
        return (
          <a
            key={ix}
            href={`${location.pathname}/detail?category=${
              blogInfo.category
            }&title=${blogInfo.fname.replace(".json", "")}`}
            className="w-full px-2 py-2 border-2 border-slate-400/30 rounded-md  mt-2 hover:bg-sky-300/50 duration-700"
          >
            <h1 className="text-xl font-semibold text-zinc-700 dark:text-zinc-100">
              {blogInfo.title}
            </h1>
            <div className="text-regular font-normal text-zinc-500 dark:text-zinc-300">
              {blogInfo.summary}
            </div>
            <div className="pt-6 text-sm text-zinc-400/80">Posted on {blogInfo.date}</div>
          </a>
        );
      })}
    </div>
  );
}
