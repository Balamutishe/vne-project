import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "@/widgets/categories/categoriesSlice";
import headerReducer from "@/features/header/dropdownMenu/dropdownMenuSlice";
import headerSearchReducer from "@/features/header/headerSearchField/headerSearchFieldSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      headerState: headerReducer,
      categoriesState: categoriesReducer,
      headerSearchFieldState: headerSearchReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
