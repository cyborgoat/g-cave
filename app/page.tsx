'use client';
import useSWR from "swr";
import React from "react";
import LoadingCircles from "@components/LoadingCircles";

import {BlogInfo} from "../types/blog";
import * as process from "process";
import PersonalIntro from "@components/subscreen/PersonalIntro";
import BlogSubScreen from "@components/subscreen/BlogSubScreen";

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
        // <div className="flex flex-col">
        <main className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
            <section className="flex items-center snap-start h-[95vh] mx-12 lg:mx-24">
                <PersonalIntro/>
            </section>
            <section className="flex items-center snap-start h-[95vh] mx-12 lg:mx-24">
                <BlogSubScreen blogList={blogList} webPrefix={webPrefix}/>
            </section>
            <section className="flex items-center snap-start h-[95vh] mx-12 lg:mx-24">
                <h1>Music Producer</h1>
            </section>
            <section className="flex items-center snap-start h-[95vh] mx-12 lg:mx-24">
                <h1>Cycling Fan</h1>
            </section>
        </main>
    )
}
