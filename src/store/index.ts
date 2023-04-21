import { configureStore } from "@reduxjs/toolkit";
import i18next, { changeLanguage } from "i18next";
import localeSlice from "./slices/localeSlice";
import windowSizeSlice from "./slices/windowSizeSlice";
import modalsSlice from "./slices/modalsSlice";

export const store = configureStore({
  reducer: {
    windowSize: windowSizeSlice,
    locale: localeSlice,
    showModal: modalsSlice,
  },
});

store.subscribe(() => {
  i18next.language !== store.getState().locale.current &&
    changeLanguage(store.getState().locale.current);
  localStorage.setItem("currentLocale", store.getState().locale.current);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
