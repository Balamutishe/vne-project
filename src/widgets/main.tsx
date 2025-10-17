import { FC, ReactNode } from "react";

export const Main: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <main className={`flex flex-1 flex-col ${className} z-1 sm:z-50`}>
      {children}
    </main>
  );
};
