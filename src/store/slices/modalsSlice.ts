import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ModalStates{
  showSearchModal: boolean,
  showAuthModal: boolean,
}

const initialState:ModalStates = {showAuthModal:false,showSearchModal:false};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setShowAuthModal: (state, action: PayloadAction<{ showAuthModal: boolean }>) => {
      state.showAuthModal = action.payload.showAuthModal;
    },
    setShowSearchModal: (state, action: PayloadAction<{ showSearchModal: boolean }>) => {
      state.showSearchModal= action.payload.showSearchModal;
    },
  }
});

export const {setShowAuthModal,setShowSearchModal} = modalsSlice.actions;
export default modalsSlice.reducer;