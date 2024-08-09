import React from "react";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { CTA } from "@/components/CTA";
import Image from "next/image";
import { Tick } from "@/assets/svgs/TickSvg";

export type ContentWithImageProps =
  SliceComponentProps<Content.ContentWithImageSlice>;

const ContentWithImage = ({ slice }: ContentWithImageProps): JSX.Element => {
  const isImgRight = slice.variation === "imageRight";

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`content-with-image-layout ${isImgRight ? "imgrightvar" : ""}`}
    >
      <div
        className={`content-with-image-text ${isImgRight ? "imgrightvar" : ""}`}
      >
        <h1>{slice.primary.heading}</h1>
        <h2>{slice.primary.sub_heading}</h2>
        <p>{slice.primary.description}</p>
        {isImgRight && (
          <>
            {slice.primary.tick_field.map((item, index) => (
              <div className="content-with-image-tick-field" key={index}>
                <span>
                  <Tick />
                </span>
                <p>{item.tick_description}</p>
              </div>
            ))}
          </>
        )}
        <CTA
          variant={isImgRight ? "secondary" : "primary"}
          field={slice.primary.button_link}
        >
          {slice.primary.button_text}
        </CTA>
      </div>
      <div
        className={`content-with-image-image ${isImgRight ? "imgrightvar" : ""}`}
      >
        <PrismicNextImage
          field={slice.primary.image}
          className="content-with-image-main-img"
        />
        {!isImgRight && (
          <Image
            className="deco-img-over-img"
            src="https://ik.imagekit.io/2ziqnactl/Luvianka/deco-image.png"
            alt="jam image - decoration purposes"
            width={512}
            height={512}
          />
        )}
      </div>
    </section>
  );
};

export default ContentWithImage;
