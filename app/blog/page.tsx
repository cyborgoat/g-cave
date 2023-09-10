'use client';
import useSWR from "swr";
import React from "react";
import LoadingCircles from "@components/LoadingCircles";
import {BlogInfo} from "../../types/blog";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const BLOG_URL_PREFIX = 'https://raw.githubusercontent.com/cyborgoat/tech-reservoir/main'
export default function BlogHome() {
    const {data, error, isLoading} = useSWR(`${BLOG_URL_PREFIX}/assets/catalog.json`, fetcher);

    if (error) return "An error has occurred.";

    if (isLoading) return <LoadingCircles/>;

    let blogList = data as BlogInfo[];
    return (
        <div>
            <ul>
                {blogList.map((blogInfo, ix) => {
                    return (
                        <li key={ix}>
                            <a href={`${location.pathname}/detail?category=${blogInfo.category}&title=${blogInfo.fname.replace('.json', '')}`}>
                                {blogInfo.title}</a>
                        </li>
                    )

                })}
            </ul>


        </div>
    )
}