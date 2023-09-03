import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar bg-amber-800/70 rounded-xl w-11/12 mx-auto text-slate-50 mt-2">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Junxiao Guo</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Sports</a></li>
                    <li>
                        <details>
                            <summary>
                                Music
                            </summary>
                            <ul className="p-2 bg-slate-400">
                                <li><a>My Favorites</a></li>
                                <li><a>My Productions</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>
                                Tech
                            </summary>
                            <ul className="p-2 bg-slate-400">
                                <li><Link href={"/blog"}>AI</Link></li>
                                <li><a>Backend Dev</a></li>
                                <li><a>Frontend Dev</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}