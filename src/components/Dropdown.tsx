import React from "react";
import { createClient } from "../prismicio";
import { DropdownOffChevronIcon } from "@/components/Icons/DropdownOffChevron";

async function getCategories() {
  const client = createClient();
  try {
    const data = client.getAllByType("product_category");
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting categories");
  }
}

export const Dropdown = async () => {
  const categories = await getCategories();

  if (!categories) {
    return null;
  }

  return (
    <>
      <div className="dropdown relative">
        <span>
          Select a category
          <DropdownOffChevronIcon />
        </span>
        <div className="dropdown-menu absolute">
          <ul role="list">
            {categories.map((category) => (
              <li key={category.id}>{category.data.product_category_title}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
