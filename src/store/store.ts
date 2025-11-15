import { configureStore } from "@reduxjs/toolkit";
import collectionsReducer from "@/widgets/collections/collectionsSlice";
import headerReducer from "@/widgets/dropdown/dropdownMenuSlice";
import headerSearchReducer from "@/features/searchField/headerSearchFieldSlice";
import dropdownMenuReducer from "@/widgets/dropdown/dropdownMenuSlice";
import basketReducer from "@/features/basket/basketSlice";
import paymentReducer from "@/features/payment/paymentSlice";
import authReducer from "@/features/auth/authSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      headerState: headerReducer,
      collectionsState: collectionsReducer,
      headerSearchFieldState: headerSearchReducer,
      dropdownMenuState: dropdownMenuReducer,
      basketState: basketReducer,
      paymentState: paymentReducer,
      authState: authReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
