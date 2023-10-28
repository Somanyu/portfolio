import { createClient, groq } from "next-sanity";

export async function getProjects() {
  
    const client = createClient({
    projectId: "k12ecsz2",
    dataset: "production",
    apiVersion: "2023-10-28",
  });

  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`
  )
}