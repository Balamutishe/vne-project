import { useAppSelector } from "@/store/hooks";
import UserSvg from "./icons/user.svg";
import BagSvg from "./icons/bag.svg";
import { HeaderSearchField } from "@/features/header/headerSearchField";

export const HeaderToolbar = () => {
  const { isSearchFieldVisible } = useAppSelector(
    (state) => state.headerSearchFieldState,
  );
  const { totalQuantity } = useAppSelector((state) => state.basketState);

  return (
    <div className={"flex min-w-[25%] items-center justify-end gap-8"}>
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
      <div className={"relative"}>
        {totalQuantity > 0 && (
          <span
            className={
              "bg-hover text-background absolute -top-3 -right-4 flex h-5 w-5 items-center justify-center" +
              " rounded-full p-2 text-base leading-0"
            }
          >
            {totalQuantity}
          </span>
        )}
        <BagSvg
          className={"hover:[&>path]:fill-hover cursor-pointer"}
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};
