import { fireEvent, render, screen } from "@testing-library/react";
import Filmography from "/src/components/Person/Filmography/Filmography";
import mockRouter from "next-router-mock";
import React from "react";
import {mockMovies} from "/src/utils/mocks/movies";

jest.mock("next/router", () => require("next-router-mock"));

describe("Filmography", () => {

  it("should renders without errors", () => {
    const { getByTestId } = render(<Filmography movies={mockMovies} />);
    expect(getByTestId("filmography-container")).toBeInTheDocument();
  });

  it("should call router push after click on movie", () => {
    const push = jest.spyOn(mockRouter, "push");
    render(<Filmography movies={mockMovies} />);
    const movieButton = screen.getAllByRole("button")[0];
    fireEvent.click(movieButton);
    expect(push).toHaveBeenCalled();
    expect(push).toHaveBeenCalledWith(`/movies/${mockMovies[0].film_id}`);
  });

  it("should show all movies after click on show all movies button", () => {
    const setState = jest.fn();
    jest
      .spyOn(React, "useState")
      .mockImplementationOnce((initState) => [initState, setState]);
    const largeMockMovies = new Array(100).fill([...mockMovies]).flat();
    render(<Filmography movies={largeMockMovies} />);
    const showButton = screen.getByTestId("show-movies");
    fireEvent.click(showButton);
    expect(setState).toHaveBeenCalled();
    expect(setState).toHaveBeenCalledWith(largeMockMovies);
  });

  it("should display ru movie name after change locale to ru", () => {
    mockRouter.locale = "ru";
    render(<Filmography movies={mockMovies} />);
    expect(screen.getByText(mockMovies[0].name_ru)).toBeInTheDocument();
  });
});