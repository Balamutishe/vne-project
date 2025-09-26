import { useAppSelector } from "@/store/hooks";
import UserSvg from "./icons/user.svg";
import BagSvg from "./icons/bag.svg";
import { HeaderSearchField } from "@/features/header/headerSearchField";

export const HeaderToolbar = () => {
  const isSearchFieldVisible = useAppSelector(
    (state) => state.headerSearchFieldState.isSearchFieldVisible,
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
