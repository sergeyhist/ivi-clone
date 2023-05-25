import React from "react";
import AdminGenre from "./AdminGenre";
import { renderWithProviders } from "/src/utils/test-utils";
import { fireEvent, screen } from "@testing-library/react";
import { updateGenre } from "/src/api/genres";
import { mockGenre } from "/src/utils/mocks/genres";

jest.mock("next/router", () => require("next-router-mock"));

jest.mock("src/api/genres", () => ({
  updateGenre: jest.fn(() => jest.fn().mockReturnThis()),
}));

describe("AdminMovie", () => {
  it("should render without errors", () => {
    (updateGenre as jest.Mock).mockImplementation(() => Promise.resolve(mockGenre));
    renderWithProviders(<AdminGenre genre={mockGenre} />);
    expect(screen.getByTestId("admin-genre")).toBeInTheDocument();
    expect(updateGenre).not.toBeCalled();
  });
  it("should render without errors", () => {
    (updateGenre as jest.Mock).mockImplementation(() => Promise.resolve(mockGenre));
    renderWithProviders(<AdminGenre genre={mockGenre} />);
    fireEvent.submit(screen.getByTestId("admin-genre-form"));
    expect(screen.getByTestId("admin-genre")).toBeInTheDocument();
    expect(updateGenre).toBeCalled();
  });
});
