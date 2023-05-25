import React from "react";
import SliderButtons from "./SliderButtons";
import { renderWithProviders } from "/src/utils/test-utils";

jest.mock("next/router", () => require("next-router-mock"));

const mockCallBack = (): void => undefined;

describe("SliderButtons", () => {
  it("should renders without errors", () => {
    renderWithProviders(
      <SliderButtons
        prevCallback={mockCallBack}
        nextCallback={mockCallBack}
        state={{ prev: true, next: true }}
      />
    );
  });
  it("should renders without state", () => {
    renderWithProviders(
      <SliderButtons prevCallback={mockCallBack} nextCallback={mockCallBack} />
    );
  });
});
