import { createClient } from "../prismicio";
import { ClientDropdown } from "./ClientDropdown";

async function getCategories() {
  const client = createClient();
  try {
    const data = await client.getAllByType("product_category");
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting categories");
  }
}

export async function ServerDropdown() {
  const categories = await getCategories();

  const simplifiedCategories = categories.map((category) => ({
    id: category.id,
    uid: category.uid,
    title: category.data.product_category_title,
  }));

  if (!categories) {
    return null;
  }

  return <ClientDropdown productCategories={simplifiedCategories} />;
}
