import React from "react";
import CreatorsList from "./CreatorsList";
import { renderWithProviders } from "/src/utils/test-utils";
import { fireEvent, screen } from "@testing-library/react";
import { mockPerson } from "/src/utils/mocks/person";

jest.mock("next/router", () => require("next-router-mock"));

describe("CreatorsList", () => {
  it("should renders without errors", () => {
    renderWithProviders(<CreatorsList persons={[mockPerson]} />);
    expect(screen.getByTestId("creators-list")).toBeInTheDocument();
  });
  it("should works event", () => {
    renderWithProviders(<CreatorsList persons={[mockPerson]} />);
    fireEvent.click(screen.getByTestId("open-creators-modal"));
  });
});
