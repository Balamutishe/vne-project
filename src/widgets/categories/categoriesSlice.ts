import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoriesState {
  categoriesType: "men" | "women";
  categoryCurrent:
    | "accessories"
    | "dresses"
    | "jackets"
    | "outerwear"
    | "skirts"
    | "t-shirts"
    | "shirts"
    | "sweaters"
    | "tops"
    | "trousers";
}

const initialState: CategoriesState = {
  categoriesType: "women",
  categoryCurrent: "trousers",
};

const categoriesSlice = createSlice({
  name: "categoriesState",
  initialState,
  reducers: {
    setCategoryType: (state, action: PayloadAction<"men" | "women">) => {
      state.categoriesType = action.payload;
    },
    setCategoryCurrent: (
      state,
      action: PayloadAction<
        | "accessories"
        | "dresses"
        | "jackets"
        | "outerwear"
        | "skirts"
        | "t-shirts"
        | "sweaters"
        | "tops"
        | "trousers"
        | "shirts"
      >,
    ) => {
      state.categoryCurrent = action.payload;
    },
  },
});

export const { setCategoryCurrent, setCategoryType } = categoriesSlice.actions;
export default categoriesSlice.reducer;
