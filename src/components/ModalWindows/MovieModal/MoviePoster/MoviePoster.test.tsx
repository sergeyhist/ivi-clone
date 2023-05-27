import React from "react";
import MoviePoster from "./MoviePoster";
import { mockMovie } from "/src/utils/mocks/movies";
import { renderWithProviders } from "/src/utils/test-utils";

jest.mock("next/router", () => require("next-router-mock"));

describe("MoviePoster", () => {
  it("should open and close without errors", () => {
    renderWithProviders(<MoviePoster content={mockMovie} />);
  });
  it("should open and close without errors", () => {
    mockMovie.rating = 5;
    renderWithProviders(<MoviePoster content={mockMovie} />);
  });
});
