import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HeaderState {
  isDropdownMenuVisible: boolean;
  categoriesType: "men" | "women" | "accessories";
}

const initialState: HeaderState = {
  isDropdownMenuVisible: false,
  categoriesType: "women",
};

const headerSlice = createSlice({
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
  headerSlice.actions;
export default headerSlice.reducer;
