import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import GoogleMap from "@/components/Map";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("about_us");

  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />
      <GoogleMap />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("about_us");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
