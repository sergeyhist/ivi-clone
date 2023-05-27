import React from "react";
import MovieInfo from "./MovieInfo";
import { mockMovie } from "/src/utils/mocks/movies";
import { act, screen } from "@testing-library/react";
import { store } from "/src/store";
import { setWindowSize } from "/src/store/slices/windowSizeSlice";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockPerson } from "/src/utils/mocks/person";

jest.mock("next/router", () => require("next-router-mock"));

describe("MovieInfo", () => {
  it("should render desktop version", () => {
    act(() => store.dispatch(setWindowSize({ width: 1161, height: 1080 })));
    render(
      <Provider store={store}>
        <MovieInfo movie={mockMovie} persons={[mockPerson]} />
      </Provider>
    );
    expect(screen.getByTestId("movie-info-desktop")).toBeInTheDocument();
  });
  it("should render mobile version", () => {
    act(() => store.dispatch(setWindowSize({ width: 1160, height: 1080 })));
    render(
      <Provider store={store}>
        <MovieInfo movie={mockMovie} persons={[mockPerson]} />
      </Provider>
    );
    expect(screen.getByTestId("movie-info-mobile")).toBeInTheDocument();
  });
  it("should render with resize window", () => {
    act(() => store.dispatch(setWindowSize({ width: 1161, height: 1080 })));
    render(
      <Provider store={store}>
        <MovieInfo movie={mockMovie} persons={[mockPerson]} />
      </Provider>
    );
    expect(screen.getByTestId("movie-info-desktop")).toBeInTheDocument();
    act(() => store.dispatch(setWindowSize({ width: 1160, height: 1080 })));
    expect(screen.getByTestId("movie-info-mobile")).toBeInTheDocument();
    act(() => store.dispatch(setWindowSize({ width: 1161, height: 1080 })));
    expect(screen.getByTestId("movie-info-desktop")).toBeInTheDocument();
  });
});
