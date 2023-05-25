import { screen } from "@testing-library/react";
import React from "react";
import MovieOption from "./MovieOption";
import { renderWithProviders } from "/src/utils/test-utils";

jest.mock("next/router", () => require("next-router-mock"));

describe("MovieOption", () => {
  it("should renders without errors", () => {
    renderWithProviders(<MovieOption>MovieOption</MovieOption>);
    expect(screen.getByTestId("movie-option")).toBeInTheDocument();
  });
  it("should renders with title", () => {
    renderWithProviders(<MovieOption title={"title"}>MovieOption</MovieOption>);
    expect(screen.getByTestId("movie-option-title")).toBeInTheDocument();
  });
});
