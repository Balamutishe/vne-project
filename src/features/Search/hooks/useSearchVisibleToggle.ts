import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleHeaderSearchFieldVisible } from "../headerSearchFieldSlice";

export const useSearchVisibleToggle = () => {
  const { isSearchFieldVisible } = useAppSelector(
    (state) => state.headerSearchFieldState,
  );
  const dispatch = useAppDispatch();

  return {
    searchVisible: isSearchFieldVisible,
    handleSearchVisibleSet: (variant: "onclick" | "onblur") => {
      switch (variant) {
        case "onblur":
          return dispatch(toggleHeaderSearchFieldVisible(false));
        case "onclick":
          return dispatch(
            toggleHeaderSearchFieldVisible(!isSearchFieldVisible),
          );
      }
    },
  };
};
