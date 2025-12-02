import authReducer from "@/features/auth/authSlice";
import basketReducer from "@/features/basket/basketSlice";
import dropdownMenuReducer from "@/features/Dropdown/dropdownMenuSlice";
import paymentReducer from "@/features/payment/paymentSlice";
import headerSearchReducer from "@/features/searchField/headerSearchFieldSlice";
import collectionsReducer from "@/widgets/Collections/collectionsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
  return configureStore({
    reducer: {
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
