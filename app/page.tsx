import GithubCommits from "@/components/GithubCommits";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProfile, getTips } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { FaBootstrap, FaDiscord, FaLaravel, FaLinkedinIn, FaLinux, FaPython, FaReact, FaStackOverflow } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { RxExternalLink } from 'react-icons/rx';
import { SiChakraui, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

export default async function Home() {

  const profile = await getProfile();
  const tips = await getTips();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">

      <div className="mt-8 mb-1 flex flex-wrap gap-x-6 gap-y-0 justify-center">
        <div className="m md:w-full pr-4 pl-4 flex md:flex justify-center items-center lg:justify-center lg:items-center md:justify-center md:items-center">
          <div className="inline-block bg-[#FEFEFE] rounded-full border-4 border-solid border-sky-500" style={{ boxShadow: "inset 0px -12px 13px #99badd" }}>
            <Image className="max-w-full h-auto" src={profile.profileImage} width={110} height={110} priority={false} alt="profile" />
          </div>
        </div>
      </div>

      <div className="flex mb-8 flex-wrap gap-x-6 gap-y-0 justify-center">
        <div className="md:w-full pr-4 pl-4">
          <div className="" style={{ textAlign: "center" }}>
            <h3 className="text-3xl mb-1 mt-1 font-semibold text-slate-600 dark:text-slate-100">hey, I&apos;m {profile.fullName}</h3>
            <p className="text-sm dark:text-slate-300 text-slate-500">{profile.headline}</p>
          </div>
          <div className="text-gray-400 text-2xl mt-7" style={{ textAlign: "center" }}>
            <div className="flex w-[60%] md:w-1/5 m-auto gap-2 justify-evenly">
              <a className="group" href={profile.linkedin} target="blank" rel="noopener noreferrer">
                <Button className="text-[#0072B1] dark:border-input border-neutral-500" variant="outline" size="icon">
                  <FaLinkedinIn className="scale-125" />
                </Button>
              </a>
              <a className="group" href={profile.github} target="blank" rel="noopener noreferrer">
                <Button className="dark:text-slate-200 text-slate-800 dark:border-input border-neutral-500" variant="outline" size="icon">
                  <FiGithub className="scale-125" />
                </Button>
              </a>
              <a className="group" href={profile.stackoverflow} target="blank" rel="noopener noreferrer">
                <Button className="text-[#F58025] dark:border-input border-neutral-500" variant="outline" size="icon">
                  <FaStackOverflow className="scale-125" />
                </Button>
              </a>
              <a className="group" href={profile.discord} target="blank" rel="noopener noreferrer">
                <Button className="text-[#5865F2] dark:border-input border-neutral-500" variant="outline" size="icon">
                  <FaDiscord className="scale-125" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 w-4/5 m-auto my-28">
        <div className="space-y-1">
          <h4 className="text-xl font-medium leading-none">About me</h4>
          <p className="text-sm text-muted-foreground">
            Life&apos;s a joke, laugh every day!
          </p>
        </div>
        <Separator className="my-4 dark:bg-border bg-gray-300" />
        <PortableText value={profile.bio} />
        <div className="mt-10 text-sm grid grid-cols-4 md:flex md:space-x-4 md:w-full md:items-center gap-3 w-3/4">
          <Button className="dark:border-input border-neutral-500" variant="outline" size="icon">
            <FaPython className="h-5 w-5 text-yellow-400" />
          </Button>
          <Button className="dark:border-input border-neutral-500" variant="outline" size="icon">
            <FaReact className="h-5 w-5 text-sky-500" />
          </Button>
          <Button className="dark:border-input border-neutral-500" variant="outline" size="icon">
            <SiNextdotjs className="h-5 w-5" />
          </Button>
          <Button className="dark:border-input border-neutral-500" variant="outline" size="icon">
            <FaLaravel className="h-5 w-5 text-pink-600" />
          </Button>
          <Button className="dark:border-input border-neutral-500" variant="outline" size="icon">
            <FaBootstrap className="h-5 w-5 text-violet-600" />
          </Button>
          <Button className="dark:border-input border-neutral-500" variant="outline" size="icon">
            <SiTailwindcss className="h-5 w-5 text-cyan-500" />
          </Button>
          <Button className="dark:border-input border-neutral-500" variant="outline" size="icon">
            <SiChakraui className="h-5 w-5 text-cyan-500" />
          </Button>
          <Button className="dark:border-input border-neutral-500" variant="outline" size="icon">
            <FaLinux className="h-5 w-5 text-yellow-300" />
          </Button>
        </div>
      </div>

      <div className="md:w-1/2 w-4/5 m-auto my-28">
        <p>
          My projects are like my collection of socks – a colorful mishmash
          that keeps me on my toes! I&apos;ve dabbled in coding, painting,
          and even attempted to build a rocket-powered toaster (don&apos;t ask).
          Learning is my jam, from unraveling the mysteries of Python to deciphering
          the art of potato chip folding. Life&apos;s a hilarious classroom,
          and I&apos;m the eager student, taking absurdity to the next level! 🚀🎨🤖
        </p>

        {/* dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-gray-900 dark:via-gray-900 dark:to-black bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#b0b0b0] via-[#efeff0] to-[#efeff0] */}

        <div className="grid md:grid-cols-2 md:grid-rows-2 gap-y-2 gap-x-3 mt-8 ">

          <GithubCommits />

          <div className="md:row-start-1 md:col-start-2 md:row-end-2 md:col-end-3">
            <Link className="group" href={'/project'}>
              <Card className="dark:bg-zinc-900 bg-inherit dark:group-hover:bg-zinc-800 backdrop-blur-2xl border-slate-400 dark:border-input">
                <CardHeader className="">
                  <CardTitle className="flex gap-3">
                    my precious works
                    <RxExternalLink className="block md:hidden md:group-hover:block" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-800 text-base dark:text-slate-200">
                    develop, build projects based on what I learn throughout.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="md:row-start-2 md:col-start-2 md:row-end-3 md:col-end-3">
            <Link className="group" href={'/work'}>
              <Card className="dark:bg-zinc-900 bg-inherit dark:group-hover:bg-zinc-800 backdrop-blur-2xl border-slate-400 dark:border-input">
                <CardHeader className="">
                  <CardTitle className="flex gap-3">
                    corporate timeline
                    <RxExternalLink className="block md:hidden md:group-hover:block" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-800 dark:text-slate-200">
                    my time period at the corporate world, a.k.a. my experience.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>

        </div>
      </div>

      <div className="md:w-1/2 w-4/5 m-auto my-28">
        <div className="space-y-1">
          <h4 className="text-xl font-medium leading-none">Tech tips</h4>
          <p className="text-sm text-muted-foreground">
            Ctrl+Alt+Delete your worries away!
          </p>
        </div>

        <ul className="mt-4 space-y-2">
          {tips.slice(0, 3).map((tip) => (
            <li key={tip._id}>
              <Link href={`/tips/${tip.slug}`} className="group">
                <Card className="dark:bg-zinc-900 bg-inherit dark:group-hover:bg-zinc-800 backdrop-blur-2xl border-slate-400 dark:border-input">
                  <CardHeader className="pt-4 pb-2">
                    <CardTitle className="flex gap-3">
                      {tip.title}
                      <RxExternalLink className="block md:hidden md:group-hover:block" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-3 pt-0">
                    <CardDescription>
                      {tip.headline}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
        <Link href={'/tip'}>
          <Button variant="link">See more</Button>
        </Link>
      </div>
    </div>
  )
}
