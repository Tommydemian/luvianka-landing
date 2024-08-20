import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { ContactPageContent } from "@/components/ContactPageContent";
import { createClient } from "@/prismicio";

/**
 * Props for `StateAndForm`.
 */
export type StateAndFormProps = SliceComponentProps<Content.StateAndFormSlice>;

/**
 * Component for "StateAndForm" Slices.
 */
const StateAndForm = ({ slice }: StateAndFormProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ContactPageContent />
    </section>
  );
};

export default StateAndForm;
