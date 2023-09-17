'use client';
import useSWR from "swr";
import React from "react";
import LoadingCircles from "@components/LoadingCircles";

import {ScrollShadow} from "@nextui-org/react";
import {BlogInfo} from "../types/blog";
import {DEV_MODE} from "./settings";
import * as process from "process";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const BLOG_URL_PREFIX = 'https://raw.githubusercontent.com/cyborgoat/tech-reservoir/main'
export default function Home() {
    const {data, error, isLoading} = useSWR(`${BLOG_URL_PREFIX}/assets/catalog.json`, fetcher);

    if (error) return "An error has occurred.";

    if (isLoading) return <LoadingCircles/>;

    let blogList = data as BlogInfo[];
    const rootPrefix = process.env.NEXT_PUBLIC_ROOT_PREFIX
    const webPrefix = rootPrefix ? rootPrefix + location.pathname : ""
    return (
        <div className="grid gap-x-16 gap-y-4 grid-cols-2 w-full">
            <div className="text-5xl bg-slate-800/30">
                Blog <br/> Posts
            </div>
            <div className="text-5xl bg-indigo-800/30">
                Music <br/> Productions
            </div>
            <ScrollShadow className="w-full h-4/5">
                <ul className="list-disc list-inside">
                    {blogList.map((blogInfo, ix) => {
                        return (
                            <li key={ix} className="mt-2">
                                <a href={`${webPrefix}/blog/detail?category=${blogInfo.category}&title=${blogInfo.fname.replace('.json', '')}`}
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
                Section under construction...
            </div>
        </div>
    )
}
