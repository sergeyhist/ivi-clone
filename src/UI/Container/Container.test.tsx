import React from "react";
import Container from "./Container";
import { renderWithProviders } from "/src/utils/test-utils";
import { screen } from "@testing-library/react";

jest.mock("next/router", () => require("next-router-mock"));

describe("Container", () => {
  it("should renders without errors", () => {
    renderWithProviders(
      <Container>
        <div></div>
      </Container>
    );
    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument();
  });
});
