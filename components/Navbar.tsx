import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex mb-20 flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
            <div className="flex flex-row space-x-0 pr-10">
                <Link href={'/project'} className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle">
                    <span className="relative py-1 px-2">
                        projects
                    </span>
                </Link>
                <Link href={'/work'} className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle">
                    <span className="relative py-1 px-2">
                        work
                    </span>
                </Link>
                <Link href={'/tip'} className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle">
                    <span className="relative py-1 px-2">
                        tech tips
                    </span>
                </Link>
            </div>
        </nav>
    )
}