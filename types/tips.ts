import { PortableTextBlock } from "sanity";

export type Tips = {
  _id: string;
  _createdAt: Date;
  title: string;
  headline: string;
  slug: string;
  image: string;
  content: PortableTextBlock[];
};
