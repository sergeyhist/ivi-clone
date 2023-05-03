import { configureStore } from "@reduxjs/toolkit";
import windowSizeSlice from "./slices/windowSizeSlice";
import modalsSlice from "./slices/modalsSlice";

export const store = configureStore({
  reducer: {
    windowSize: windowSizeSlice,
    showModal: modalsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
