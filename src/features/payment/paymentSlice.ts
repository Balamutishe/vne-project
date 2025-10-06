import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaymentState {
  variantPaymentForm: "courier" | "pickup" | "default";
}

const initialState: PaymentState = {
  variantPaymentForm: "pickup",
};

const paymentSlice = createSlice({
  name: "paymentState",
  initialState,
  reducers: {
    toggleVariantPaymentForm: (
      state,
      action: PayloadAction<"courier" | "pickup" | "default">,
    ) => {
      state.variantPaymentForm = action.payload;
    },
  },
});

export const { toggleVariantPaymentForm } = paymentSlice.actions;
export default paymentSlice.reducer;
