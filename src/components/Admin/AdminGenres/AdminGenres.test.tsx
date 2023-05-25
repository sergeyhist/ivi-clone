import React from "react";
import AdminGenres from "./AdminGenres";
import { renderWithProviders } from "/src/utils/test-utils";
import { fireEvent, screen } from "@testing-library/react";
import { mockGenre } from "/src/utils/mocks/genres";
import { useGetGenres } from "/src/api/genres";

jest.mock("next/router", () => require("next-router-mock"));

jest.mock("src/api/genres", () => ({
  useGetGenres: jest.fn(() => jest.fn().mockReturnThis()),
}));

const mockGenres = new Array(17).fill(mockGenre);

describe("AdminGenres", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should render with 1 movie", () => {
    (useGetGenres as jest.Mock).mockReturnValue({ data: [mockGenre] });
    renderWithProviders(<AdminGenres />);
    expect(screen.getByTestId("admin-genres")).toBeInTheDocument();
    expect(screen.getByTestId("admin-genre")).toBeInTheDocument();
  });
  it("should render without movie", () => {
    (useGetGenres as jest.Mock).mockReturnValue({
      data: mockGenres,
    });
    renderWithProviders(<AdminGenres />);
    expect(screen.getByTestId("more-genres-button")).toBeInTheDocument();
    expect(screen.getAllByTestId("admin-genre").length).toBe(10);
    fireEvent.click(screen.getByTestId("more-genres-button"));
    expect(screen.getAllByTestId("admin-genre").length).toBe(17);
  });
  it("should render without movie", () => {
    (useGetGenres as jest.Mock).mockReturnValue({
      data: undefined,
    });
    renderWithProviders(<AdminGenres />);
    expect(screen.getByTestId("admin-genres")).toBeInTheDocument();
  });
});
