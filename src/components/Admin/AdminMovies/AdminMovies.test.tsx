import React from "react";
import AdminMovies from "./AdminMovies";
import { renderWithProviders } from "/src/utils/test-utils";
import { screen } from "@testing-library/react";
import { useGetMovies } from "/src/api/movie";
import { mockMovie } from "/src/utils/movie";

jest.mock("next/router", () => require("next-router-mock"));

jest.mock("src/api/movie", () => ({
  useGetMovies: jest.fn(() => jest.fn().mockReturnThis()),
}));

describe("AdminMovies", () => {
  it("should render with 1 movie", () => {
    (useGetMovies as jest.Mock).mockImplementation(() => ({ data: [mockMovie] }));
    renderWithProviders(<AdminMovies />);
    expect(screen.getByTestId("admin-movies")).toBeInTheDocument();
    expect(screen.getByTestId("admin-movie")).toBeInTheDocument();
    expect(screen.getByTestId("admin-search-movie")).toBeInTheDocument();
  });
  it("should render without movie", () => {
    jest.spyOn(React, "useState").mockImplementation(() => ["movies", jest.fn()]);
    (useGetMovies as jest.Mock).mockImplementation(() => ({ data: undefined }));
    renderWithProviders(<AdminMovies />);
    expect(screen.getByTestId("admin-movies")).toBeInTheDocument();
  });
});
