'use client';
import useSWR from "swr";
import React from "react";
import LoadingCircles from "@components/LoadingCircles";
import {BlogInfo} from "../../types/blog";
import {ScrollShadow} from "@nextui-org/react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const BLOG_URL_PREFIX = 'https://raw.githubusercontent.com/cyborgoat/tech-reservoir/main'
export default function BlogHome() {
    const {data, error, isLoading} = useSWR(`${BLOG_URL_PREFIX}/assets/catalog.json`, fetcher);

    if (error) return "An error has occurred.";

    if (isLoading) return <LoadingCircles/>;

    let blogList = data as BlogInfo[];
    return (
        <div className="grid grid-cols-2">
            <div className="col-span-1">
                <ScrollShadow className="w-full h-[400px]">
                    <ul className="list-disc list-inside">
                        {blogList.map((blogInfo, ix) => {
                            return (
                                <li key={ix} className="mt-2">
                                    <a href={`${location.pathname}/detail?category=${blogInfo.category}&title=${blogInfo.fname.replace('.json', '')}`}
                                       className="hover:text-sky-400 duration-300"
                                    >
                                        {blogInfo.title}
                                    </a>
                                </li>
                            )

                        })}
                    </ul>
                </ScrollShadow>
            </div>
            <div className="col-span-1">
                More contents coming soon...
            </div>
        </div>
    )
}