"use client";

import { clsx } from "clsx";
import { ChangeEvent, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, useRouter, useParams } from "next/navigation";
import {
  setSearchFieldValue,
  toggleHeaderSearchFieldVisible,
} from "@/features/searchField/headerSearchFieldSlice";
import SearchSvg from "./icons/search.svg";
import CloseSvg from "./icons/close.svg";

export const HeaderSearchField = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const { category, subcategory } = useParams<{
    category: "men" | "women" | "accessories";
    subcategory: string;
  }>();
  const searchParams = useSearchParams();
  const { push } = useRouter();

  const { isSearchFieldVisible } = useAppSelector(
    (state) => state.headerSearchFieldState,
  );
  const dispatch = useAppDispatch();

  const handlerToggleSearchFieldVisible = (variant: "onclick" | "onblur") => {
    switch (variant) {
      case "onblur":
        return dispatch(toggleHeaderSearchFieldVisible(false));
      case "onclick":
        return dispatch(toggleHeaderSearchFieldVisible(!isSearchFieldVisible));
    }
  };

  const handleSearch = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchFieldValue(e.target.value);
      console.log(category, subcategory);

      const newSearchParams = new URLSearchParams();
      searchParams
        .entries()
        .forEach(([key, value]) => newSearchParams.set(key, value));

      if (e.target.value) {
        newSearchParams.set("productName", e.target.value);

        if (!category || !subcategory) {
          push(`/categories?${newSearchParams.toString()}`);
        } else {
          push(
            `/categories/${category}/${subcategory}?${newSearchParams.toString()}`,
          );
        }
      } else {
        newSearchParams.delete("productName");

        if (!category || !subcategory) {
          push(`/`);
        } else if (category && subcategory) {
          push(`/categories/${category}/${subcategory}`);
        }
      }
    },
    500,
  );

  useEffect(() => {
    if (ref.current && isSearchFieldVisible) {
      ref.current.focus();
    }
  }, [isSearchFieldVisible]);

  return (
    <div className={"relative"}>
      {isSearchFieldVisible && (
        <>
          <input
            ref={ref}
            type={"text"}
            name={"search"}
            defaultValue={searchParams.get("productName") || ""}
            className={
              "bg-background hover:border-hover focus:outline-hover absolute top-1/2 right-[-20] z-50 h-9 -translate-y-1/2" +
              " sm:h-11" +
              " w-66" +
              " sm:w-80" +
              " sm:right-[-24]" +
              " border-1" +
              " border-tertiary cursor-pointer p-2 pl-10 outline-none sm:pl-14"
            }
            onChange={(e) => handleSearch(e)}
            onBlur={() => handlerToggleSearchFieldVisible("onblur")}
          />
          <CloseSvg
            className={
              "hover:[&>path]:fill-hover absolute top-1/2 right-[-11] z-51 -translate-y-1/2 cursor-pointer"
            }
            onClick={() => handlerToggleSearchFieldVisible("onblur")}
          />
        </>
      )}
      <SearchSvg
        className={clsx("hover:[&>path]:stroke-hover cursor-pointer", {
          "absolute top-1/2 right-53 z-51 -translate-y-1/2 sm:right-63":
            isSearchFieldVisible,
        })}
        width={24}
        height={24}
        onClick={() => {
          handlerToggleSearchFieldVisible("onclick");
        }}
      />
    </div>
  );
};
