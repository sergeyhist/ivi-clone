import React from "react";
import PromoButtons from "./PromoButtons";
import { renderWithProviders } from "/src/utils/test-utils";
import { screen } from "@testing-library/react";

jest.mock("next/router", () => require("next-router-mock"));

describe("PromoButtons", () => {
  it("should renders without errors", () => {
    renderWithProviders(<PromoButtons />);
    expect(screen.getByTestId("promo-buttons")).toBeInTheDocument();
  });
});
