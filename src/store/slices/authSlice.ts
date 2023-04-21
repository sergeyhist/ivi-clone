import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = false;

export const authSlice = createSlice({
    name: "showAuthModal",
    initialState,
    reducers: {
        setShowAuthModal: (state, action: PayloadAction<boolean>) => {
            return state = action.payload;
        },
    }
});

export const {setShowAuthModal} = authSlice.actions;
export default authSlice.reducer;