import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";

import { components } from "@/slices";
import { ServerDropdown } from "@/components/ServerDropdown";
import { ProductCardGrid } from "@/components/ProductCardGrid";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("product_page", params.uid)
    .catch(() => notFound());

  const categories = await client.getAllByType("product_category");

  var selectedCategory = categories.find((c) => c.uid === params.uid);
  var products = selectedCategory?.data.category_products;

  if (!selectedCategory) {
    notFound();
  }

  return (
    <section className="container--lg">
      <h1 className="choose-category-heading">Selecciona categoria</h1>
      <section className="pp-layout">
        <ServerDropdown categories={categories} activeUid={params.uid} />
        <ProductCardGrid products={products} />
      </section>
      {page.data.slices && page.data.slices.length > 0 ? (
        <SliceZone slices={page.data.slices} components={components} />
      ) : (
        ""
        // <p>No content has been created for this product yet.</p>
      )}
    </section>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const category = await client
    .getByUID("product_category", params.uid)
    .catch(() => null);

  if (!category) {
    return {
      title: "Categoría no encontrada",
      description: "La categoría solicitada no existe",
    };
  }

  const title =
    category.data.product_category_title || "Categoría de Productos";
  let description = "Explora nuestra selección de productos";

  if (
    category.data.product_category_description &&
    category.data.product_category_description.length > 0
  ) {
    const firstParagraph = category.data.product_category_description[0];
    if ("text" in firstParagraph!) {
      description = firstParagraph.text;
    }
  }

  if (!description) {
    description = `Explora nuestra selección de productos en la categoría ${title}`;
  }

  return {
    title: `${title} | Tu Tienda`,
    description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const categories = await client.getAllByType("product_category");

  return categories.map((category) => {
    return { uid: category.uid };
  });
}
