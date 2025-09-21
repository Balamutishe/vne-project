import { FC, ReactNode } from "react";

export const Main: FC<{ children: ReactNode }> = ({ children }) => {
  return <main className={"flex flex-1"}>{children}</main>;
};
