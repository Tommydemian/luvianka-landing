// "use client";

// import React from "react";
// import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
// import { ChevronDown } from "@/assets/svgs/ChevronDown";
// import { useToggle } from "../hooks/useToggle";
// import { useMediaQuery } from "../hooks/useMediaQuery";
// // types
// import {
//   Content,
//   GroupField,
//   ImageField,
//   LinkField,
//   KeyTextField,
// } from "@prismicio/client";
// import { Simplify } from "../../prismicio-types";

// type Product = {
//   product_image: ImageField;
//   product_name: KeyTextField;
//   product_link: LinkField;
// };

// type DropdownItemProps = {
//   label: KeyTextField;
//   link: LinkField;
//   products:
//     | GroupField<Simplify<Content.NavigationSliceDefaultPrimaryProductsItem>>
//     | Product[];
// };

// const DropdownItem: React.FC<DropdownItemProps> = ({
//   label,
//   link,
//   products,
// }) => {
//   const { state: isOpen, toggle } = useToggle(false);
//   const isDesktop = useMediaQuery("(min-width: 768px)");

//   const isProduct = (item: any): item is Product => {
//     return (
//       "product_image" in item &&
//       "product_name" in item &&
//       "product_link" in item
//     );
//   };

//   if (isDesktop) {
//     return <PrismicNextLink field={link}>{label}</PrismicNextLink>;
//   }

//   return (
//     <div className={`dropdown ${isOpen ? "open" : ""}`}>
//       <button className="dropdown-trigger" onClick={toggle}>
//         <PrismicNextLink field={link}>{label}</PrismicNextLink>
//         <span className="icon">
//           <ChevronDown />
//         </span>
//       </button>
//       {isOpen && (
//         <div className="dropdown-menu">
//           <ul>
//             {products.map(
//               (item, index) =>
//                 isProduct(item) && (
//                   <li key={item.product_name || index}>
//                     <PrismicNextImage field={item.product_image} />
//                     <PrismicNextLink field={item.product_link}>
//                       {item.product_name}
//                     </PrismicNextLink>
//                   </li>
//                 )
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropdownItem;
// components/DropdownItem.tsx
"use client";

import React from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { ChevronDown } from "@/assets/svgs/ChevronDown";
import { useToggle } from "../hooks/useToggle";
import { useMediaQuery } from "../hooks/useMediaQuery";
import {
  Content,
  GroupField,
  ImageField,
  LinkField,
  KeyTextField,
} from "@prismicio/client";
import { Simplify } from "../../prismicio-types";

type Product = {
  product_image: ImageField;
  product_name: KeyTextField;
  product_link: LinkField;
};

type DropdownItemProps = {
  label: KeyTextField;
  link: LinkField;
  products:
    | GroupField<Simplify<Content.NavigationSliceDefaultPrimaryProductsItem>>
    | Product[];
};

const DropdownItem: React.FC<DropdownItemProps> = ({
  label,
  link,
  products,
}) => {
  const { state: isOpen, toggle } = useToggle(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const isProduct = (item: any): item is Product => {
    return (
      "product_image" in item &&
      "product_name" in item &&
      "product_link" in item
    );
  };

  if (isDesktop) {
    return <PrismicNextLink field={link}>{label}</PrismicNextLink>;
  }

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <button className="dropdown-trigger" onClick={toggle}>
        <PrismicNextLink field={link}>{label}</PrismicNextLink>
        <span className="chevron-icon">
          <ChevronDown />
        </span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            {products.map(
              (item, index) =>
                isProduct(item) && (
                  <li key={item.product_name || index}>
                    <PrismicNextImage field={item.product_image} />
                    <PrismicNextLink field={item.product_link}>
                      {item.product_name}
                    </PrismicNextLink>
                  </li>
                )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownItem;
