"use client";

import { clsx } from "clsx";
import { FC } from "react";
import { HeaderPreview } from "@/widgets/header/components/headerPreview";
import { DropdownMenu } from "@/features/header/dropdownMenu";
import { HeaderLogo } from "@/widgets/header/components/headerLogo";
import { HeaderNav } from "@/widgets/header/components/headerNav";
import { HeaderToolbar } from "@/widgets/header/components/headerToolbar";

export const Header: FC<{ className?: string }> = ({ className }) => {
  return (
    <header className={clsx(`max-h-212 ${className}`)}>
      <section
        className={`relative flex h-16 items-center justify-between px-13.5 py-2.5`}
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
