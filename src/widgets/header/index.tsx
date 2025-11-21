import { CollectionListView } from "@/widgets/collections/components";
import { Dropdown } from "@/widgets/dropdown";
import { DropdownVisibilityChange } from "@/widgets/dropdown/components";
import {
  HeaderLogo,
  HeaderPreview,
  HeaderToolbar,
  NavList,
} from "@/widgets/header/components";
import { clsx } from "clsx";
import { FC } from "react";

export const Header: FC<{
  className?: string;
  variant?: "main" | "second";
}> = ({ className, variant }) => {
  return (
    <header className={`${className} overflow-hidden sm:p-0`}>
      <section
        className={`container-padding flex-center-between h-12 lg:h-16 [&>*]:w-1/3`}
      >
        <section>
          <div className={"lg:hidden"}>
            <DropdownVisibilityChange />
          </div>
          <div className={"hidden lg:block"}>
            <NavList />
          </div>
        </section>
        <HeaderLogo />
        <HeaderToolbar />
      </section>
      <section
        className={clsx("z-[-1] h-112 w-full lg:h-200", {
          hidden: variant !== "main",
        })}
      >
        <HeaderPreview />
      </section>
      <Dropdown
        ComponentList={<CollectionListView variant={"header"} />}
        ComponentNav={<NavList />}
      />
    </header>
  );
};
