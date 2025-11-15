import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DropdownMenuState {
  isDropdownMenuVisible: boolean;
}

const initialState: DropdownMenuState = {
  isDropdownMenuVisible: false,
};

const dropdownMenuSlice = createSlice({
  name: "dropdownMenuState",
  initialState,
  reducers: {
    toggleDropdownMenuVisible: (state, action: PayloadAction<boolean>) => {
      state.isDropdownMenuVisible = action.payload;
    },
  },
});

export const { toggleDropdownMenuVisible } = dropdownMenuSlice.actions;
export default dropdownMenuSlice.reducer;
