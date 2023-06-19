import Link from "next/link";
import {BlogInfo} from "../../types/blog";

const BlogIntroContent = (props: { blogInfo: BlogInfo }) => {

    const blogInfo = props.blogInfo;

    return (
        <article>
            <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-xs dark:text-gray-400">
                    <time dateTime={blogInfo.date}>{blogInfo.date}</time>
                </dd>
            </dl>
            <div className="space-y-1">
                <h3 className="transition duration-300 text-2xl font-semibold tracking-tight hover:text-sky-600">
                    <Link rel="noopener noreferrer" href={`/blog/detail/${blogInfo.id}`} >{blogInfo.title}</Link>
                </h3>
                <p className="max-w-full">{blogInfo.summary}</p>
                <div className="flex flex-wrap space-x-3">
                    {blogInfo.tags.map((tag, tagIdx) => <Link key={tagIdx} className="text-xs dark:text-indigo-500" href={`blog/tag/${tag.name}`}>#{tag.name}</Link>)}
                </div>
            </div>
        </article>
    )

}
export default BlogIntroContent;