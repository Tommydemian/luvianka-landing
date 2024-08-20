import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `QualityDescription`.
 */
export type QualityDescriptionProps =
  SliceComponentProps<Content.QualityDescriptionSlice>;

/**
 * Component for "QualityDescription" Slices.
 */
const QualityDescription = ({
  slice,
}: QualityDescriptionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="feature-description"
    >
      Placeholder component for quality_description (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default QualityDescription;
