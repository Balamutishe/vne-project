import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BasketState {
  products: {
    id: string;
    name: string;
    price: number;
    quantity: number;
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
    productAdd: (
      state,
      action: PayloadAction<{
        id: string;
        name: string;
        price: number;
        quantity: number;
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
        name: string;
        price: number;
        quantity: number;
      }>,
    ) => {
      if (state.products.some((product) => product.id === action.payload.id)) {
        state.products = state.products.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              price: product.price - action.payload.price,
              quantity: product.quantity - action.payload.quantity,
            };
          }
          return product;
        });
      } else {
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id,
        );
      }

      state.totalPrice = state.totalPrice - action.payload.price;
      state.totalQuantity = state.totalQuantity + action.payload.quantity;
    },
  },
});

export const { productAdd, productDelete } = basketSlice.actions;
export default basketSlice.reducer;
