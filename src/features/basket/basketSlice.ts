import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BasketState {
  products: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
  }[];
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
    productAdd: (
      state,
      action: PayloadAction<{
        id: string;
        name: string;
        price: number;
        quantity: number;
        imageUrl: string;
      }>,
    ) => {
      if (state.products.some((product) => product.id === action.payload.id)) {
        state.products = state.products.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              price: product.price + action.payload.price,
              quantity: product.quantity + action.payload.quantity,
            };
          }
          return product;
        });
      } else {
        state.products = [...state.products, action.payload];
      }

      state.totalPrice = state.totalPrice + action.payload.price;
      state.totalQuantity = state.totalQuantity + action.payload.quantity;
    },
    productDelete: (
      state,
      action: PayloadAction<{
        id: string;
        price?: number;
        quantity?: number;
      }>,
    ) => {
      if (state.products.some((product) => product.id === action.payload.id)) {
        if (action.payload.price && action.payload.quantity) {
          state.products = state.products.map((product) => {
            if (product.id === action.payload.id) {
              return {
                ...product,
                price: product.price - action.payload.price!,
                quantity: product.quantity - action.payload.quantity!,
              };
            }
            return product;
          });

          state.totalPrice = state.totalPrice - action.payload.price;
          state.totalQuantity = state.totalQuantity - action.payload.quantity;
        } else {
          const product = state.products.find(
            (product) => product.id === action.payload.id,
          );

          if (!product) {
            console.error("Product not found in basket");
            return;
          }

          state.totalPrice = state.totalPrice - product.price;
          state.totalQuantity = state.totalQuantity - product.quantity;

          state.products = state.products.filter(
            (product) => product.id !== action.payload.id,
          );
        }
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
