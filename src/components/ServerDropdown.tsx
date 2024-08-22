import { ClientDropdown } from "./ClientDropdown";
import { Content } from "@prismicio/client";

type ServerDropdownProps = {
  categories: Content.ProductCategoryDocument[];
};

export const ServerDropdown: React.FC<ServerDropdownProps> = ({
  categories,
}) => {
  return <ClientDropdown categories={categories} />;
};
