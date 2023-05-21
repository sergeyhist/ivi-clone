import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import Slider from "./Slider";
import { renderWithProviders } from "/src/utils/test-utils";

jest.mock("next/router", () => require("next-router-mock"));

describe("Slider", () => {
  it("should renders without errors", () => {
    renderWithProviders(
      <Slider dataTestId="slider">
        <div></div>
      </Slider>
    );
    expect(screen.getByTestId("slider")).toBeInTheDocument();
  });
  it("should works events without errors", () => {
    renderWithProviders(
      <Slider>
        <div></div>
      </Slider>
    );
    const next = screen.getByTestId("next-button");
    const prev = screen.getByTestId("prev-button");
    fireEvent.click(next);
    fireEvent.click(prev);
  });
  it("should renders without errors with always-with-buttons type", () => {
    renderWithProviders(
      <Slider dataTestId="slider" type="always-with-buttons">
        <div></div>
      </Slider>
    );
    expect(screen.getByTestId("slider")).toBeInTheDocument();
  });
});
