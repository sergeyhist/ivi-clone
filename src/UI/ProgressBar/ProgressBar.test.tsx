import { screen } from "@testing-library/react";
import React from "react";
import ProgressBar from "./ProgressBar";
import { renderWithProviders } from "/src/utils/test-utils";

jest.mock("next/router", () => require("next-router-mock"));

describe("ProgressBar", () => {
  it("should renders without errors", () => {
    renderWithProviders(<ProgressBar value={50} />);
    expect(screen.getByTestId("progress-bar")).toBeInTheDocument();
  });
});
