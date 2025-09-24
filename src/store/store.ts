import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "@/widgets/categories/categoriesSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      categoriesState: categoriesReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
