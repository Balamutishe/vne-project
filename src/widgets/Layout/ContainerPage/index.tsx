import { FC, ReactNode, Suspense } from "react";

const ContainerPage: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Suspense fallback={<div>ЗАГРУЗКА...</div>}>
      <div
        className={
          "relative mx-auto flex min-h-[100vh] max-w-[1440px] flex-col"
        }
      >
        {children}
      </div>
    </Suspense>
  );
};

export default ContainerPage;
