import {LabProject} from "types/labproject";
import Link from "next/link";

export default function LabProjectCard({ project }: { project: LabProject }) {
  return (
    <article className="border-b-2 group border-zinc-400/10">
      <Link href={project.href}>
        <img
          alt={project.name}
          src={project.imgUrl}
          width={700}
          height={300}
          className="h-56 w-full rounded-xl object-cover shadow-xl transition 
          grayscale-[70%] group-hover:grayscale-[0%] 
          dark:shadow-gray-700/25"
        />
      </Link>

      <div className="py-4">
        <h3 className="text-lg font-medium cursor-default">
          {project.name}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-zinc-500 line-clamp-3 dark:text-zinc-400 cursor-default">
          {project.description}
        </p>
        <div className="flex flex-wrap items-center mt-4">
          <Link
            href={project.href}
            className="transition duration-300 ease-in-out inline-flex items-center text-sm text-indigo-500 hover:text-indigo-400 hover:scale-110 md:mb-2 lg:mb-0"
          >
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
