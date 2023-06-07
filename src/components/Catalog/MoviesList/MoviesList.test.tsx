import MoviesList from "./MoviesList";
import {
  setFilteredMovies,
  setIsMoviesLoading,
} from "/src/store/slices/filtersSlice";
import { setWindowSize } from "/src/store/slices/windowSizeSlice";
import { IMovie } from "/src/types/IMovie";
import { IProviderRender } from "/src/types/IRender";
import * as filterMovies from "/src/utils/filters/filterMovies";
import { mockMovies } from "/src/utils/mocks/movies";
import { renderWithProviders } from "/src/utils/test-utils";
import { act, fireEvent, screen, waitFor } from "@testing-library/react";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("src/utils/filters/filterMovies");

let render: IProviderRender;

const largeMockMovies: IMovie[] = new Array(100).fill([...mockMovies]).flat();

describe("Movies list", () => {
  beforeEach(() => {
    render = renderWithProviders(<MoviesList />);
  });

  afterAll(() => {
    mockRouter.replace({ query: { page: "1" } });
  });

  test("render list with movies", () => {
    act(() => render.store.dispatch(setIsMoviesLoading(false)));
    act(() => render.store.dispatch(setFilteredMovies(mockMovies)));
    expect(screen.getByTestId("movies-list")).toBeInTheDocument();
    expect(screen.getAllByTestId("movies-item").length).toEqual(14);
  });

  test("render loading while getting movies", () => {
    expect(screen.getByTestId("page-loader")).toBeInTheDocument();
    act(() => render.store.dispatch(setIsMoviesLoading(false)));
    expect(screen.queryByTestId("page-loader")).not.toBeInTheDocument();
  });

  test("render 'not found' if movies not found", () => {
    act(() => render.store.dispatch(setIsMoviesLoading(false)));
    act(() => render.store.dispatch(setFilteredMovies([])));
    expect(screen.getByTestId("movies-notfound")).toBeInTheDocument();
  });

  test("'more movies' button click", () => {
    act(() => render.store.dispatch(setIsMoviesLoading(false)));
    act(() => render.store.dispatch(setFilteredMovies(largeMockMovies)));
    expect(screen.getByTestId("movies-list")).toBeInTheDocument();
    expect(screen.getAllByTestId("movies-item").length).toEqual(14);
    fireEvent.click(screen.getByTestId("more-button"));
  });
});

describe("Movies list length with various width values", () => {
  const values = [1161, 1140, 1040, 740, 560, 320];
  let i = 0;

  beforeEach(() => {
    render = renderWithProviders(<MoviesList />);
    act(() => render.store.dispatch(setIsMoviesLoading(false)));
    act(() => render.store.dispatch(setFilteredMovies(largeMockMovies)));
    act(() =>
      render.store.dispatch(setWindowSize({ width: values[i], height: 1080 }))
    );
    expect(screen.getByTestId("movies-list")).toBeInTheDocument();
  });

  afterEach(() => {
    i++;
    act(() => render.store.dispatch(setFilteredMovies([])));
  });

  test("width > 1160", () => {
    expect(screen.getAllByTestId("movies-item").length).toEqual(21);
  });

  test("1060 < width < 1160", () => {
    expect(screen.getAllByTestId("movies-item").length).toEqual(18);
  });

  test("890 < width < 1060", () => {
    expect(screen.getAllByTestId("movies-item").length).toEqual(15);
  });

  test("700 < width < 890", () => {
    expect(screen.getAllByTestId("movies-item").length).toEqual(16);
  });

  test("540 < width < 700", () => {
    expect(screen.getAllByTestId("movies-item").length).toEqual(15);
  });

  test("width < 540", () => {
    expect(screen.getAllByTestId("movies-item").length).toEqual(14);
  });
});

describe("filterMovies function", () => {
  test("function has been called correctly", async () => {
    jest.useFakeTimers();
    const spy = jest.spyOn(filterMovies, "default");
    (filterMovies.default as jest.Mock).mockResolvedValue(mockMovies);
    renderWithProviders(<MoviesList />);
    jest.runAllTimers();
    await waitFor(() => expect(spy).toHaveBeenCalled());
    await waitFor(() =>
      expect(screen.getAllByTestId("movies-item").length).toEqual(14)
    );
  });
});
