import { useAppDispatch } from "@/store/hooks";
import { toggleDropdownMenuVisible } from "@/widgets/header/headerSlice";
import Image from "next/image";

export const DropdownMenuClose = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      className={"cursor-pointer"}
      onClick={() => dispatch(toggleDropdownMenuVisible(false))}
    >
      <Image
        className={"svg-icon"}
        src={"/images/close.svg"}
        alt={"Close"}
        width={34}
        height={34}
      />
    </button>
  );
};
