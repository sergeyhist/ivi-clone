import React from "react";
import AdminMovies from "./AdminMovies";
import { renderWithProviders } from "/src/utils/test-utils";
import { fireEvent, screen } from "@testing-library/react";
import { useGetMovies } from "/src/api/movie";
import { mockMovie } from "/src/utils/mocks/movies";

jest.mock("next/router", () => require("next-router-mock"));

jest.mock("src/api/movie", () => ({
  useGetMovies: jest.fn(() => jest.fn().mockReturnThis()),
}));

const mockMovies = new Array(17).fill(mockMovie);

describe("AdminMovies", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should render with 1 movie", () => {
    (useGetMovies as jest.Mock).mockReturnValue({
      data: [mockMovie],
    });
    renderWithProviders(<AdminMovies />);
    expect(screen.getByTestId("admin-movies")).toBeInTheDocument();
    expect(screen.getByTestId("admin-movie")).toBeInTheDocument();
    expect(screen.getByTestId("admin-search-movie")).toBeInTheDocument();
  });
  it("should render without movie", () => {
    (useGetMovies as jest.Mock).mockReturnValue({
      data: mockMovies,
    });
    renderWithProviders(<AdminMovies />);
    expect(screen.getByTestId("more-movies-button")).toBeInTheDocument();
    expect(screen.getAllByTestId("admin-movie").length).toBe(10);
    fireEvent.click(screen.getByTestId("more-movies-button"));
    expect(screen.getAllByTestId("admin-movie").length).toBe(17);
  });
  it("should render without movie", () => {
    (useGetMovies as jest.Mock).mockReturnValue({
      data: undefined,
    });
    renderWithProviders(<AdminMovies />);
    expect(screen.getByTestId("admin-movies")).toBeInTheDocument();
  });
  it("should render without movie", () => {
    (useGetMovies as jest.Mock).mockImplementationOnce((key) => key);
    jest.spyOn(React, "useState").mockImplementationOnce(() => ["movie", jest.fn()]);
    renderWithProviders(<AdminMovies />);
    expect(useGetMovies).toReturnWith("/name/films?name=movie");
  });
});
