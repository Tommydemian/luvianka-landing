import React from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { Container } from "@/components/Container";
import { PrismicNextImage } from "@prismicio/next";

import classNames from "classnames";

export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

const Features = async ({ slice }: FeaturesProps): Promise<JSX.Element> => {
  const client = createClient();

  const features = await client.getAllByType("features", {
    fetchLinks: [
      "features.feature_image",
      "features.feature_title",
      "features.feature_description",
      "features.image_position_is_left",
    ],
  });

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="features"
    >
      <Container>
        <PrismicRichText
          field={slice.primary.features_section_heading}
          components={{
            heading2: ({ children }) => (
              <h2 className="features__heading">{children}</h2>
            ),
          }}
        />
        <div className="features-layout">
          {features.map((item, index) => (
            <div key={item.id} className="features__wrapper">
              <PrismicNextImage
                className="features__image"
                field={item.data.feature_image}
              />
              <div
                className={classNames("features__text-container", {
                  "features__text-container--img-right": index === 1,
                })}
              >
                <h3 className="features__title">
                  {item.data.feature_title_v2}
                </h3>
                <PrismicRichText
                  field={item.data.feature_desciption}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="features__description">{children}</p>
                    ),
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
