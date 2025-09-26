import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleHeaderSearchFieldVisible } from "@/features/header/headerSearchField/headerSearchFieldSlice";
import SearchSvg from "@/widgets/header/icons/search.svg";
import { useEffect, useRef } from "react";

export const HeaderSearchField = () => {
  const ref = useRef<HTMLInputElement | null>(null);

  const isSearchFieldVisible = useAppSelector(
    (state) => state.headerSearchFieldState.isSearchFieldVisible,
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

  useEffect(() => {
    if (ref.current && isSearchFieldVisible) {
      ref.current.focus();
    }
  }, [isSearchFieldVisible]);

  return (
    <div className={"relative z-50"}>
      {isSearchFieldVisible && (
        <input
          ref={ref}
          type={"text"}
          name={"search"}
          className={
            "hover:border-hover focus:outline-hover absolute top-[-10] right-12 z-50 h-11 w-86 border-1" +
            " border-zinc-950 p-2"
          }
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
