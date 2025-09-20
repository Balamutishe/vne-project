import { FC, ReactNode } from "react";

export const Header: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <header>
      <section className={`px-13.5 py-3.5 ${className}`}>{children}</section>
    </header>
  );
};
