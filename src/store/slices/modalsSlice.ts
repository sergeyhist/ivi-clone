import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalStates {
  showSearchModal: boolean;
  showAuthModal: boolean;
  showMovieInfoModal: boolean;
}

const initialState: ModalStates = {
  showAuthModal: false,
  showSearchModal: false,
  showMovieInfoModal: false,
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setShowModal: (
      state,
      action: PayloadAction<ModalStates>
    ) => {
      state.showAuthModal = action.payload.showAuthModal;
      state.showSearchModal = action.payload.showSearchModal;
      state.showMovieInfoModal = action.payload.showMovieInfoModal;
    },
  },
});

export const { setShowModal } = modalsSlice.actions;
export default modalsSlice.reducer;

