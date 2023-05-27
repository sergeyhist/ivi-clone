import React from "react";
import HomeSliders from "./HomeSliders";
import { renderWithProviders } from "/src/utils/test-utils";
import { screen } from "@testing-library/react";
import { mockMovie } from "/src/utils/mocks/movies";

jest.mock("next/router", () => require("next-router-mock"));

describe("HomeSliders", () => {
  it("should renders without errors", () => {
    const compilation = { movies: [mockMovie], title: "title" };
    renderWithProviders(<HomeSliders compilations={[compilation]} />);
    expect(screen.getByTestId("home-compilations")).toBeInTheDocument();
  });
  it("should renders without movies", () => {
    const compilation = { movies: [], title: "title" };
    renderWithProviders(<HomeSliders compilations={[compilation]} />);
    expect(screen.getByTestId("home-compilations")).toBeInTheDocument();
  });
});
