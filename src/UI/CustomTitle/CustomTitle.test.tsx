import { screen } from "@testing-library/react";
import React from "react";
import CustomTitle from "./CustomTitle";
import { renderWithProviders } from "/src/utils/test-utils";

jest.mock("next/router", () => require("next-router-mock"));

describe("CustomTitle", () => {
  it("should renders without errors", () => {
    renderWithProviders(<CustomTitle title="title" />);
    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("title")).toHaveClass("title_default");
  });
  it("should renders with link type", () => {
    renderWithProviders(<CustomTitle title="title" type="link" />);
    expect(screen.getByTestId("title")).toHaveClass("title_link");
  });
  it("should renders with underline type", () => {
    renderWithProviders(<CustomTitle title="title" type="underline" />);
    expect(screen.getByTestId("title")).toHaveClass("title_underline");
  });
  it("should renders with large type", () => {
    renderWithProviders(<CustomTitle title="title" type="large" />);
    expect(screen.getByTestId("title")).toHaveClass("title_large");
  });
  it("should renders with medium type", () => {
    renderWithProviders(<CustomTitle title="title" type="medium" />);
    expect(screen.getByTestId("title")).toHaveClass("title_medium");
  });
  it("should renders with small type", () => {
    renderWithProviders(<CustomTitle title="title" type="small" />);
    expect(screen.getByTestId("title")).toHaveClass("title_small");
  });
});
