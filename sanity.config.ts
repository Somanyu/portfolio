import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "k12ecsz2",
  dataset: "production",
  title: "portfolio",
  apiVersion: "2023-10-28",
  basePath: "/studio",

  plugins: [deskTool(), visionTool()],

  schema: { types: schemas },
});

export default config;
