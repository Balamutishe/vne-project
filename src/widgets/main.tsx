import { FC, ReactNode } from "react";

export const Main: FC<{ children: ReactNode }> = ({ children }) => {
  return <main className={"flex flex-1 flex-col px-13.5"}>{children}</main>;
};
