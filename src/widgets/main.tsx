import { FC, ReactNode } from "react";

export const Main: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <main className={`flex flex-1 flex-col ${className}`}>{children}</main>
  );
};
