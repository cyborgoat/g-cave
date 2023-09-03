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
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you

const fetcher = (url: string) => fetch(url).then((res) => res.text());
const BLOG_URL_PREFIX = 'https://raw.githubusercontent.com/cyborgoat/tech-reservoir/main/tech-blog'

export default function Page() {

    const searchParams = useSearchParams()
    const {scrollYProgress} = useScroll();

    const category = searchParams.get('category') as string;
    const title = searchParams.get('title') as string;
    const {data, error, isLoading} = useSWR(`${BLOG_URL_PREFIX}/${category}/${title}.md`, fetcher);

    if (error) return "An error has occurred.";
    if (isLoading) return "Loading...";
    return (
        <div className='text-slate-50 px-24 pt-8'>
            <article className="max-w-full mb-24 prose-sm prose md-post lg:prose-lg">
                <motion.div
                    className="progress-bar"
                    style={{scaleX: scrollYProgress}}
                />
                <ReactMarkdown
                    children={data as string}
                    remarkPlugins={[remarkMath, remarkGfm]}
                    rehypePlugins={[rehypeKatex, rehypeRaw]}
                    className={`react-mark-down`}
                    components={{
                        code({node, inline, className, children, ...props}: any) {
                            const match = /language-(\w+)/.exec(className || '');
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    style={oneDark} // try passing different color schemes, drak, dracula etc.
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                >
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            ) : (
                                <code>{children}</code>
                            );
                        },
                    }}
                />
            </article>
        </div>

    );

}