import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default async function Home() {
  const client = createClient();

  try {
    const page = await client.getSingle("homepage");

    return (
      <main>
        <SliceZone slices={page.data.slices} components={components} />
      </main>
    );
  } catch (error) {
    console.error("Error fetching homepage:", error);
    return <main>Error loading page</main>;
  }
}
