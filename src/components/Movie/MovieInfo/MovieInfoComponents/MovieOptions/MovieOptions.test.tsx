import { screen } from "@testing-library/react";
import React from "react";
import MovieOptions from "./MovieOptions";
import { mockMovie } from "/src/utils/mocks/movies";
import { renderWithProviders } from "/src/utils/test-utils";

jest.mock("next/router", () => require("next-router-mock"));

describe("MovieOptions", () => {
  it("should renders without errors", () => {
    renderWithProviders(<MovieOptions movie={mockMovie} />);
    expect(screen.getByTestId("movie-options")).toBeInTheDocument();
  });
});
