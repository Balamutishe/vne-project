"use client";

import { FC } from "react";
import { useAppSelector } from "@/store/hooks";
import { DropdownMenu } from "@/widgets/header/dropdownMenu";
import { HeaderLogo } from "@/widgets/header/headerLogo";
import { HeaderNav } from "@/widgets/header/headerNav";
import { HeaderToolbar } from "@/widgets/header/headerToolbar";
import Image from "next/image";

export const Header: FC<{ className?: string }> = ({ className }) => {
  const isDropdownMenuVisible = useAppSelector(
    (state) => state.headerState.isDropdownMenuVisible,
  );

  return (
    <header className={"mb-20 h-212"}>
      <section
        className={`relative flex h-16 items-center justify-between px-13.5 py-2.5 ${className}`}
      >
        <HeaderNav />
        <HeaderLogo />
        <HeaderToolbar />
      </section>
      <section className={"h-196 overflow-hidden"}>
        <Image
          src={"/images/preview.jpg"}
          alt={"Preview"}
          height={800}
          width={1440}
        />
      </section>
      {isDropdownMenuVisible && <DropdownMenu />}
    </header>
  );
};
