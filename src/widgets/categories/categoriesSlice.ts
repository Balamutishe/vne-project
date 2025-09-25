import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  categoriesHeaderType: "men" | "women" | "accessories";
  categoriesMainType: "men" | "women";
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

const initialState: InitialState = {
  categoriesHeaderType: "women",
  categoriesMainType: "women",
  categoryCurrent: "trousers",
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

export const {
  setCategoryCurrent,
  setCategoryHeaderType,
  setCategoryMainType,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
