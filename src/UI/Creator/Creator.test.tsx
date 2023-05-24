import React from "react";
import Creator from "./Creator";
import { renderWithProviders } from "/src/utils/test-utils";
import { screen } from "@testing-library/react";
import { mockPerson } from "/src/utils/mocks/person";

jest.mock("next/router", () => require("next-router-mock"));

describe("Creator", () => {
  it("should renders without errors", () => {
    renderWithProviders(<Creator person={mockPerson} />);
    expect(screen.getByTestId("creator")).toBeInTheDocument();
  });
  it("should render modal type", () => {
    renderWithProviders(<Creator type="modal" person={mockPerson} />);
    expect(screen.getByTestId("creator")).toHaveClass("creator_modal");
  });
});
