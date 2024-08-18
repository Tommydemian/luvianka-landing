import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { Container } from "@/components/Container";

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = async ({ slice }: FeaturesProps): Promise<JSX.Element> => {
  const client = createClient();
  const page = await client.getSingle("about_us");
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="features"
    >
      <Container>
        <PrismicRichText
          field={page.data.features_section_heading}
          components={{
            heading2: ({ children }) => <h2 className="">{children}</h2>,
          }}
        />
        Placeholder component for features (variation: {slice.variation}) Slices
      </Container>
    </section>
  );
};

export default Features;
