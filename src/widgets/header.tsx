import { FC, ReactNode } from "react";

export const Header: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <header>
      <section className={"px-13.5 py-3.5"}>{children}</section>
    </header>
  );
};
