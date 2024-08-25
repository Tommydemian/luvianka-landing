import React from "react";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { CTA } from "@/components/CTA";
import { Container } from "@/components/Container";
import Image from "next/image";
import { Tick } from "@/assets/svgs/TickSvg";
import classNames from "classnames";

export type ContentWithImageProps =
  SliceComponentProps<Content.ContentWithImageSlice>;

const ContentWithImage = ({ slice }: ContentWithImageProps): JSX.Element => {
  const isVar = slice.variation === "imageRight";

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={classNames("content-with-image", {
        "content-with-image--var": isVar,
      })}
    >
      <Container className="container-lg">
        <div
          className={classNames("content-with-image__layout", {
            "content-with-image__layout--var": isVar,
          })}
        >
          <div
            className={classNames("content-with-image__text", {
              "content-with-image__text--var": isVar,
            })}
          >
            <h1>{slice.primary.heading}</h1>
            <h2>{slice.primary.sub_heading}</h2>
            <p>{slice.primary.description}</p>
            {isVar && (
              <>
                {slice.primary.tick_field.map((item, index) => (
                  <div className="content-with-image__tick-field" key={index}>
                    <span>
                      <Tick />
                    </span>
                    <p>{item.tick_description}</p>
                  </div>
                ))}
              </>
            )}
            <CTA
              variant={isVar ? "secondary" : "primary"}
              link={slice.primary.button_link}
              label={slice.primary.button_text}
            />
          </div>
          <div
            className={classNames("content-with-image__bg-image-container", {
              "content-with-image__bg-image-container--var": isVar,
            })}
          >
            <div
              className={classNames("col-image", {
                "col-image--var": isVar,
              })}
            >
              <PrismicNextImage
                field={slice.primary.image}
                className="col-image_img"
              />
              {!isVar && (
                <Image
                  className="deco-img"
                  src="https://ik.imagekit.io/2ziqnactl/Luvianka/deco-image.png"
                  alt="jam image - decoration purposes"
                  width={512}
                  height={512}
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContentWithImage;
