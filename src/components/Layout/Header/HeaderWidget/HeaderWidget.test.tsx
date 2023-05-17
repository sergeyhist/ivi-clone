import { fireEvent, render, screen } from "@testing-library/react";
import HeaderWidget from "/src/components/Layout/Header/HeaderWidget/HeaderWidget";
import React from "react";

describe("BottomInfo", () => {
  it("should render without errors", () => {
    render(<HeaderWidget />);
    expect(screen.getByTestId("header-widget")).toBeInTheDocument();
  });

  it("sets isBottomActive to true on mouse over", () => {
    const setState = jest.fn();
    jest
      .spyOn(React, "useState")
      .mockImplementationOnce((initState) => [initState, setState]);
    render(<HeaderWidget />);
    const widget = screen.getByTestId("header-widget");

    fireEvent.mouseOver(widget);
    expect(setState).toHaveBeenCalledWith(true);
  });

  it("sets isBottomActive to false on mouse leave", () => {
    const setState = jest.fn();
    jest
      .spyOn(React, "useState")
      .mockImplementationOnce((initState) => [initState, setState]);
    render(<HeaderWidget />);
    const widget = screen.getByTestId("header-widget");

    fireEvent.mouseLeave(widget);
    expect(setState).toBeCalledTimes(1);
  });
});
