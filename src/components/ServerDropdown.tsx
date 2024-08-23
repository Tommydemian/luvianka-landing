import { ClientDropdown } from "./ClientDropdown";
import { Content } from "@prismicio/client";

type ServerDropdownProps = {
  categories: Content.ProductCategoryDocument[];
  activeUid: string;
};

export const ServerDropdown: React.FC<ServerDropdownProps> = ({
  categories,
  activeUid,
}) => {
  return <ClientDropdown categories={categories} activeUid={activeUid} />;
};
