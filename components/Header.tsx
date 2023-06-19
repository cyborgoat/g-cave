"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import ColorModToggle from "./ColorModeToggle";

type NavItem = { name: string; route: string };

const navItems: NavItem[] = [
  { name: "home", route: "/" },
  { name: "blog", route: "/blog" },
  { name: "lab", route: "/lab" },
  { name: "about", route: "/about" },
];

export default function Header() {
  var pathName = usePathname();
  function isActive(curItem: NavItem) {
    if (curItem.route == pathName) return true;
    return pathName?.startsWith(curItem.route) && curItem.route.length > 1;
  }

  return (
    <div className="p-0 navbar">
      <div className="flex-1 lg:flex">
        <ul className="flex gap-3 row">
          <li>
            <Link href="#" className="gradient-text">
              Junxiao Guo
            </Link>
          </li>
          {navItems.map((item, itemIdx) => {
            return (
              <li key={itemIdx}>
                <Link
                  className={`transition ease-in-out duration-500 px-0 capitalize ${
                    isActive(item)
                      ? "font-bold underline underline-offset-8 decoration-2 decoration-amber-700 dark:decoration-amber-600"
                      : "text-zinc-500"
                  } hover:text-zinc-900 hover:dark:text-zinc-200`}
                  href={`${item.route}`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <ColorModToggle />
      </div>
    </div>
  );
}
