"use client";

import { toggleCollectionHeader } from "@/widgets/collections/collectionsSlice";
import { FC, useEffect, useRef } from "react";
import { useAppDispatch } from "@/store/hooks";
import { clsx } from "clsx";
import { toggleDropdownMenuVisible } from "@/widgets/header/components/dropdownMenu/dropdownMenuSlice";
import {
  HeaderPreview,
  HeaderLogo,
  HeaderNav,
  HeaderToolbar,
  DropdownMenuView,
} from "@/widgets/header/components";

export const Header: FC<{ className?: string }> = ({ className }) => {
  const ref = useRef<HTMLElement | null>(null);
  const dispatch = useAppDispatch();

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      dispatch(toggleDropdownMenuVisible(false));
      dispatch(toggleCollectionHeader("women"));
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header ref={ref} className={clsx(`max-h-212 ${className}`)}>
      <section
        className={`container-padding relative flex h-16 items-center justify-between [&>*]:w-1/3`}
      >
        <HeaderNav />
        <HeaderLogo />
        <HeaderToolbar />
      </section>
      <HeaderPreview />
      <div className={"absolute top-16 z-50 max-h-80 w-full max-w-[1440px]"}>
        <DropdownMenuView />
      </div>
    </header>
  );
};
