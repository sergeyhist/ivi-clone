import { screen } from "@testing-library/react";
import React from "react";
import MovieRating from "./MovieRating";
import { renderWithProviders } from "/src/utils/test-utils";

jest.mock("next/router", () => require("next-router-mock"));

describe("MovieRating", () => {
  it("should renders without errors", () => {
    renderWithProviders(<MovieRating grade={5.7} grades={123333} />);
    expect(screen.getByTestId("movie-rating")).toBeInTheDocument();
    expect(screen.getByTestId("movie-rating-grade")).not.toHaveClass(
      "rating__grade_fine"
    );
  });
  it("should renders without errors", () => {
    renderWithProviders(<MovieRating grade={7} grades={123333} />);
    expect(screen.getByTestId("movie-rating-grade")).toHaveTextContent("0");
    expect(screen.getByTestId("movie-rating-grade")).toHaveClass(
      "rating__grade_fine"
    );
  });
});
