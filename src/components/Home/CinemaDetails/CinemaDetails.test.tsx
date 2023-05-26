import React from "react";
import CinemaDetails from "./CinemaDetails";
import { renderWithProviders } from "/src/utils/test-utils";
import { screen } from "@testing-library/react";

jest.mock("next/router", () => require("next-router-mock"));

describe("CinemaDetails", () => {
  it("should renders without errors", () => {
    renderWithProviders(<CinemaDetails />);
    expect(screen.getByTestId("cinema-details")).toBeInTheDocument();
  });
});
