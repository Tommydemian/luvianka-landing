import React, { ReactNode } from "react";

type NavClientListenerProps = {
  children: ReactNode;
  isActive: boolean;
};

export const NavClientListener = ({
  children,
  isActive,
}: NavClientListenerProps) => {
  return (
    <div
      className={
        isActive ? "mobile-menu-wrapper.active" : "mobile-menu-wrapper"
      }
    >
      {children}
    </div>
  );
};

export default NavClientListener;
