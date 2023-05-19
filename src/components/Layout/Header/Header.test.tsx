import { act, fireEvent, screen } from "@testing-library/react";
import styles from "./Header.module.sass";
import Header from "/src/components/Layout/Header/Header";
import { setWindowSize } from "/src/store/slices/windowSizeSlice";
import React from "react";
import { renderWithProviders } from "/src/utils/test-utils";

jest.mock("next/router", () => require("next-router-mock"));

describe("Actions", () => {
  it("renders without errors", () => {
    renderWithProviders(<Header />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("should set state to true after mouse over", () => {
    const setState = jest.fn();
    jest
      .spyOn(React, "useState")
      .mockImplementationOnce((initState) => [initState, setState]);
    renderWithProviders(<Header />);
    const header = screen.getByTestId("header");
    fireEvent.mouseOver(header);
    expect(setState).toHaveBeenCalledWith(false);
    fireEvent.mouseLeave(header);
    expect(setState).toBeCalledTimes(2);
  });

  it("should set headerContentClassName to active when dropdown is active and window width is greater than 1160", () => {
    const { store } = renderWithProviders(<Header />);
    act(() => store.dispatch(setWindowSize({ width: 1960, height: 1200 })));
    const headerContent = screen.getByTestId("header-content");
    const tv = screen.getByText("TV+");
    fireEvent.mouseOver(tv);

    expect(headerContent).toHaveClass(`${styles.header__content_active}`);
  });
});
