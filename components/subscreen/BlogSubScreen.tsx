import {BlogInfo} from "../../types/blog";
import {Chip, ScrollShadow} from "@nextui-org/react";

export default function BlogSubScreen(props: { blogList: BlogInfo[], webPrefix: string }) {
    return (
        <div className="grid grid-cols-3 w-full justify-start items-center">
            <div className="col-span-1">
                <h1 className="font-semibold text-5xl
                bg-gradient-to-r bg-clip-text  text-transparent
                from-indigo-500 via-purple-500 to-indigo-500 animate-text">
                    Fullstack<br/>
                    Developer
                </h1>
            </div>
            <div className="col-span-2 group">
                <ScrollShadow className="w-full h-[50vh] under-head">
                    <ul className="list-disc list-inside">
                        {props.blogList.map((blogInfo, ix) => {
                            return (
                                <li key={ix} className="mt-2">
                                    <a href={`${props.webPrefix}/blog/detail?category=${blogInfo.category}&title=${blogInfo.fname.replace('.json', '')}`}
                                       className="hover:text-slate-50 duration-300 group/item"
                                    >
                                        {blogInfo.title}
                                        <div
                                            className="ml-2 transition-opacity ease-in-out delay-150 opacity-0 inline-block group-hover/item:opacity-100">
                                            <Chip size="sm"
                                                  variant="shadow"
                                                  classNames={{
                                                      base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                                                      content: "drop-shadow shadow-black text-white",
                                                  }}>
                                                {blogInfo.category}
                                            </Chip>
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