import React from "react";
import MovieModal from "./MovieModal";
import { act, fireEvent } from "@testing-library/react";
import { store } from "/src/store";
import { mockMovie } from "/src/utils/movie";
import { mockPerson } from "/src/utils/person";
import { mockComment } from "/src/utils/comments";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { setShowMovieModal } from "/src/store/slices/modalsSlice";

jest.mock("next/router", () => require("next-router-mock"));

describe("BannerSlider", () => {
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
    const closeButton = screen.getByTestId("close-movie-modal");
    fireEvent.click(closeButton);
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
    const actorsTabButton = screen.getByTestId("actors-tab");
    const commentsTabButton = screen.getByTestId("comments-tab");
    fireEvent.click(actorsTabButton);
    fireEvent.click(commentsTabButton);
  });
});
