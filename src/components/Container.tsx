import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className = "" }: ContainerProps) => (
  <div className={`container ${className}`}>{children}</div>
);
