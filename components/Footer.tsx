import Link from "next/link";
import GitHubIcon from "./icon/GitHubIcon";
import LinkedInIcon from "./icon/LinkedInIcon";

export default function Footer() {
  return (
    <footer className="p-10 footer bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900">
      <div>
        <p className="text-slate-400">
          G Island
          <br />
          <span>Written with ❤️ by </span>
          <span className="gradient-text">Junxiao Guo</span>
        </p>
        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
          &copy; 2020-present Junxiao Guo. All Rights Reserved.
        </p>
      </div>
      <div>
        <span className="footer-title text-slate-300 hover:text-white">
          Profile
        </span>
        <div className="grid grid-flow-col gap-4">
          <Link href="https://github.com/cyborgoat">
            <GitHubIcon />
          </Link>
          <Link href="https://www.linkedin.com/in/junxiaog/">
            <LinkedInIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
}
