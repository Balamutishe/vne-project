"use client";

import { FC, useEffect, useRef } from "react";
import { clsx } from "clsx";
import { useAppDispatch } from "@/store/hooks";
import { toggleDropdownMenuVisible } from "@/widgets/header/components/dropdownMenu/dropdownMenuSlice";
import { toggleCollectionHeader } from "@/widgets/collections/collectionsSlice";
import {
  HeaderPreview,
  HeaderLogo,
  HeaderNav,
  HeaderToolbar,
  DropdownMenuView,
} from "@/widgets/header/components";

export const Header: FC<{
  className?: string;
  variant?: "main" | "second";
}> = ({ className, variant }) => {
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
    <header ref={ref} className={clsx(`${className} overflow-hidden sm:p-0`)}>
      <section
        className={`container-padding flex-center-between h-12 lg:h-16 [&>*]:w-1/3`}
      >
        <HeaderNav />
        <HeaderLogo />
        <HeaderToolbar />
        <div
          className={
            "absolute top-12 right-0 z-50 max-h-80 last:w-full lg:top-16"
          }
        >
          <DropdownMenuView />
        </div>
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
