import { toggleDropdownMenuVisible } from "@/features/Dropdown/dropdownMenuSlice";
import { useAppDispatch } from "@/store/hooks";
import { useRef } from "react";

const useDropdowVisibilityOnBlur = () => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLElement | null>(null);

  const handleToggleVisible = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
      dispatch(toggleDropdownMenuVisible(false));
    }
  };

  return {
    ref,
    handleToggleVisible
  };
};

export default useDropdowVisibilityOnBlur();