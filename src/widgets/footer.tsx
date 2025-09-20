import { FC, ReactNode } from "react";

export const Footer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <footer>
      <section className={"px-13.5 py-3.5"}>{children}</section>
    </footer>
  );
};
