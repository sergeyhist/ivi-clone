import React from "react";
import TopTen from "./TopTen";
import { renderWithProviders } from "/src/utils/test-utils";
import { screen } from "@testing-library/react";

jest.mock("next/router", () => require("next-router-mock"));

describe("BannerSlider", () => {
  it("should renders without errors", () => {
    renderWithProviders(<TopTen />);
    expect(screen.getByTestId("topten-slider")).toBeInTheDocument();
  });
});
