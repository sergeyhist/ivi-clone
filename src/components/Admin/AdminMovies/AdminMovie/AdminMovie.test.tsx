import React from "react";
import AdminMovie from "./AdminMovie";
import { renderWithProviders } from "/src/utils/test-utils";
import { fireEvent, screen } from "@testing-library/react";
import { mockMovie } from "/src/utils/mocks/movies";
import { deleteMovieById, updateMovie } from "/src/api/movie";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

jest.mock("src/api/movie", () => ({
  updateMovie: jest.fn(() => jest.fn().mockReturnThis()),
  deleteMovieById: jest.fn(() => jest.fn().mockReturnThis()),
}));

describe("AdminMovie", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render without errors", () => {
    (updateMovie as jest.Mock).mockImplementation(() => Promise.resolve(mockMovie));
    renderWithProviders(<AdminMovie movie={mockMovie} />);
    expect(screen.getByTestId("admin-movie")).toBeInTheDocument();
    expect(updateMovie).not.toBeCalled();
  });

  it("should submit movie", () => {
    (updateMovie as jest.Mock).mockImplementation(() => Promise.resolve(mockMovie));
    renderWithProviders(<AdminMovie movie={mockMovie} />);
    fireEvent.click(screen.getByTestId("movie-input-en-button"));
    expect(screen.getByTestId("admin-movie")).toBeInTheDocument();
    expect(updateMovie).toBeCalled();
  });

  it("should submit movie", () => {
    mockRouter.locale = "ru";
    (updateMovie as jest.Mock).mockImplementation(() => Promise.resolve(mockMovie));
    renderWithProviders(<AdminMovie movie={mockMovie} />);
    fireEvent.click(screen.getByTestId("movie-input-ru-button"));
    expect(screen.getByTestId("admin-movie")).toBeInTheDocument();
    expect(updateMovie).toBeCalled();
  });

  it("should submit movie", () => {
    mockRouter.locale = "en";
    (updateMovie as jest.Mock).mockImplementation(() => Promise.resolve(undefined));
    renderWithProviders(<AdminMovie movie={mockMovie} />);
    fireEvent.click(screen.getByTestId("movie-input-ru-button"));
    expect(screen.getByTestId("admin-movie")).toBeInTheDocument();
    expect(updateMovie).toBeCalled();
  });

  it("should delete movie", () => {
    jest.spyOn(React, "useState").mockImplementation(() => ["", jest.fn()]);
    (deleteMovieById as jest.Mock).mockImplementation(() =>
      Promise.resolve(jest.fn())
    );
    renderWithProviders(<AdminMovie movie={mockMovie} />);
    fireEvent.click(screen.getByTestId("delete-button"));
    expect(deleteMovieById).toBeCalled();
  });
});
