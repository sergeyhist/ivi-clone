import { screen } from "@testing-library/react";
import React from "react";
import MovieMedallions from "./MovieMedallions";
import { mockMovie } from "/src/utils/mocks/movies";
import { renderWithProviders } from "/src/utils/test-utils";
import { mockPerson } from "/src/utils/mocks/person";

jest.mock("next/router", () => require("next-router-mock"));

describe("MovieMedallions", () => {
  it("should renders without errors", () => {
    renderWithProviders(
      <MovieMedallions movie={mockMovie} persons={[mockPerson]} />
    );
    expect(screen.getByTestId("medallions")).toBeInTheDocument();
    expect(screen.getByTestId("medallions-rating")).toHaveClass(
      "medallion__grade_fine"
    );
  });
  it("should renders without errors", () => {
    mockMovie.rating = 5;
    renderWithProviders(
      <MovieMedallions movie={mockMovie} persons={[mockPerson]} />
    );
    expect(screen.getByTestId("medallions-rating")).toHaveTextContent("0");
    expect(screen.getByTestId("medallions-rating")).not.toHaveClass(
      "medallion__grade_fine"
    );
  });
});
