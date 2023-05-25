import React from "react";
import AdminGenres from "./AdminGenres";
import { renderWithProviders } from "/src/utils/test-utils";
import { screen } from "@testing-library/react";
import { mockGenre } from "/src/utils/mocks/genres";
import { useGetGenres } from "/src/api/genres";

jest.mock("next/router", () => require("next-router-mock"));

jest.mock("src/api/genres", () => ({
  useGetGenres: jest.fn(() => jest.fn().mockReturnThis()),
}));

describe("AdminGenres", () => {
  it("should render with 1 movie", () => {
    (useGetGenres as jest.Mock).mockImplementation(() => ({ data: [mockGenre] }));
    renderWithProviders(<AdminGenres />);
    expect(screen.getByTestId("admin-genres")).toBeInTheDocument();
    expect(screen.getByTestId("admin-genre")).toBeInTheDocument();
  });
  it("should render with 1 movie", () => {
    (useGetGenres as jest.Mock).mockImplementation(() => ({ data: undefined }));
    renderWithProviders(<AdminGenres />);
    expect(screen.getByTestId("admin-genres")).toBeInTheDocument();
  });
});
