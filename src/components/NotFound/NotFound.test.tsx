import React from "react";
import NotFound from "./NotFound";
import { renderWithProviders } from "/src/utils/test-utils";
import { screen } from "@testing-library/react";

jest.mock("next/router", () => require("next-router-mock"));

describe("NotFound", () => {
  it("should render without errors", () => {
    renderWithProviders(
      <NotFound linkRoute="/" linkText="link" contentText="title" />
    );
    expect(screen.getByTestId("not-found")).toBeInTheDocument();
  });
});
