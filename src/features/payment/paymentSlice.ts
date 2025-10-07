import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TVariantPaymentFormValue =
  | "courier"
  | "pickupPoint"
  | "pickup"
  | "default";

type TVariantPaymentForm = {
  value: TVariantPaymentFormValue;
  label: string;
  disabled?: boolean;
};

interface PaymentState {
  variantPaymentForm: TVariantPaymentForm;
}

const initialState: PaymentState = {
  variantPaymentForm: {
    value: "default",
    label: "Выберите способ доставки",
    disabled: true,
  },
};

const paymentSlice = createSlice({
  name: "paymentState",
  initialState,
  reducers: {
    toggleVariantPaymentForm: (
      state,
      action: PayloadAction<TVariantPaymentForm>,
    ) => {
      state.variantPaymentForm = action.payload;
    },
  },
});

export const { toggleVariantPaymentForm } = paymentSlice.actions;
export default paymentSlice.reducer;
