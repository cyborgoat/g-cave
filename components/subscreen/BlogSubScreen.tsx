import {BlogInfo} from "../../types/blog";
import {Chip, ScrollShadow} from "@nextui-org/react";

export default function BlogSubScreen(props: { blogList: BlogInfo[], webPrefix: string }) {
    return (
        <div className="grid grid-cols-3 w-screen justify-start items-center">
            <div className="col-span-1">
                <h1 className="font-semibold text-5xl">
                    Developer
                </h1>
            </div>
            <div className="col-span-2">
                <ScrollShadow className="w-full h-[50vh] under-head">
                    <ul className="list-disc list-inside">
                        {props.blogList.map((blogInfo, ix) => {
                            return (
                                <li key={ix} className="mt-2">
                                    <a href={`${props.webPrefix}/blog/detail?category=${blogInfo.category}&title=${blogInfo.fname.replace('.json', '')}`}
                                       className="hover:text-zinc-900 duration-300 group/item"
                                    >
                                        {blogInfo.title}
                                        <div
                                            className="ml-2 transition-opacity ease-in-out delay-150 opacity-0 inline-block group-hover/item:opacity-100">
                                            <Chip size="sm">{blogInfo.category}</Chip>
                                        </div>
                                    </a>
                                </li>
                            )

                        })}
                    </ul>
                </ScrollShadow>
            </div>
        </div>
    )
}