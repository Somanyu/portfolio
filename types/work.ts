import { PortableTextBlock } from "sanity";

export type Works = {
  _id: string;
  _createdAt: Date;
  role: string;
  company: string;
  start: string;
  end: string;
  content: PortableTextBlock[];
};
