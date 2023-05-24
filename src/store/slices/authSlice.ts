import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

const initialState: UserAuth ={
  isLogged: false,
  userEmail: "",
}

export interface UserAuth{
  isLogged: boolean;
  userEmail: string;
  role?: string;
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<UserAuth>) => {
      state.isLogged = action.payload.isLogged;
      state.userEmail = action.payload.userEmail;
      state.role = action.payload.role;
    },
    setRole:(state,action:PayloadAction<string | undefined>)=>{
      state.role = action.payload;
    }
  },
});

export const {setAuth,setRole} = authSlice.actions;
export default authSlice.reducer;
