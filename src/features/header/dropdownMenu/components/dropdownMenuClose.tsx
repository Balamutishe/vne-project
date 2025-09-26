import { useAppDispatch } from "@/store/hooks";
import { toggleDropdownMenuVisible } from "@/features/header/dropdownMenu/dropdownMenuSlice";
import CloseSvg from "../icons/close.svg";

export const DropdownMenuClose = () => {
  const dispatch = useAppDispatch();

  return (
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
  );
};
