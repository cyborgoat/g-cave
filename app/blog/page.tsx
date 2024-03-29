"use client";
import useSWR from "swr";
import React from "react";
import { BlogInfo } from "../../types/blog";
import { Card, Skeleton } from "@nextui-org/react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const BLOG_URL_PREFIX =
  "https://raw.githubusercontent.com/cyborgoat/tech-reservoir/main";
export default function BlogHome() {
  const { data, error, isLoading } = useSWR(
    `${BLOG_URL_PREFIX}/assets/catalog.json`,
    fetcher
  );

  if (error) return "An error has occurred.";

  if (isLoading)
    return (
      <Card className="w-3/5 mx-auto space-y-5 p-4" radius="lg">
        <Skeleton className="rounded-lg">
          <div className="h-24 rounded-lg bg-default-300"></div>
        </Skeleton>
        <div className="space-y-3">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      </Card>
    );

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
            <div className="pt-6 text-sm text-zinc-400/80">
              Posted on {blogInfo.date}
            </div>
          </a>
        );
      })}
    </div>
  );
}
