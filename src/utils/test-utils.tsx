import type { RenderResult } from "@testing-library/react";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import {store} from '/src/store';

export const renderWithProviders = (
  children: ReactNode,
): RenderResult  => {
  return render(
    <Provider store={store}>
      {children}
    </Provider>
  )
};
