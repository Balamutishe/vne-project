import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DropdownMenuState {
  isDropdownMenuVisible: boolean;
  categoriesType: "men" | "women" | "accessories";
}

const initialState: DropdownMenuState = {
  isDropdownMenuVisible: false,
  categoriesType: "women",
};

const dropdownMenuSlice = createSlice({
  name: "headerState",
  initialState,
  reducers: {
    toggleDropdownMenuVisible: (state, action: PayloadAction<boolean>) => {
      state.isDropdownMenuVisible = action.payload;
    },
    toggleCategoriesType: (
      state,
      action: PayloadAction<"men" | "women" | "accessories">,
    ) => {
      state.categoriesType = action.payload;
    },
  },
});

export const { toggleDropdownMenuVisible, toggleCategoriesType } =
  dropdownMenuSlice.actions;
export default dropdownMenuSlice.reducer;
