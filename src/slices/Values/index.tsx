import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Container } from "@/components/Container";
import { Medal } from "@/components/Icons/Medal";
import { Atom } from "@/components/Icons/Atom";
import { Recycle } from "@/components/Icons/Recycle";

/**
 * Props for `Values`.
 */
export type ValuesProps = SliceComponentProps<Content.ValuesSlice>;

/**
 * Component for "Values" Slices.
 */
const Values = ({ slice }: ValuesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="values"
      aria-labelledby="values-heading"
    >
      <Container>
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            heading2: ({ children }) => (
              <h2 id="values-heading" className="values__heading">
                {children}
              </h2>
            ),
          }}
        />
        <div className="values__layout" role="list">
          {slice.primary.value.map((item, index) => (
            <div role="listitem" className="values__card" key={item.icon}>
              {index === 0 ? <Medal /> : index === 1 ? <Atom /> : <Recycle />}
              <PrismicRichText
                field={item.title}
                components={{
                  heading3: ({ children }) => (
                    <h3 className="values__card-title">{children}</h3>
                  ),
                }}
              />
              <PrismicRichText
                field={item.description}
                components={{
                  paragraph: ({ children }) => (
                    <p className="values__description">{children}</p>
                  ),
                }}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Values;
