import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InfoTabs } from "/src/types/InfoTabs";

export interface IMovieModal {
  isShow: boolean;
  defaultTab: InfoTabs;
}

export interface ModalStates {
  showSearchModal: boolean;
  showAuthModal: boolean;
  showMovieModal: IMovieModal;
}

const initialState: ModalStates = {
  showAuthModal: false,
  showSearchModal: false,
  showMovieModal: { isShow: false, defaultTab: "actors" },
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setShowMovieModal: (state, action: PayloadAction<IMovieModal>) => {
      state.showMovieModal = action.payload;
    },
    setShowSearchModal: (state, action: PayloadAction<boolean>) => {
      state.showSearchModal = action.payload;
    },
    setShowAuthModal: (state, action: PayloadAction<boolean>) => {
      state.showAuthModal = action.payload;
    },
  },
});

export const {
  setShowMovieModal,
  setShowAuthModal,
  setShowSearchModal,
} = modalsSlice.actions;
export default modalsSlice.reducer;
