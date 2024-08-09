import { Content } from "@prismicio/client";
import { ServerNavigation } from "@/components/Navigation/ServerNavigation";
import { ClientNavigation } from "@/components/Navigation/ClientNavigation";

export type NavigationProps = {
  slice: Content.NavigationSlice;
};

const Navigation = ({ slice }: NavigationProps): JSX.Element => {
  return (
    <>
      <ServerNavigation slice={slice} />
      <ClientNavigation slice={slice} />
    </>
  );
};

export default Navigation;
