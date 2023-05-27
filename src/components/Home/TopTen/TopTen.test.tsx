import React from "react";
import TopTen from "./TopTen";
import { renderWithProviders } from "/src/utils/test-utils";
import { screen } from "@testing-library/react";
import { mockMovie } from "/src/utils/mocks/movies";

jest.mock("next/router", () => require("next-router-mock"));

describe("TopTen", () => {
  it("should renders without errors", () => {
    renderWithProviders(<TopTen topTenMovies={[mockMovie]} />);
    expect(screen.getByTestId("topten-slider")).toBeInTheDocument();
  });
});
