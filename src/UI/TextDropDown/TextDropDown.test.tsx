import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import TextDropDown from "./TextDropDown";
import { renderWithProviders } from "/src/utils/test-utils";

jest.mock("next/router", () => require("next-router-mock"));

describe("TextDropDown", () => {
  it("should renders without errors", () => {
    renderWithProviders(
      <TextDropDown>
        <p>Lorem ipsum dolor sit amet.</p>
      </TextDropDown>
    );
    expect(screen.getByTestId("text-dropdown")).toBeInTheDocument();
  });
  it("should work toggle", () => {
    renderWithProviders(
      <TextDropDown textHeight={110}>
        <p>Lorem ipsum dolor sit amet.</p>
      </TextDropDown>
    );
    const toggle = screen.getByTestId("toggle-dropdown");
    const dropDown = screen.getByTestId("text-dropdown");
    expect(dropDown).not.toHaveClass("dropdown_active");
    fireEvent.click(toggle);
    expect(dropDown).toHaveClass("dropdown_active");
  });
  it("should render toggle", () => {
    renderWithProviders(
      <TextDropDown>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </TextDropDown>
    );
    expect(screen.getByTestId("toggle-dropdown")).toBeInTheDocument();
  });
});
