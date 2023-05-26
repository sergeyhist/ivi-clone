import React from "react";
import AdminTabs from "./AdminTabs";
import { renderWithProviders } from "/src/utils/test-utils";
import { fireEvent, screen } from "@testing-library/react";

jest.mock("next/router", () => require("next-router-mock"));

describe("AdminTabs", () => {
  it("should renders without errors", () => {
    renderWithProviders(
      <AdminTabs selectedTab={"movies"} setSelectedTab={jest.fn()} />
    );
    expect(screen.getByTestId("admin-tabs")).toBeInTheDocument();
    expect(screen.getByTestId("button-movies-tab")).toHaveClass("tab tab_active");
    expect(screen.getByTestId("button-genres-tab")).not.toHaveClass(
      "tab tab_active"
    );
  });
  it("should renders without errors", () => {
    const setSelectedTab = jest.fn();
    renderWithProviders(
      <AdminTabs selectedTab={"genres"} setSelectedTab={setSelectedTab} />
    );
    expect(screen.getByTestId("admin-tabs")).toBeInTheDocument();
    const buttonMoviesTab = screen.getByTestId("button-movies-tab");
    const buttonGenresTab = screen.getByTestId("button-genres-tab");
    expect(buttonGenresTab).toHaveClass("tab tab_active");
    expect(buttonMoviesTab).not.toHaveClass("tab tab_active");
    fireEvent.click(buttonMoviesTab);
    expect(setSelectedTab).toBeCalledTimes(1);
    fireEvent.click(buttonGenresTab);
    expect(setSelectedTab).toBeCalledTimes(2);
  });
});
