import React from "react";
import CommentsSlider from "./CommentsSlider";
import { renderWithProviders } from "/src/utils/test-utils";
import { fireEvent, screen } from "@testing-library/react";
import { mockComment } from "/src/utils/comments";

jest.mock("next/router", () => require("next-router-mock"));

describe("CommentsSlider", () => {
  it("should renders without errors", () => {
    renderWithProviders(<CommentsSlider comments={[mockComment]} />);
    expect(screen.getByTestId("comments-slider")).toBeInTheDocument();
  });
  it("should works event", () => {
    renderWithProviders(<CommentsSlider comments={[mockComment]} />);
    fireEvent.click(screen.getByTestId("open-comments-modal"));
  });
});
