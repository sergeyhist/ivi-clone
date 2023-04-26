import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalStates {
  showSearchModal: boolean;
  showAuthModal: boolean;
}

const initialState: ModalStates = {
  showAuthModal: false,
  showSearchModal: false,
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
    },
  },
});

export const { setShowModal } = modalsSlice.actions;
export default modalsSlice.reducer;

