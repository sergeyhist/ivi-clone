import { configureStore } from "@reduxjs/toolkit";
import i18next, { changeLanguage } from "i18next";
import localeSlice from "./slices/localeSlice";
import windowSizeSlice from "./slices/windowSizeSlice";

export const store = configureStore({
  reducer: {
    windowSize: windowSizeSlice,
    locale: localeSlice,
  },
});

store.subscribe(() => {
  i18next.language !== store.getState().locale &&
    changeLanguage(store.getState().locale);
  localStorage.setItem("currentLocale", store.getState().locale);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
