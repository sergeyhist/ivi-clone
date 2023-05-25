import React from "react";
import CreatorsList from "./CreatorsList";
import { renderWithProviders } from "/src/utils/test-utils";
import { mockPerson } from "/src/utils/mocks/person";
import { fireEvent, screen } from "@testing-library/react";

jest.mock("next/router", () => require("next-router-mock"));

const mockPersons = new Array(17).fill(mockPerson);

describe("MovieModal", () => {
  it("should open and close without errors", () => {
    renderWithProviders(<CreatorsList persons={[mockPerson]} />);
    expect(screen.getByTestId("modal-creators-list")).toBeInTheDocument();
  });
  it("should open and close without errors", () => {
    renderWithProviders(<CreatorsList persons={mockPersons} />);
    expect(screen.getByTestId("modal-creators-list")).toBeInTheDocument();
    expect(screen.getAllByTestId("creator").length).toBe(16);
    fireEvent.click(screen.getByTestId("more-creators-button"));
    expect(screen.getAllByTestId("creator").length).toBe(17);
  });
});
