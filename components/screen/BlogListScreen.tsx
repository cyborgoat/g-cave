"use client";
import {useState} from "react";
import {BlogInfo} from "../../types/blog";
import BlogIntroContent from "../block/BlogIntroContent";
import Link from "next/link";
import {PAGINATION_CHUNKSIZE} from "settings";

export default function BlogListScreen({
  bList,
  tag,
}: {
  bList: BlogInfo[];
  tag: string | undefined;
}) {
  const fullList = Array.isArray(bList) ? bList : [];
  const [curPage, setCurPage] = useState(1);
  const [curContents, setCurContents] = useState(
    fullList.slice(0, curPage * PAGINATION_CHUNKSIZE)
  );

  const pageOnChange = (e: React.MouseEvent<HTMLElement>, page: number) => {
    e.preventDefault();
    setCurPage(page);
    setCurContents(
      fullList.slice(
        (page - 1) * PAGINATION_CHUNKSIZE,
        page * PAGINATION_CHUNKSIZE
      )
    );
  };

  return (
    <>
      <div className="flex flex-col mx-auto space-y-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold dark:text-gray-50">
            <Link href={"/blog"}>
              <span className="underline decoration-4 decoration-sky-500">
                Blog
              </span>
            </Link>
            {tag != undefined ? (
              <span className="ml-1 text-base text-indigo-500">
                #{`${tag}`}
              </span>
            ) : (
              ""
            )}
          </h2>
          <ul className="space-y-8 xl:space-y-10">
            {curContents.map((content, contentIdx) => (
              <BlogIntroContent key={contentIdx} blogInfo={content} />
            ))}
          </ul>
        </div>
      </div>
      <div className="flex mt-12 justify-left">
        <div className="btn-group">
          {Array.from({
            length: Math.ceil(bList.length / PAGINATION_CHUNKSIZE),
          }).map((page, idx) => (
            <button
              key={idx}
              onClick={(e) => pageOnChange(e, idx + 1)}
              className={`btn btn-sm ${idx + 1 == curPage ? "btn-active" : ""}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
