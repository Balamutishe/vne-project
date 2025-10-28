import { FC } from "react";
import { clsx } from "clsx";
import {
  HeaderPreview,
  HeaderLogo,
  HeaderNav,
  HeaderToolbar,
} from "@/widgets/header/components";

export const Header: FC<{
  className?: string;
  variant?: "main" | "second";
}> = ({ className, variant }) => {
  return (
    <header className={clsx(`${className} overflow-hidden sm:p-0`)}>
      <section
        className={`container-padding flex-center-between h-12 lg:h-16 [&>*]:w-1/3`}
      >
        <HeaderNav />
        <HeaderLogo />
        <HeaderToolbar />
      </section>
      <section
        className={clsx("z-[-1] h-112 lg:h-200", {
          hidden: variant !== "main",
        })}
      >
        <HeaderPreview />
      </section>
    </header>
  );
};
