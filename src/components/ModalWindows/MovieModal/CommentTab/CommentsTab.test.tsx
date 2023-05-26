import React from "react";
import CommentsTab from "./CommentsTab";
import { act, cleanup, fireEvent } from "@testing-library/react";
import { store } from "/src/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockComment } from "/src/utils/comments";
import { setAuth } from "/src/store/slices/authSlice";
import { getUserByEmail } from "/src/api/user";
import { createComment } from "/src/api/comments";

jest.mock("next/router", () => require("next-router-mock"));

jest.mock("src/api/user", () => ({
  getUserByEmail: jest.fn(() => jest.fn().mockReturnThis()),
}));
jest.mock("src/api/comments", () => ({
  createComment: jest.fn(() => jest.fn().mockReturnThis()),
}));

const mockSetComments = jest.fn();

describe("CommentsTab", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("should return because isLogged false", () => {
    act(() =>
      store.dispatch(setAuth({ isLogged: false, userEmail: "admin@gmail.com" }))
    );
    render(
      <Provider store={store}>
        <CommentsTab comments={[mockComment]} setCommentsState={mockSetComments} />
      </Provider>
    );
    fireEvent.submit(screen.getByTestId("comments-form"));
    expect(getUserByEmail).not.toBeCalled();
  });

  it("should return because inputText < 5", () => {
    act(() =>
      store.dispatch(setAuth({ isLogged: true, userEmail: "admin@gmail.com" }))
    );
    render(
      <Provider store={store}>
        <CommentsTab comments={[mockComment]} setCommentsState={mockSetComments} />
      </Provider>
    );
    fireEvent.submit(screen.getByTestId("comments-form"));
    expect(getUserByEmail).not.toBeCalled();
  });

  it("should return because getUserByEmail return undefined", () => {
    jest
    .spyOn(React, "useState")
    .mockImplementationOnce(() => ["123456", jest.fn()])
    .mockImplementationOnce(() => [undefined, jest.fn()])
    .mockImplementationOnce(() => ["placeholder", jest.fn()])
    .mockImplementationOnce(() => [true, jest.fn()]);
    act(() =>
      store.dispatch(setAuth({ isLogged: true, userEmail: "admin@gmail.com" }))
    );
    (getUserByEmail as jest.Mock).mockResolvedValueOnce(Promise.resolve(undefined));
    (createComment as jest.Mock).mockResolvedValueOnce(Promise.resolve(undefined));
    render(
      <Provider store={store}>
        <CommentsTab comments={[mockComment]} setCommentsState={mockSetComments} />
      </Provider>
    );
    fireEvent.submit(screen.getByTestId("comments-form"));
    expect(getUserByEmail).toBeCalled();
    setTimeout(() => {
      expect(mockSetComments).not.toBeCalled();
    }, 1000);
  });

  it("should return because createComment response undefined", () => {
    const setInputText = jest.fn();
    jest
    .spyOn(React, "useState")
    .mockImplementationOnce(() => ["123456", setInputText])
    .mockImplementationOnce(() => [undefined, jest.fn()])
    .mockImplementationOnce(() => ["placeholder", jest.fn()])
    .mockImplementationOnce(() => [true, jest.fn()]);
    (getUserByEmail as jest.Mock).mockResolvedValueOnce(
      Promise.resolve({ user_id: "2" })
    );
    (createComment as jest.Mock).mockResolvedValueOnce(Promise.resolve(undefined));
    act(() =>
      store.dispatch(setAuth({ isLogged: true, userEmail: "admin@gmail.com" }))
    );
    render(
      <Provider store={store}>
        <CommentsTab comments={[mockComment]} setCommentsState={mockSetComments} />
      </Provider>
    );
    fireEvent.submit(screen.getByTestId("comments-form"));
    expect(getUserByEmail).toBeCalled();
    setTimeout(() => {
      expect(mockSetComments).not.toBeCalled();
    }, 1000);
  });

  it("should create comment", () => {
    jest
    .spyOn(React, "useState")
    .mockImplementationOnce(() => ["123456", jest.fn()]);
    (getUserByEmail as jest.Mock).mockResolvedValueOnce(
      Promise.resolve({ user_id: "2" })
    );
    (createComment as jest.Mock).mockResolvedValueOnce(Promise.resolve(mockComment));
    render(
      <Provider store={store}>
        <CommentsTab comments={[mockComment]} setCommentsState={mockSetComments} />
      </Provider>
    );
    act(() =>
      store.dispatch(setAuth({ isLogged: true, userEmail: "admin@gmail.com" }))
    );
    fireEvent.submit(screen.getByTestId("comments-form"));
    expect(getUserByEmail).toBeCalled();
    setTimeout(() => {
      expect(mockSetComments).toBeCalled();
    }, 1000);
  });

  it("should create reply comment", () => {
    jest
    .spyOn(React, "useState")
    .mockImplementationOnce(() => ["@" + String(mockComment.user.email), jest.fn()])
    .mockImplementationOnce(() => [mockComment, jest.fn()]);
    (getUserByEmail as jest.Mock).mockResolvedValueOnce(
      Promise.resolve({ user_id: "2" })
    );
    (createComment as jest.Mock).mockResolvedValueOnce(Promise.resolve(mockComment));
    render(
      <Provider store={store}>
        <CommentsTab comments={[mockComment]} setCommentsState={mockSetComments} />
      </Provider>
    );
    act(() =>
      store.dispatch(setAuth({ isLogged: true, userEmail: "admin@gmail.com" }))
    );
    fireEvent.submit(screen.getByTestId("comments-form"));
    expect(getUserByEmail).toBeCalledTimes(1);
    cleanup();
    jest
    .spyOn(React, "useState")
    .mockImplementationOnce(() => ["@" + String(mockComment.user.email), jest.fn()])
    .mockImplementationOnce(() => [mockComment, jest.fn()]);
    (getUserByEmail as jest.Mock).mockResolvedValueOnce(
      Promise.resolve({ user_id: "2" })
    );
    (createComment as jest.Mock).mockResolvedValueOnce(Promise.resolve(undefined));
    render(
      <Provider store={store}>
        <CommentsTab comments={[mockComment]} setCommentsState={mockSetComments} />
      </Provider>
    );
    act(() =>
      store.dispatch(setAuth({ isLogged: true, userEmail: "admin@gmail.com" }))
    );
    fireEvent.submit(screen.getByTestId("comments-form"));
    expect(getUserByEmail).toBeCalledTimes(2);
  });
});
