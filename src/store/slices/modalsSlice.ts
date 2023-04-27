import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InfoTabs } from "/src/types/InfoTabs";

interface IMovieInfoModal {
  isShow: boolean;
  defaultTab?: InfoTabs;
}

interface ModalStates {
  showSearchModal: boolean;
  showAuthModal: boolean;
  showMovieInfoModal: IMovieInfoModal;
}

const initialState: ModalStates = {
  showAuthModal: false,
  showSearchModal: false,
  showMovieInfoModal: { isShow: false },
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setShowModal: (state, action: PayloadAction<ModalStates>) => {
      state.showAuthModal = action.payload.showAuthModal;
      state.showSearchModal = action.payload.showSearchModal;
      state.showMovieInfoModal = action.payload.showMovieInfoModal;
    },
  },
});

export const { setShowModal } = modalsSlice.actions;
export default modalsSlice.reducer;
