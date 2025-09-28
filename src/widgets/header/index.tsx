"use client";

import { FC } from "react";
import { HeaderPreview } from "@/widgets/header/headerPreview";
import { DropdownMenu } from "@/features/header/dropdownMenu";
import { HeaderLogo } from "@/widgets/header/headerLogo";
import { HeaderNav } from "@/widgets/header/headerNav";
import { HeaderToolbar } from "@/widgets/header/headerToolbar";

export const Header: FC<{ className?: string }> = ({ className }) => {
  return (
    <header className={"mb-20 max-h-212"}>
      <section
        className={`relative flex h-16 items-center justify-between px-13.5 py-2.5 ${className}`}
      >
        <HeaderNav />
        <HeaderLogo />
        <HeaderToolbar />
      </section>
      <HeaderPreview />
      <DropdownMenu />
    </header>
  );
};
