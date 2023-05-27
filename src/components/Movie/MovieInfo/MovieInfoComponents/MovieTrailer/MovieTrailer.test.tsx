import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import MovieTrailer from "./MovieTrailer";
import { renderWithProviders } from "/src/utils/test-utils";
import { mockMovie } from "/src/utils/mocks/movies";

jest.mock("next/router", () => require("next-router-mock"));

describe("MovieTrailer", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("should renders without errors", () => {
    renderWithProviders(<MovieTrailer movie={mockMovie} />);
    expect(screen.getByTestId("trailer")).toBeInTheDocument();
  });
  it("should renders without errors", () => {
    jest
    .spyOn(window.HTMLMediaElement.prototype, "pause")
    .mockImplementation(() => jest.fn());
    jest
    .spyOn(window.HTMLMediaElement.prototype, "play")
    .mockImplementation(() => new Promise(jest.fn()));
    renderWithProviders(<MovieTrailer movie={mockMovie} />);
    const play = screen.getByTestId("play-button");
    fireEvent.click(play);
    const pause = screen.getByTestId("pause-button");
    expect(play).not.toBeInTheDocument();
    fireEvent.click(pause);
  });
  it("should renders without errors", () => {
    const setState = jest.fn();
    jest.spyOn(React, "useState").mockImplementation(() => [true, setState]);
    renderWithProviders(<MovieTrailer movie={mockMovie} />);
    const video = screen.getByTestId("video");
    fireEvent.play(video);
    expect(setState).toBeCalledTimes(1);
    fireEvent.pause(video);
    expect(setState).toBeCalledTimes(2);
  });

  it("should renders without errors", () => {
    const reference = { current: null };
    Object.defineProperty(reference, "current", {
      get: jest.fn(() => null),
      set: jest.fn(() => null),
    });
    const useReferenceSpy = jest.spyOn(React, "useRef").mockReturnValue(reference);
    renderWithProviders(<MovieTrailer movie={mockMovie} />);
    const video = screen.getByTestId("video");
    expect(useReferenceSpy).toBeCalledTimes(1);
    fireEvent.play(video);
    expect(useReferenceSpy).toBeCalledTimes(2);
    fireEvent.click(screen.getByTestId("full-screen-button"));
  });
});
