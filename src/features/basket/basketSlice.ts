import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BasketProduct = {
  _id: string;
  id: string;
  name: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
  imageUrl: string;
};

interface BasketState {
  products: BasketProduct[];
  totalPrice: number;
  totalQuantity: number;
  isBasketOpen: boolean;
}

const initialState: BasketState = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0,
  isBasketOpen: false,
};

const basketSlice = createSlice({
  name: "basketState",
  initialState,
  reducers: {
    toggleBasketOpen: (state, action: PayloadAction<boolean>) => {
      state.isBasketOpen = action.payload;
    },
    productAdd: (state, action: PayloadAction<BasketProduct>) => {
      const productAvailable = state.products.some(
        (product) =>
          product.id === action.payload.id &&
          product.size === action.payload.size &&
          product.color === action.payload.color,
      );

      if (!productAvailable) {
        state.products = [...state.products, action.payload];
      } else {
        state.products = state.products.map((product) => {
          if (
            product.id === action.payload.id &&
            product.size === action.payload.size &&
            product.color === action.payload.color
          ) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }

          return product;
        });
      }

      state.totalPrice = state.totalPrice + action.payload.price;
      state.totalQuantity = state.totalQuantity + action.payload.quantity;
    },
    productDelete: (
      state,
      action: PayloadAction<{
        type: "decreaseQuantity" | "deleteProduct";
        _id: string;
      }>,
    ) => {
      const productAvailable = state.products.some(
        (product) => product._id === action.payload._id,
      );

      if (!productAvailable) {
        console.error("product not found");
        return;
      }

      if (action.payload.type === "decreaseQuantity") {
        state.products = state.products.map((product) => {
          if (product._id === action.payload._id) {
            state.totalPrice = state.totalPrice - product.price;
            state.totalQuantity = state.totalQuantity - 1;

            return {
              ...product,
              quantity: product.quantity - 1,
            };
          }

          return product;
        });
      }

      if (action.payload.type === "deleteProduct") {
        const currentProduct = state.products.find(
          (product) => product._id === action.payload._id,
        );

        state.products = state.products.filter(
          (product) => product._id !== currentProduct!._id,
        );

        state.totalPrice =
          state.totalPrice - currentProduct!.price * currentProduct!.quantity;
        state.totalQuantity = state.totalQuantity - currentProduct!.quantity;
      }
    },
    basketClear: (state) => {
      state.products = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { productAdd, productDelete, basketClear, toggleBasketOpen } =
  basketSlice.actions;
export default basketSlice.reducer;
