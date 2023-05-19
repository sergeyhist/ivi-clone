import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

export interface SlugsState {
  genresSlugs:string[];
  countriesSlugs: string[];
}

const initialState: SlugsState = {
  genresSlugs: [],
  countriesSlugs:[],
};
export const slugsSlice = createSlice({
  name: "slugs",
  initialState,
  reducers: {
    setSlugs: (state, action: PayloadAction<SlugsState>) => {
      state.genresSlugs = action.payload.genresSlugs;
      state.countriesSlugs = action.payload.countriesSlugs;
    },
  },
});

export const {setSlugs} = slugsSlice.actions;
export default slugsSlice.reducer;
