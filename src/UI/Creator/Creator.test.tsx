import React from "react";
import Creator from "./Creator";
import { renderWithProviders } from "/src/utils/test-utils";
import { mockPerson } from "/src/utils/person";

jest.mock("next/router", () => require("next-router-mock"));

describe("Creator", () => {
  it("should renders without errors", () => {
    renderWithProviders(<Creator person={mockPerson} />);
  });
  it("should render modal type", () => {
    renderWithProviders(<Creator type="modal" person={mockPerson} />);
  });
});
