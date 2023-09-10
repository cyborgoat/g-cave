'use client'
import React from "react";
import useSWR from "swr";
import {useSearchParams} from "next/navigation";
import ReactMarkdown from "react-markdown";
import {oneDark} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import {motion, useScroll} from "framer-motion";
import 'katex/dist/katex.min.css'
import {BlogDetail} from "../../../types/blog"; // `rehype-katex` does not import the CSS for you
import matter from "gray-matter";
import type {Metadata} from 'next'
import MarkdownRender from "../../../components/MarkdownRender";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const BLOG_URL_PREFIX = 'https://raw.githubusercontent.com/cyborgoat/tech-reservoir/main/assets'

export default function Page() {

    const searchParams = useSearchParams()

    const category = searchParams.get('category') as string;
    const title = searchParams.get('title') as string;
    const file_url = `${BLOG_URL_PREFIX}/${category}/${title}.json`
    const {data, error, isLoading} = useSWR(file_url, fetcher);
    if (error) return "An error has occurred.";
    if (isLoading) return "Loading...";

    const blogDetail = data as BlogDetail;
    const {content} = matter(blogDetail.content);
    return (
        <div className='px-24 pt-8'>
            <MarkdownRender blog={blogDetail} content={content}></MarkdownRender>
        </div>

    );

}