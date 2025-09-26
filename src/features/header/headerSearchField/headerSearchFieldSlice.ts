import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HeaderSearchFieldState {
  isSearchFieldVisible: boolean;
}

const initialState: HeaderSearchFieldState = {
  isSearchFieldVisible: false,
};

const headerSearchFieldSlice = createSlice({
  name: "headerSearchFieldState",
  initialState,
  reducers: {
    toggleHeaderSearchFieldVisible: (state, action: PayloadAction<boolean>) => {
      state.isSearchFieldVisible = action.payload;
    },
  },
});

export const { toggleHeaderSearchFieldVisible } =
  headerSearchFieldSlice.actions;
export default headerSearchFieldSlice.reducer;
