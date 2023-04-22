import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

const initialState: {
  current: string
} = {current: (typeof window !== "undefined" && localStorage.getItem("currentLocale")) || "ru"}

export const localeSlice = createSlice({
  name: "locale",
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<string>) => {
      state.current = action.payload;
    },
  },
});

export const {setLocale} = localeSlice.actions;
export default localeSlice.reducer;
