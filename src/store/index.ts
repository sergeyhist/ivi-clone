import { configureStore } from "@reduxjs/toolkit";
import windowSizeSlice from "./slices/windowSizeSlice";
import modalsSlice from "./slices/modalsSlice";
import slugsSlice from "/src/store/slices/slugsSlice";
import filtersSlice from "./slices/filtersSlice";
import personsSlice from "/src/store/slices/personsSlice";

export const store = configureStore({
  reducer: {
    windowSize: windowSizeSlice,
    showModal: modalsSlice,
    slugs: slugsSlice,
    filters: filtersSlice,
    persons: personsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
