'use client';
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {oneDark, oneLight} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import {motion, useScroll} from "framer-motion";
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import {useAppContext} from "context/AppContext";
import {BlogDetail} from "types/blog";


export default function MarkdownRender(props: { blog: BlogDetail, content: string }) {
    const { scrollYProgress } = useScroll();

    const { theme } = useAppContext();
    const codeTheme = theme === 'dark' ? oneDark : oneLight
    const date = new Date(props.blog.date).toLocaleDateString()
    return (
        <>
            <article className="max-w-full mb-24 prose-sm prose md-post lg:prose-lg">
                <motion.div
                    className="progress-bar"
                    style={{ scaleX: scrollYProgress }}
                />
                <div className="mt-0 text-sm lg:text-md font-light mb-0 !text-zinc-400 dark:!text-zinc-500">Created on {date} | {props.blog.visits} visits</div>
                <div className="pt-2 mt-2 mb-2 text-xl font-semibold border-t-4 lg:text-2xl text-zinc-800 dark:text-zinc-200 border-zinc-600/30">{props.blog.title}</div>
                <ReactMarkdown
                    remarkPlugins={[remarkMath, remarkGfm]}
                    rehypePlugins={[rehypeKatex, rehypeRaw]}
                    className={`react-mark-down`}
                    components={{
                        code({ node, inline, className, children, ...props }: any) {
                            const match = /language-(\w+)/.exec(className || '');
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    style={codeTheme} // try passing different color schemes, drak, dracula etc.
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
                >
                    {props.content}
                </ReactMarkdown>
            </article>
        </>
    )
}