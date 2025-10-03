import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoriesState {
  categoriesType: "men" | "women" | "accessories";
  categoryCurrent: string;
}

const initialState: CategoriesState = {
  categoriesType: "women",
  categoryCurrent: "trousers",
};

const categoriesSlice = createSlice({
  name: "categoriesState",
  initialState,
  reducers: {
    setCategoryType: (
      state,
      action: PayloadAction<"men" | "women" | "accessories">,
    ) => {
      state.categoriesType = action.payload;
    },
    setCategoryCurrent: (state, action: PayloadAction<string>) => {
      state.categoryCurrent = action.payload;
    },
  },
});

export const { setCategoryCurrent, setCategoryType } = categoriesSlice.actions;
export default categoriesSlice.reducer;
