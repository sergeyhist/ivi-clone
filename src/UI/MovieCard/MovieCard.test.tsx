import { screen } from "@testing-library/react";
import React from "react";
import MovieCard from "./MovieCard";
import { mockMovie } from "/src/utils/mocks/movies";
import { renderWithProviders } from "/src/utils/test-utils";

jest.mock("next/router", () => require("next-router-mock"));

describe("MovieCard", () => {
  it("should renders without errors", () => {
    renderWithProviders(<MovieCard content={mockMovie} />);
    expect(screen.getByTestId("movie-card")).toBeInTheDocument();
  });
});
