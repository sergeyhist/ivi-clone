import React from "react";
import BreadCrumbs from "./BreadCrumbs";
import { renderWithProviders } from "/src/utils/test-utils";
import { screen } from "@testing-library/react";
import { getRoutes, getPrevRoute } from "./BreadCrumbs.utils";

jest.mock("next/router", () => require("next-router-mock"));

describe("BreadCrumbs", () => {
  it("should renders without errors", () => {
    renderWithProviders(<BreadCrumbs />);
    expect(screen.getByTestId("breadcrumbs")).toBeInTheDocument();
    expect(screen.getAllByTestId("default-route").length).toBe(1);
  });
  it("should renders with mobile version", () => {
    renderWithProviders(<BreadCrumbs mobileVersion />);
    expect(screen.getByTestId("breadcrumbs")).toHaveClass("section_mobile");
  });
  it("should renders with slash type", () => {
    renderWithProviders(<BreadCrumbs type="slash" />);
    expect(screen.getByTestId("breadcrumbs-list")).toHaveClass("list_slash");
  });
  it("should renders with custom routes", () => {
    renderWithProviders(<BreadCrumbs customRoutes={["/", "/movies"]} />);
    expect(screen.getAllByTestId("custom-route").length).toBe(2);
  });
});

describe("BreadCrumbs utils", () => {
  const route = "/movies/[id]";
  it("should return routes", () => {
    expect(getRoutes(route)).toContain("/");
    expect(getRoutes(route)).toContain("/movies/");
    expect(getRoutes(route)).not.toContain("/movies/[id]/");
    expect(getRoutes("/person/[id]/")).not.toContain("/person/");
  });
  it("should return prev route", () => {
    expect(getPrevRoute(route)).toEqual("/movies/");
  });
});
