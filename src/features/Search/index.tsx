"use client";

import { clsx } from "clsx";
import { useEffect, useRef } from "react";
import SearchSvg from "@/shared/icons/search.svg";
import CloseSvg from "@/shared/icons/close.svg";
import { useSearchByName } from "./hooks/useSearchByName";
import { useSearchVisibleToggle } from "./hooks/useSearchVisibleToggle";

export const SearchField = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const { searchVisible, handleSearchVisibleSet } = useSearchVisibleToggle();
  const { searchValue, handleSearchValueSet } = useSearchByName();

  useEffect(() => {
    if (ref.current && searchVisible) {
      ref.current.focus();
    }
  }, [searchVisible]);

  return (
    <div className={"relative"}>
      {searchVisible && (
        <>
          <input
            ref={ref}
            type={"text"}
            name={"search"}
            defaultValue={searchValue}
            className={
              "bg-background hover:border-hover focus:outline-hover absolute top-1/2 right-[-20] z-50 h-9 -translate-y-1/2" +
              " sm:h-11" +
              " w-66" +
              " sm:w-80" +
              " sm:right-[-24]" +
              " border-1" +
              " border-tertiary cursor-pointer p-2 pl-10 outline-none sm:pl-14"
            }
            onChange={(e) => handleSearchValueSet(e)}
            onBlur={() => handleSearchVisibleSet("onblur")}
          />
          <CloseSvg
            className={
              "hover:[&>path]:fill-hover absolute top-1/2 right-[-11] z-51 -translate-y-1/2 cursor-pointer"
            }
            onClick={() => handleSearchVisibleSet("onblur")}
          />
        </>
      )}
      <SearchSvg
        className={clsx("hover:[&>path]:stroke-hover cursor-pointer", {
          "absolute top-1/2 right-53 z-51 -translate-y-1/2 sm:right-63":
            searchVisible,
        })}
        width={24}
        height={24}
        onClick={() => {
          handleSearchVisibleSet("onclick");
        }}
      />
    </div>
  );
};
