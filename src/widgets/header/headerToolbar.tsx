import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleSearchFieldVisible } from "@/widgets/header/headerSlice";
import { useEffect, useRef } from "react";
import UserSvg from "./icons/user.svg";
import BagSvg from "./icons/bag.svg";
import SearchSvg from "./icons/search.svg";

const HeaderSearchField = () => {
  const ref = useRef<HTMLInputElement | null>(null);

  const isSearchFieldVisible = useAppSelector(
    (state) => state.headerState.isSearchFieldVisible,
  );
  const dispatch = useAppDispatch();

  const handlerToggleSearchFieldVisible = (variant: "onclick" | "onblur") => {
    switch (variant) {
      case "onblur":
        return dispatch(toggleSearchFieldVisible(false));
      case "onclick":
        return dispatch(toggleSearchFieldVisible(!isSearchFieldVisible));
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

export const HeaderToolbar = () => {
  const isSearchFieldVisible = useAppSelector(
    (state) => state.headerState.isSearchFieldVisible,
  );

  return (
    <div className={"flex w-2/5 items-center justify-end gap-8"}>
      {!isSearchFieldVisible && (
        <button
          className={
            "hover:text-hover active:text-active cursor-pointer transition-colors"
          }
        >
          О БРЕНДЕ
        </button>
      )}
      <HeaderSearchField />
      <UserSvg
        className={"hover:[&>path]:stroke-hover cursor-pointer"}
        width={24}
        height={24}
      />
      <BagSvg
        className={"hover:[&>path]:fill-hover cursor-pointer"}
        width={24}
        height={24}
      />
    </div>
  );
};
