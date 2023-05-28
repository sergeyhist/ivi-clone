import React from "react";
import AdminGenre from "./AdminGenre";
import { renderWithProviders } from "/src/utils/test-utils";
import { fireEvent, screen } from "@testing-library/react";
import { updateGenre } from "/src/api/genres";
import { mockGenre } from "/src/utils/mocks/genres";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

jest.mock("src/api/genres", () => ({
  updateGenre: jest.fn(() => jest.fn().mockReturnThis()),
}));

describe("AdminMovie", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render without errors", () => {
    (updateGenre as jest.Mock).mockImplementation(() => Promise.resolve(mockGenre));
    renderWithProviders(<AdminGenre genre={mockGenre} />);
    expect(screen.getByTestId("admin-genre")).toBeInTheDocument();
    expect(updateGenre).not.toBeCalled();
  });
  it("should submit form", () => {
    mockRouter.locale = "ru";
    (updateGenre as jest.Mock).mockImplementation(() => Promise.resolve(mockGenre));
    renderWithProviders(<AdminGenre genre={mockGenre} />);
    fireEvent.click(screen.getByTestId("genre-input-ru-button"));
    expect(updateGenre).toBeCalled();
  });
  it("should submit form", () => {
    mockRouter.locale = "en";
    (updateGenre as jest.Mock).mockImplementation(() => Promise.resolve(mockGenre));
    renderWithProviders(<AdminGenre genre={mockGenre} />);
    fireEvent.click(screen.getByTestId("genre-input-ru-button"));
    expect(updateGenre).toBeCalled();
  });
  it("should submit form", () => {
    (updateGenre as jest.Mock).mockImplementation(() => Promise.resolve(undefined));
    renderWithProviders(<AdminGenre genre={mockGenre} />);
    fireEvent.click(screen.getByTestId("genre-input-ru-button"));
    expect(updateGenre).toBeCalled();
  });
});
