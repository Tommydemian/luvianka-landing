import React from "react";
import styles from "./SplitContainer.module.css";
import classNames from "classnames";

type SideProps = {
  children: React.ReactNode;
  className?: string;
};

const Left = ({ children, className }: SideProps) => (
  <div className={classNames(styles.left, className)}>{children}</div>
);

const Right = ({ children, className }: SideProps) => (
  <div className={classNames(styles.right, className)}>{children}</div>
);

type SplitContainerProps = {
  children: React.ReactNode;
  className?: string;
  reversed?: boolean;
};

export const SplitContainer = ({
  children,
  className,
  reversed,
}: SplitContainerProps) => {
  return (
    <div className={classNames(styles.container, className)}>
      <div
        className={classNames(styles.split, {
          [styles.reversed]: reversed,
        })}
      >
        {children}
      </div>
    </div>
  );
};

SplitContainer.Left = Left;
SplitContainer.Right = Right;
