import { configureStore } from "@reduxjs/toolkit";
import i18next, { changeLanguage } from "i18next";
import localeSlice from "./slices/localeSlice";
import windowSizeSlice from "./slices/windowSizeSlice";
import authSlice from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    windowSize: windowSizeSlice,
    locale: localeSlice,
    showAuthModal: authSlice,
  },
});

store.subscribe(() => {
  i18next.language !== store.getState().locale.current &&
    changeLanguage(store.getState().locale.current);
  localStorage.setItem("currentLocale", store.getState().locale.current);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
