export default function Navbar() {
    return (
        <div className="navbar bg-slate-400/30 rounded-xl w-11/12 mx-auto text-slate-50 mt-2">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Junxiao Guo</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Link</a></li>
                    <li>
                        <details>
                            <summary>
                                Blog
                            </summary>
                            <ul className="p-2 bg-slate-400">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}