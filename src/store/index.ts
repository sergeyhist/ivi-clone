import { configureStore } from "@reduxjs/toolkit";
import windowSizeSlice from "./slices/windowSizeSlice";
import modalsSlice from "./slices/modalsSlice";
import slugsSlice from "/src/store/slices/slugsSlice";
import filtersSlice from "./slices/filtersSlice";
import authSlice from "/src/store/slices/authSlice";

export const reducersSetup = {
  windowSize: windowSizeSlice,
  showModal: modalsSlice,
  slugs: slugsSlice,
  filters: filtersSlice,
  auth: authSlice,
};

export const store = configureStore({
  reducer: reducersSetup,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
