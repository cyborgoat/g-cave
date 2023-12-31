'use client';
import useSWR from "swr";
import React from "react";
import LoadingCircles from "@components/LoadingCircles";

import {BlogInfo} from "../types/blog";
import * as process from "process";
import PersonalIntro from "@components/subscreen/PersonalIntro";
import BlogSubScreen from "@components/subscreen/BlogSubScreen";
import ChevronDown from "@components/icon/CheveronDown";
import MusicSubScreen from "@components/subscreen/MusicSubScreen";
import CyclingSubScreen from "@components/subscreen/CyclingSubScreen";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const BLOG_URL_PREFIX = 'https://raw.githubusercontent.com/cyborgoat/tech-reservoir/main'
export default function Home() {
    const {data, error, isLoading} = useSWR(`${BLOG_URL_PREFIX}/assets/catalog.json`, fetcher);

    if (error) return (
        <div className="flex w-screen h-screen">
            <div className="mx-auto my-auto">
                An error has occurred... <br/>
                Please try again later! xD
            </div>
        </div>

    );

    if (isLoading) return (
        <div className="flex w-screen h-screen">
            <div className="mx-auto my-auto">
                <LoadingCircles/>
            </div>
        </div>

    );

    let blogList = data as BlogInfo[];
    const rootPrefix = process.env.NEXT_PUBLIC_ROOT_PREFIX
    const webPrefix = rootPrefix ? location.pathname : ""
    return (
        // <div className="flex flex-col">
        <main className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">

            <section id="personal-info" className="flex flex-col items-center snap-start mx-12 lg:mx-24">
                <div className="flex items-center h-[85vh]"><PersonalIntro/></div>
                <div className="mx-auto h-[10vh]"><a href="#developer"> <ChevronDown/> </a></div>
            </section>

            <section id="developer" className="flex flex-col snap-start mx-12 lg:mx-24">
                <div className="flex h-[85vh] items-center"><BlogSubScreen blogList={blogList} webPrefix={webPrefix}/>
                </div>
                <div className="mx-auto h-[10vh]"><a href="#music-producer"> <ChevronDown/> </a></div>
            </section>

            <section id="music-producer" className="flex flex-col snap-start mx-12 lg:mx-24">
                <div className="flex items-center h-[85vh]"><MusicSubScreen/></div>
                <div className="mx-auto h-[10vh]"><a href="#cycling-fan"> <ChevronDown/> </a></div>
            </section>

            <section id="cycling-fan" className="flex flex-col snap-start mx-12 lg:mx-24">
                <div className="flex items-center h-[85vh]"><CyclingSubScreen/></div>
                <div className="mx-auto h-[10vh]"><a href="#cycling-fan"> <ChevronDown/> </a></div>
            </section>

        </main>
    )
}
