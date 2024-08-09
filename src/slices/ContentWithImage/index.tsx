import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { CTA } from "@/components/CTA";
import Image from "next/image";

/**
 * Props for `ContentWithImage`.
 */
export type ContentWithImageProps =
  SliceComponentProps<Content.ContentWithImageSlice>;

/**
 * Component for "ContentWithImage" Slices.
 */
const ContentWithImage = ({ slice }: ContentWithImageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="content-with-image-layout"
    >
      <div className="content-with-image-text">
        <h1>{slice.primary.heading}</h1>
        <h2>{slice.primary.sub_heading}</h2>
        <p>{slice.primary.description}</p>
        <CTA variant="primary" field={slice.primary.button_link}>
          {slice.primary.button_text}
        </CTA>
      </div>
      <div className="content-with-image-image">
        <PrismicNextImage
          field={slice.primary.image}
          className="content-with-image-main-img"
        />
        <Image
          className="deco-img-over-img"
          src="https://ik.imagekit.io/2ziqnactl/Luvianka/deco-image.png"
          alt="jam image - decoration purpourses"
          width={512}
          height={512}
        />
      </div>
    </section>
  );
};

export default ContentWithImage;
