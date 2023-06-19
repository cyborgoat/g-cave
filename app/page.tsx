import Image from "next/image";
import Link from "next/link";
import GGrid from "../components/gadgets/GGrid";
import GitHubIcon from "../components/icon/GitHubIcon";
import LinkedInIcon from "../components/icon/LinkedInIcon";

export default function Home() {
    return (
        <div className="grid grid-cols-1 gap-6 px-0 pt-16 pb-24 lg:grid-cols-3 lg:pb-24">
            <div className="col-span-1 lg:col-span-2">
                <div className="flex flex-row align-baseline items-stretch">
                    <div className="w-1/6 mr-4"><GGrid/></div>
                    <div className="flex flex-col border-l-2 border-sky-500 pl-4 pt-2">
                        <div className="text-xl font-bold lg:text-3xl">郭峻逍</div>
                        <div className="text-xl font-bold lg:text-3xl">Junxiao Guo</div>
                    </div>
                </div>
                <p className="py-4 text-sm lg:text-md text-zinc-400 dark:text-zinc-500">
                    Deep Learning & Machine Learning engineer and full stack enthusiast.
                </p>
                <div className="flex gap-2">
                    <div
                        className="px-2 py-1 transition duration-300 ease-in-out border-2 rounded-md text-zinc-900/75 dark:text-zinc-200/75 border-zinc-900/30 dark:border-zinc-200/30 hover:border-zinc-900 dark:hover:border-zinc-200">
                        <Link href="https://github.com/cyborgoat">
                            <GitHubIcon/>
                            <span className="hidden ml-2 text-sm lg:inline-block xl:text-md">
                  GitHub Profile
                </span>
                        </Link>
                    </div>
                    <div
                        className="px-2 py-1 transition duration-300 ease-in-out border-2 rounded-md text-zinc-900/75 dark:text-zinc-200/75 border-zinc-900/30 dark:border-zinc-200/30 hover:border-zinc-900 dark:hover:border-zinc-200">
                        <Link href="https://www.linkedin.com/in/junxiaog/">
                            <LinkedInIcon/>
                            <span className="hidden ml-2 text-s lg:inline-block xl:text-md">
                  LinkedIn Profile
                </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={`hidden mx-auto lg:block lg:col-span-1c`}>
                <div
                    className="transition relative max-w-xs overflow-hidden bg-no-repeat bg-cover hover:scale-105 hover:rotate-45 duration-500">
                    <img
                        alt="me"
                        className="rounded-full"
                        src="https://raw.githubusercontent.com/cyborgoat/cyborgoat/main/assets/images/me.png"
                        width="256"
                        height="256"
                    />
                    <div
                        className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition duration-300 ease-in-out rounded-full opacity-0 bg-gradient-to-r from-indigo-500 via-orange-600 to-indigo-500 hover:opacity-20"></div>
                </div>
            </div>
            <div className="lg:col-span-3">
                <h2 className="text-lg font-semibold xl:text-3xl">Recent Posts</h2>
            </div>
        </div>
    );
}
