import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HeaderSearchFieldState {
  searchFieldValue: string;
  isSearchFieldVisible: boolean;
}

const initialState: HeaderSearchFieldState = {
  searchFieldValue: "",
  isSearchFieldVisible: false,
};

const headerSearchFieldSlice = createSlice({
  name: "headerSearchFieldState",
  initialState,
  reducers: {
    setSearchFieldValue: (state, action: PayloadAction<string>) => {
      state.searchFieldValue = action.payload;
    },
    toggleHeaderSearchFieldVisible: (state, action: PayloadAction<boolean>) => {
      state.isSearchFieldVisible = action.payload;
    },
  },
});

export const { toggleHeaderSearchFieldVisible, setSearchFieldValue } =
  headerSearchFieldSlice.actions;
export default headerSearchFieldSlice.reducer;
