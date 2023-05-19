import type { RenderResult } from "@testing-library/react";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import {reducersSetup, RootState} from "/src/store";
import { configureStore } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/src/configureStore";


export const renderWithProviders = (
  children: ReactNode
): { store: ToolkitStore<RootState>; component: RenderResult} => {
  const store = configureStore({ reducer: reducersSetup });
  const component = render(<Provider store={store}>{children}</Provider>);

  return { store, component };
};
