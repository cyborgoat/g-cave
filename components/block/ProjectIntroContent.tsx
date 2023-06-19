import Image from "next/image"

export default function ProjectIntroContent() {
    return (
        <article className="border-b-2 group border-zinc-400/10">
            <Image
                alt="Lava"
                src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                width={700}
                height={300}
                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
            />

            <div className="p-4">
                <a href="#">
                    <h3 className="text-lg font-medium">
                        Project coming soon...
                    </h3>
                </a>

                <p className="mt-2 text-sm leading-relaxed text-zinc-500 line-clamp-3 dark:text-zinc-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                    dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                    sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                    voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                </p>
                <div className="flex flex-wrap items-center mt-4">
                    <a className="inline-flex items-center text-sm text-indigo-500 md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    <span className="inline-flex items-center py-1 pr-3 ml-auto mr-3 text-xs leading-none border-r-2 text-zinc-400 lg:ml-auto md:ml-0 border-zinc-400/75">
                        <svg className="w-3 h-3 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                    </span>
                    <span className="inline-flex items-center text-xs leading-none text-zinc-400">
                        <svg className="w-3 h-3 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                    </span>
                </div>
            </div>
        </article>
    )
}