import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

const initialState: UserAuth ={
  isLogged: false,
  userEmail: "",
}

interface UserAuth{
  isLogged: boolean;
  userEmail: string;
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<UserAuth>) => {
      state.isLogged = action.payload.isLogged;
      state.userEmail = action.payload.userEmail;
    },
  },
});

export const {setAuth} = authSlice.actions;
export default authSlice.reducer;
