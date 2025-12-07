"use client";

import { toggleDropdownMenuVisible } from "@/features/Dropdown/dropdownMenuSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import BurgerSvg from "@/shared/icons/burger.svg";
import CloseSvg from "@/shared/icons/close.svg";

const DropdownVisibilityChange = () => {
  const dispatch = useAppDispatch();
  const { isDropdownMenuVisible } = useAppSelector(
    (state) => state.dropdownMenuState,
  );

  return (
    <>
      {!isDropdownMenuVisible ? (
        <button
          className={"flex w-full cursor-pointer items-center justify-start"}
          onClick={() => {
            dispatch(toggleDropdownMenuVisible(true));
          }}
        >
          <BurgerSvg width={32} height={32} />
        </button>
      ) : (
        <button
          className={"flex cursor-pointer items-center"}
          onClick={() => dispatch(toggleDropdownMenuVisible(false))}
        >
          <CloseSvg
            className={"hover:[&>path]:fill-hover"}
            width={24}
            height={24}
          />
        </button>
      )}
    </>
  );
};

export default DropdownVisibilityChange;
