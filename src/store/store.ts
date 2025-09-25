import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "@/widgets/categories/categoriesSlice";
import headerReducer from "@/widgets/header/headerSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      headerState: headerReducer,
      categoriesState: categoriesReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
