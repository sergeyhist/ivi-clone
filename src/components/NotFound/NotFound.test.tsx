import React from "react";
import NotFound from "./NotFound";
import { renderWithProviders } from "/src/utils/test-utils";

jest.mock("next/router", () => require("next-router-mock"));

describe("BannerSlider", () => {
  it("should render without errors", () => {
    renderWithProviders(<NotFound title="title" />);
  });
});
