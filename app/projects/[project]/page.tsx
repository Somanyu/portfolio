import Navbar from "@/components/Navbar";
import { getSingleProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { Metadata, ResolvingMetadata } from 'next';
import Image from "next/image";

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const slug = params.project;
    const project = await getSingleProject(slug)

    return {
        title: project.name,
        description: project.headline
    }
}

type Props = {
    params: { project: string }
};

export default async function Project({ params }: Props) {

    const slug = params.project;
    const project = await getSingleProject(slug)

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
            <div className="md:w-1/2 w-4/5 m-auto my-28">
                <Navbar />
                <Image src={project.image} alt={project.name} width={1920} height={1080} className="mt-10 border-2 border-gray-700 object-cover rounded-xl" />
                <div className="flex my-10 justify-between">
                    <h1 className="text-3xl font-semibold">{project.name}</h1>
                    <a className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" href={project.url} target="blank" rel="noopener noreferrer">View project</a>
                </div>
                <div className="prose lg:prose-xl dark:prose-invert"><PortableText value={project.content} /></div>
            </div>
        </div>
    )
}