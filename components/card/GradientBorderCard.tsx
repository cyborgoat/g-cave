'use client';
import Link from "next/link";
import {BlogInfo} from "types/blog";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1.0 } },
  hidden: { opacity: 0, scale: 0 },
};

export default function GradientBorderCard({
  blogIntro,
}: {
  blogIntro: BlogInfo;
}) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <article className="gradient-block transition ease-in-out duration-500 hover:scale-105 hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
        <Link rel="noopener noreferrer" href={`/blog/detail/${blogIntro.id}`}>
          <div className="relative md:h-64 p-4 pb-11 lg:pb-6 rounded-[10px] bg-white  dark:bg-gray-900 ">
            <time
              dateTime={blogIntro.date}
              className="block text-xs text-gray-500 dark:text-gray-400"
            >
              {blogIntro.date}
            </time>
            <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
              {blogIntro.title}
            </h3>
            <span className="text-sm text-zinc-500">{blogIntro.summary}</span>
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-1 mb-4 ml-4">
              {blogIntro.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </article>
    </motion.div>
  );
}
