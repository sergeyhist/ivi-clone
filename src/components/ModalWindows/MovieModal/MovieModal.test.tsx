import React from "react";
import MovieModal from "./MovieModal";
import { act, fireEvent } from "@testing-library/react";
import { store } from "/src/store";
import { mockMovie } from "/src/utils/mocks/movies";
import { mockComment } from "/src/utils/comments";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { setShowMovieModal } from "/src/store/slices/modalsSlice";
import { mockPerson } from "/src/utils/mocks/person";

jest.mock("next/router", () => require("next-router-mock"));

describe("MovieModal", () => {
  const mockSetComments = (): null => null;
  it("should open and close without errors", () => {
    render(
      <Provider store={store}>
        <div id="__next"></div>
        <MovieModal
          setCommentsState={mockSetComments}
          movie={mockMovie}
          persons={[mockPerson]}
          comments={[mockComment]}
          movieTitle="title"
        />
      </Provider>
    );
    act(() =>
      store.dispatch(setShowMovieModal({ isShow: true, defaultTab: "actors" }))
    );
    const movieModal = screen.getByTestId("movie-modal");
    const closeButton = screen.getByTestId("close-movie-modal");
    expect(movieModal).toBeInTheDocument();
    fireEvent.click(closeButton);
    expect(movieModal).not.toBeInTheDocument();
  });
  it("should render chooses tab", () => {
    render(
      <Provider store={store}>
        <div id="__next"></div>
        <MovieModal
          setCommentsState={mockSetComments}
          movie={mockMovie}
          persons={[mockPerson]}
          comments={[mockComment]}
          movieTitle="title"
        />
      </Provider>
    );
    act(() =>
      store.dispatch(setShowMovieModal({ isShow: true, defaultTab: "comments" }))
    );
    const creatorTabButton = screen.getByTestId("button-creators-tab");
    const commentsTabButton = screen.getByTestId("button-comments-tab");
    fireEvent.click(creatorTabButton);
    const creatorTab = screen.getByTestId("creators-tab");
    expect(creatorTab).toBeInTheDocument();
    fireEvent.click(commentsTabButton);
    const commentsTab = screen.getByTestId("comments-tab");
    expect(commentsTab).toBeInTheDocument();
    expect(creatorTab).not.toBeInTheDocument();
  });
});
