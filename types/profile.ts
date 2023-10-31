import { PortableTextBlock } from "sanity";

export type Profile = {
  _id: string;
  _createdAt: Date;
  fullName: string;
  headline: string;
  profileImage: string;
  email: string;
  bio: PortableTextBlock[];
  resume: string;
  github: string;
  linkedin: string;
  stackoverflow: string;
  discord: string;
};
