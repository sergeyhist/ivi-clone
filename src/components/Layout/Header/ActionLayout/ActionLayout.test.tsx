import { screen } from "@testing-library/react";
import { renderWithProviders } from "/src/utils/test-utils";
import Header from "../Header";

jest.mock("next/router", () => require("next-router-mock"));

describe("ActionLayout", () => {
  it("should renders without errors", () => {
    renderWithProviders(<Header />);
    expect(screen.getByTestId("actionLayout-container")).toBeInTheDocument();
  });
});
