import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import IWindowSize from "/src/types/IWindowSize";

const initialState: IWindowSize = { width: 0, height: 0 };

export const windowSizeSlice = createSlice({
  name: "windowSize",
  initialState,
  reducers: {
    setWindowSize: (state, action: PayloadAction<IWindowSize>) => {
      state.width = action.payload.width;
      state.height = action.payload.height;
    },
  },
});

export const { setWindowSize } = windowSizeSlice.actions;
export default windowSizeSlice.reducer;
