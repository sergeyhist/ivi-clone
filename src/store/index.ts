import {combineReducers, configureStore, Store} from "@reduxjs/toolkit";
import windowSizeSlice from "./slices/windowSizeSlice";
import modalsSlice from "./slices/modalsSlice";
import slugsSlice from "/src/store/slices/slugsSlice";
import filtersSlice from "./slices/filtersSlice";
import authSlice from "/src/store/slices/authSlice";
import {PreloadedState} from "redux";

export const reducersConfig = {
    windowSize: windowSizeSlice,
    showModal: modalsSlice,
    slugs: slugsSlice,
    filters: filtersSlice,
    auth: authSlice,
}

export const store = configureStore({
  reducer: reducersConfig
});

const rootReducer = combineReducers(reducersConfig);

export const setupStore= (preloadedState?: PreloadedState<RootState>): Store<RootState> =>{
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof  setupStore>
export type AppDispatch = typeof store.dispatch;
