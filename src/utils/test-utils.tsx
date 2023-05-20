import { ReactNode } from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { reducersSetup } from "/src/store";
import { configureStore } from "@reduxjs/toolkit";
import { IProviderRender } from "../types/IRender";

export const renderWithProviders = (children: ReactNode): IProviderRender => {
  const store = configureStore({ reducer: reducersSetup });
  const component = render(<Provider store={store}>{children}</Provider>);

  return { store, component };
};
