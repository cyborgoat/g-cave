'use client';
import useSWR from "swr";
import React from "react";
import LoadingCircles from "@components/LoadingCircles";

import {Chip, ScrollShadow} from "@nextui-org/react";
import {BlogInfo} from "../types/blog";
import * as process from "process";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const BLOG_URL_PREFIX = 'https://raw.githubusercontent.com/cyborgoat/tech-reservoir/main'
export default function Home() {
    const {data, error, isLoading} = useSWR(`${BLOG_URL_PREFIX}/assets/catalog.json`, fetcher);

    if (error) return "An error has occurred.";

    if (isLoading) return <LoadingCircles/>;

    let blogList = data as BlogInfo[];
    const rootPrefix = process.env.NEXT_PUBLIC_ROOT_PREFIX
    const webPrefix = rootPrefix ? location.pathname : ""
    return (
        <div className="flex flex-col">
            <div className="flex min-h-[40vh] justify-start">
                <ul className="text-3xl gap-y-4 py-8">
                    <li className="text-zinc-500/50">I am a...</li>
                    <li>Developer</li>
                    <li>Music Producer</li>
                    <li>Cycling Enthusiast</li>
                </ul>
            </div>
            <div className="grid gap-x-16 gap-y-4 grid-cols-2 w-full">
                <div className="group h-3/5">
                    <div className="bg-slate-800/30 falling-head">
                        Blog <br/> Posts
                    </div>
                    <ScrollShadow className="w-full h-4/5 under-head">
                        <ul className="list-disc list-inside">
                            {blogList.map((blogInfo, ix) => {
                                return (
                                    <li key={ix} className="mt-2">
                                        <a href={`${webPrefix}/blog/detail?category=${blogInfo.category}&title=${blogInfo.fname.replace('.json', '')}`}
                                           className="hover:text-zinc-900 duration-300 group/item"
                                        >
                                            {blogInfo.title}
                                            <div
                                                className="ml-2 transition-opacity ease-in-out delay-150 opacity-0 inline-block group-hover/item:opacity-100">
                                                <Chip size="sm">{blogInfo.category}</Chip>
                                            </div>
                                        </a>
                                    </li>
                                )

                            })}
                        </ul>
                    </ScrollShadow>
                </div>
                <div className="group h-3/5">
                    <div className="bg-indigo-800/30  falling-head">
                        Music <br/> Productions
                    </div>
                    <div className="w-1/2 col-span-1 under-head">
                        Section under construction...
                    </div>
                </div>
            </div>
        </div>

    )
}
