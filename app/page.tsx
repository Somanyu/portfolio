import { ModeToggle } from "@/components/theme-toggle";
import { getProfile } from "@/sanity/sanity-utils";
import Image from "next/image";


export default async function Home() {

  // const projects = await getProjects();
  const profile = await getProfile();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">

      <div className="mt-8 mb-1 flex flex-wrap gap-x-6 gap-y-0 justify-center">
        <div className="m md:w-full pr-4 pl-4 flex md:flex justify-center items-center lg:justify-center lg:items-center md:justify-center md:items-center">
          <div className="inline-block bg-[#FEFEFE] rounded-full border-4 border-solid border-sky-500" style={{ boxShadow: "inset 0px -12px 13px #99badd" }}>
            <Image className="max-w-full h-auto" src={profile.profileImage} width={110} height={110} priority={false} alt="logo" />
          </div>
        </div>
      </div>
      <ModeToggle />
      {/* {projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id}>
          <p>{project.name}</p>
          <Image src={project.image} alt={project.name} width={300} height={300} />
        </Link>
      ))} */}
    </div>
  )
}
