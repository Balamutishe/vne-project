import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setSearchFieldValue,
  toggleHeaderSearchFieldVisible,
} from "@/features/header/headerSearchField/headerSearchFieldSlice";
import SearchSvg from "@/widgets/header/icons/search.svg";
import { useSearchParams, useRouter, useParams } from "next/navigation";
import { ChangeEvent, useEffect, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

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
        <input
          ref={ref}
          type={"text"}
          name={"search"}
          defaultValue={searchParams.get("productName") || ""}
          className={
            "bg-background hover:border-hover focus:outline-hover absolute top-[-10] right-12 z-50 h-11 w-80 border-1" +
            " border-zinc-950 p-2"
          }
          onChange={(e) => handleSearch(e)}
          onBlur={() => handlerToggleSearchFieldVisible("onblur")}
        />
      )}
      <SearchSvg
        className={"hover:[&>path]:stroke-hover cursor-pointer"}
        width={24}
        height={24}
        onClick={() => {
          handlerToggleSearchFieldVisible("onclick");
        }}
      />
    </div>
  );
};
