import React from "react";
import MoviePoster from "./MoviePoster";
import { store } from "/src/store";
import { mockMovie } from "/src/utils/movie";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

jest.mock("next/router", () => require("next-router-mock"));

describe("MoviePoster", () => {
  it("should open and close without errors", () => {
    render(
      <Provider store={store}>
        <MoviePoster content={mockMovie} />
      </Provider>
    );
  });
  it("should open and close without errors", () => {
    mockMovie.rating = 5;
    render(
      <Provider store={store}>
        <MoviePoster content={mockMovie} />
      </Provider>
    );
  });
});
