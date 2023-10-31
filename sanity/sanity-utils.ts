import { Profile } from "@/types/profile";
import { Project } from "@/types/project";
import { Tips } from "@/types/tips";
import { Works } from "@/types/work";
import { createClient, groq } from "next-sanity";
import config from "./client-config";

export async function getProjects(): Promise<Project[]> {
  return createClient(config).fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content,
        headline,
        tags
    }`
  );
}

export async function getSingleProject(slug: string): Promise<Project> {
  return createClient(config).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content,
        headline
    }`,
    { slug }
  );
}

export async function getProfile(): Promise<Profile> {
  return createClient(config).fetch(
    groq`*[_type == "profile"][0]{
      _id,
      _createdAt,
      fullName,
      headline,
      profileImage,
      bio,
      email,
      resume,
      github,
      linkedin,
      stackoverflow,
      discord
    }`
  );
}

export async function getWorks(): Promise<Works[]> {
  return createClient(config).fetch(
    groq`*[_type == "work"]| order(_createdAt desc){
      _id,
      _createdAt,
      role,
      company,
      start,
      end,
      content
    }`
  );
}

export async function getTips(): Promise<Tips[]> {
  return createClient(config).fetch(
    groq`*[_type == "tips"]{
      _id,
      _createdAt,
      title,
      headline,
      "slug": slug.current,
    }`
  );
}

export async function getSingleTip(slug: string): Promise<Tips> {
  return createClient(config).fetch(
    groq`*[_type == "tips" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      headline,
      "slug": slug.current,
      "image": image.asset->url,
      content
    }`,
    { slug }
  );
}
