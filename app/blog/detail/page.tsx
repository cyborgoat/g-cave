'use client'
import React from "react";
import useSWR from "swr";
import {useSearchParams} from "next/navigation";
import 'katex/dist/katex.min.css'
import matter from "gray-matter";
import MarkdownRender from "@components/MarkdownRender";
import LoadingCircles from "@components/LoadingCircles";
import {BlogDetail} from "../../../types/blog";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const BLOG_URL_PREFIX = 'https://raw.githubusercontent.com/cyborgoat/tech-reservoir/main/assets'

export default function Page() {

    const searchParams = useSearchParams()

    const category = searchParams.get('category') as string;
    const title = searchParams.get('title') as string;
    const file_url = `${BLOG_URL_PREFIX}/${category}/${title}.json`
    const {data, error, isLoading} = useSWR(file_url, fetcher);
    if (error) return "An error has occurred.";

    if (isLoading) return <LoadingCircles/>;

    const blogDetail = data as BlogDetail;
    const {content} = matter(blogDetail.content);
    return (
        <div className='px-24 pt-8'>
            <MarkdownRender blog={blogDetail} content={content}></MarkdownRender>
        </div>

    );

}