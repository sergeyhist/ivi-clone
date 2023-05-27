import { screen } from "@testing-library/react";
import React from "react";
import MovieCardsRating from "./MovieCardsRating";
import { mockMovie } from "/src/utils/mocks/movies";
import { renderWithProviders } from "/src/utils/test-utils";

jest.mock("next/router", () => require("next-router-mock"));

describe("MovieCardsRating", () => {
  it("should renders without errors", () => {
    renderWithProviders(<MovieCardsRating content={mockMovie} />);
    expect(screen.getByTestId("movie-card-rating")).toBeInTheDocument();
    expect(screen.getByTestId("movie-card-rating-float")).toHaveTextContent("1");
  });
  it("should renders without errors", () => {
    mockMovie.rating = 5;
    renderWithProviders(<MovieCardsRating content={mockMovie} />);
    expect(screen.getByTestId("movie-card-rating-float")).toHaveTextContent("0");
  });
});
