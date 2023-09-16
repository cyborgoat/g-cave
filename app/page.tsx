'use client';
import useSWR from "swr";
import React from "react";
import LoadingCircles from "@components/LoadingCircles";

import {ScrollShadow} from "@nextui-org/react";
import {BlogInfo} from "../types/blog";
import {DEV_MODE} from "./settings";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const BLOG_URL_PREFIX = 'https://raw.githubusercontent.com/cyborgoat/tech-reservoir/main'
export default function Home() {
    const {data, error, isLoading} = useSWR(`${BLOG_URL_PREFIX}/assets/catalog.json`, fetcher);

    if (error) return "An error has occurred.";

    if (isLoading) return <LoadingCircles/>;

    let blogList = data as BlogInfo[];
    return (
        <div className="grid gap-4 grid-cols-2 w-full">
            <div className="bg-pink-500">Blog Posts</div>
            <div className="bg-green-500">Music Production</div>
            <ScrollShadow className="w-full h-1/2">
                <ul className="list-disc list-inside">
                    {blogList.map((blogInfo, ix) => {
                        return (
                            <li key={ix} className="mt-2">
                                <a href={`${DEV_MODE ? './g-cave/' + location.pathname : ""}/blog/detail?category=${blogInfo.category}&title=${blogInfo.fname.replace('.json', '')}`}
                                   className="hover:text-sky-400 duration-300"
                                >
                                    {blogInfo.title}
                                </a>
                            </li>
                        )

                    })}
                </ul>
            </ScrollShadow>
            <div className="w-1/2 col-span-1">
                <h1>Recent Blogs</h1>
                More contents coming soon...
            </div>
        </div>
    )
}
