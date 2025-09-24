import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  categoriesHeaderType: "men" | "women" | "accessories";
  categoriesMainType: "men" | "women";
  categoryCurrent: string;
}

const initialState: InitialState = {
  categoriesHeaderType: "women",
  categoriesMainType: "women",
  categoryCurrent: "",
};

const categoriesSlice = createSlice({
  name: "categoriesState",
  initialState,
  reducers: {
    setCategoryMainType: (state, action: PayloadAction<"men" | "women">) => {
      state.categoriesMainType = action.payload;
    },
    setCategoryHeaderType: (
      state,
      action: PayloadAction<"men" | "women" | "accessories">,
    ) => {
      state.categoriesHeaderType = action.payload;
    },
    setCategoryCurrent: (state, action: PayloadAction<string>) => {
      state.categoryCurrent = action.payload;
    },
  },
});

export const {
  setCategoryCurrent,
  setCategoryHeaderType,
  setCategoryMainType,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
