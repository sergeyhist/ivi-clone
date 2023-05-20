import React from "react";
import BannerSlider from "./BannerSlider";
import { renderWithProviders } from "/src/utils/test-utils";
import { screen } from "@testing-library/react";

jest.mock("next/router", () => require("next-router-mock"));

describe("BannerSlider", () => {
  it("should renders without errors", () => {
    renderWithProviders(<BannerSlider />);
    expect(screen.getByTestId("banner-slider")).toBeInTheDocument();
    screen.getAllByTestId("banner-slide").forEach((slide) => {
      expect(slide).toBeInTheDocument();
    });
  });
});
