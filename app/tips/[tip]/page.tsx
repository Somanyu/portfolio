import Navbar from "@/components/Navbar";
import { getSingleTip } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { ThumbsUp } from "lucide-react";
import { Metadata, ResolvingMetadata } from 'next';
import Image from "next/image";


export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const slug = params.tip;
    const tip = await getSingleTip(slug)

    return {
        title: tip.title,
        description: tip.headline
    }
}

type Props = {
    params: { tip: string }
};

export default async function Tip({ params }: Props) {

    const slug = params.tip;
    const tip = await getSingleTip(slug)

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <div className="md:w-1/2 w-4/5 m-auto my-28">
                    <Navbar />
                    <Image src={tip.image} alt={tip.title} width={1920} height={1080} className="mt-10 border-2 border-gray-700 object-cover rounded-xl" />
                    {/* <div className="flex my-10 justify-between">
                        <h1 className="text-3xl font-semibold">{tip.title}</h1>
                    </div> */}
                    <div className="mt-4 prose lg:prose-xl dark:prose-invert"><PortableText value={tip.content} /></div>
                </div>
            </div>
        </>
    )
}