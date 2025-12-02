import { TGender } from "@/shared/types/collections.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CollectionsState {
  collectionHeaderType: TGender;
  categoryHeaderType: string;
  collectionMainType: TGender;
  categoryMainType: string;
}

const initialState: CollectionsState = {
  collectionHeaderType: "women",
  categoryHeaderType: "trousers",
  collectionMainType: "women",
  categoryMainType: "trousers",
};

const collectionsSlice = createSlice({
  name: "collectionsState",
  initialState,
  reducers: {
    toggleCollectionHeader: (state, action: PayloadAction<TGender>) => {
      state.collectionHeaderType = action.payload;
    },
    toggleCollectionMain: (state, action: PayloadAction<TGender>) => {
      state.collectionMainType = action.payload;
    },
    toggleCategoryHeader: (state, action: PayloadAction<string>) => {
      state.categoryHeaderType = action.payload;
    },
    toggleCategoryMain: (state, action: PayloadAction<string>) => {
      state.categoryMainType = action.payload;
    },
  },
});

export const {
  toggleCollectionHeader,
  toggleCollectionMain,
  toggleCategoryHeader,
  toggleCategoryMain,
} = collectionsSlice.actions;
export default collectionsSlice.reducer;
