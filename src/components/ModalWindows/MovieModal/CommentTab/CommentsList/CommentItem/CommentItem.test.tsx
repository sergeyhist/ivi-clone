import React from "react";
import CommentItem from "./CommentItem";
import { renderWithProviders } from "/src/utils/test-utils";
import { fireEvent, screen } from "@testing-library/react";
import { mockComment } from "/src/utils/comments";

jest.mock("next/router", () => require("next-router-mock"));

describe("MovieModal", () => {
  it("should open and close without errors", () => {
    renderWithProviders(
      <CommentItem
        comment={mockComment}
        level={1}
        setInputText={jest.fn()}
        setReplyFor={jest.fn()}
      />
    );
    expect(screen.getAllByTestId("comment").length).not.toBe(0);
  });
  it("should open and close without errors", () => {
    const setReplyFor = jest.fn();
    renderWithProviders(
      <CommentItem
        comment={mockComment}
        level={4}
        setInputText={jest.fn()}
        setReplyFor={setReplyFor}
      />
    );
    expect(screen.getAllByTestId("reply-button")[0]).toBeInTheDocument();
    fireEvent.click(screen.getAllByTestId("reply-button")[0]);
    expect(setReplyFor).toBeCalled();
    expect(screen.getAllByTestId("comment-indentation")[2]).toHaveStyle({
      paddingLeft: "64px;",
    });
  });
});
