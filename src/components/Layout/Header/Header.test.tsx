import { fireEvent, render, screen } from "@testing-library/react";
import styles from "./Header.module.sass";
import { Provider } from "react-redux";
import { store } from "/src/store";
import Header from "/src/components/Layout/Header/Header";
import { setWindowSize } from "/src/store/slices/windowSizeSlice";
import React from "react";

jest.mock("next/router", () => require("next-router-mock"));
store.dispatch(setWindowSize({ width: 1960, height: 1200 }));

describe("Actions", () => {
  it("renders without errors", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
  it("should set state to true after mouse over", () => {
    const setState = jest.fn();
    jest
      .spyOn(React, "useState")
      .mockImplementationOnce((initState) => [initState, setState]);
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const header = screen.getByTestId("header");
    fireEvent.mouseOver(header);
    expect(setState).toHaveBeenCalledWith(false);
    fireEvent.mouseLeave(header);
    expect(setState).toBeCalledTimes(2);
  });
  it("should set headerContentClassName to active when dropdown is active and window width is greater than 1160", () => {
    store.dispatch(setWindowSize({ width: 1960, height: 1200 }));
    render(
      <Provider store={store}>
        <Header activeHeader={true} />
      </Provider>
    );
    const headerContent = screen.getByTestId("header-content");

    expect(headerContent).toHaveClass(`${styles.header__content_active}`);
  });
});
