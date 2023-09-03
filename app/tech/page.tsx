'use client'
import React from "react";
import useSWR from "swr";
import {useSearchParams} from "next/navigation";

const fetcher = (url: string) => fetch(url).then((res) => res.text());

// async function getData(category: string, title: string) {
//
//     const url = `https://raw.githubusercontent.com/cyborgoat/tech-reservoir/main/tech-blog/${category}/${title}.md`;
//
//
//     console.log(url)
//     const res = await fetch(url)
//     // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.
//
//     if (!res.ok) {
//         // This will activate the closest `error.js` Error Boundary
//         throw new Error('Failed to fetch data')
//     }
//
//     return res.text()
// }
//
export default function Page() {

    const searchParams = useSearchParams()

    const category = searchParams.get('category') as string;
    const title = searchParams.get('title') as string;
    const {data, error, isLoading} = useSWR(
        `https://raw.githubusercontent.com/cyborgoat/tech-reservoir/main/tech-blog/${category}/${title}.md`,
        fetcher
    );

    if (error) return "An error has occurred.";
    if (isLoading) return "Loading...";
    return (
        <div className='text-slate-50'>
            {data}
            {/*<h1>{data.name}</h1>*/}
            {/*<p>{data.description}</p>*/}
            {/*<strong>👁 {data.subscribers_count}</strong>{" "}*/}
            {/*<strong>✨ {data.stargazers_count}</strong>{" "}*/}
            {/*<strong>🍴 {data.forks_count}</strong>*/}
        </div>
    );

}