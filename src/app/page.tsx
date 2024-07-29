import { Metadata } from "next";
// import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
// import { components } from "@/slices";

import Image from "next/image";
import styles from "./page.module.css";

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
    const homePage = await client.getSingle("homepage");
    console.log(homePage);
    return <main className={styles.main}>{homePage.data.title}</main>;
  } catch (error) {
    console.error("Error fetching homepage:", error);
    return <main className={styles.main}>Error loading page</main>;
  }
}
