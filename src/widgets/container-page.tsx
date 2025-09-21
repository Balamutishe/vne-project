import { FC, ReactNode } from "react";

export const ContainerPage: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={"mx-auto flex h-[100vh] max-w-[1440px] flex-col"}>
      {children}
    </div>
  );
};
