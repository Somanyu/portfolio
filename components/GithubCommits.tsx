import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { use } from 'react';
import { RxExternalLink } from 'react-icons/rx';

// const fetcher = (url: any) => fetch(url).then((res) => res.json());
// const fetcher = (...args) => fetch(...args).then((res) => res.json())

const getData = async () => {
    const data = await fetch('https://api.github.com/users/somanyu/repos')
    const repos = await data.json();

    return repos;
}

export default function GithubCommits() {
    const tags = Array.from({ length: 25 }).map(
        (_, i, a) => `v1.2.0-beta.${a.length - i}`
    )

    const repos = use(getData());

    return (
        <div className="md:row-start-1 md:col-start-1 md:row-end-3 md:col-end-2">
            <ScrollArea className="rounded-md h-[19rem] dark:bg-zinc-900 border bg-inherit backdrop-blur-2xl border-slate-400 dark:border-input">
                <div className="p-4">
                    <h4 className="mb-4 text-2xl font-semibold leading-none flex gap-2">Github commits</h4>
                    {repos.map((repo: any) => (
                        <a target="_blank" rel="noopener noreferrer" href={repo.html_url} className="group" key={repo}>
                            <div className="text-sm flex gap-3">
                                {repo.full_name} <RxExternalLink className="hidden group-hover:block" />
                            </div>
                            <Separator className="my-2 dark:bg-border bg-gray-300" />
                        </a>
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}