import filterMovies from "../utils/filters/filterMovies";
import { defaultFilters } from "../utils/filters/filtersVariables";
import * as movieApi from "../api/movie";
import { mockMovies } from "../utils/mocks/movies";
import { changeHandler } from "../utils/filters/changeHandler";
import mockRouter from "next-router-mock";
import { getFiltersFromRoute } from "../utils/filters/getFiltersFromRoute";
import getSortedList from "../utils/filters/getSortedList";
import { getFiltersText } from "../utils/filters/getFiltersText";

jest.mock("axios");
jest.mock("../api/movie");

describe("filterMovies function", () => {
  test("function returns correct value", async () => {
    (movieApi.getFilteredMovies as jest.Mock).mockResolvedValue(mockMovies);

    const result = await filterMovies(defaultFilters, "rating");

    expect(result).toEqual(getSortedList("rating", mockMovies));
  });

  test("call function with undefined movies", async () => {
    (movieApi.getFilteredMovies as jest.Mock).mockResolvedValue([]);

    const result = await filterMovies(defaultFilters, "rating");

    expect(result.length).toEqual(100);
  });
});

describe("changeHandler function", () => {
  test("add new filter to curent array", () => {
    const result = changeHandler(["melodrama"], "anime");

    expect(result).toEqual(["melodrama", "anime"]);
  });

  test("add new filter with initial string", () => {
    const result = changeHandler("melodrama", "anime");

    expect(result).toEqual(["melodrama", "anime"]);
  });

  test("add new filter with replace argument", () => {
    const result = changeHandler(["melodrama"], "anime", true);

    expect(result).toEqual(["anime"]);
  });

  test("remove filter from array", () => {
    const result = changeHandler(["melodrama", "anime"], "anime");

    expect(result).toEqual(["melodrama"]);
  });

  test("remove filter string", () => {
    const result = changeHandler("anime", "anime");

    expect(result).toEqual([]);
  });
});

describe("getFiltersFromRoute function", () => {
  test("call function with active filters", () => {
    mockRouter.query = { genres: "anime" };

    const result = getFiltersFromRoute(mockRouter);

    expect(result).toEqual({ ...defaultFilters, genres: "anime" });
  });

  test("call function with empty filters", () => {
    mockRouter.query = {};

    const result = getFiltersFromRoute(mockRouter);

    expect(result).toEqual(defaultFilters);
  });
});

describe("getSortedList function", () => {
  test("sorting with number key", () => {
    expect(getSortedList("rating", mockMovies)[0].name_ru).toEqual(
      "Зеленая миля"
    );
    expect(getSortedList("rating", mockMovies.reverse())[0].name_ru).toEqual(
      "Зеленая миля"
    );
  });

  test("sorting with string key", () => {
    expect(getSortedList("name_ru", mockMovies)[0].name_ru).toEqual(
      "A Mannequin's Dream"
    );
    expect(getSortedList("name_ru", mockMovies.reverse())[0].name_ru).toEqual(
      "A Mannequin's Dream"
    );
  });

  test("sorting with empty list", () => {
    expect(getSortedList("name_ru", [])).toEqual([]);
  });
});

describe("getFiltersText function", () => {
  test("function has been called correctly", () => {
    const result = getFiltersText(defaultFilters, "Test Test", "Test Test");

    expect(result).toContain("Test Test");
  });

  test("call function with undefined actor and director", () => {
    const result = getFiltersText(defaultFilters);

    expect(result).toEqual("all, all, all, all, all, all, all");
  });

  test("function has been called with rating filter", () => {
    const result = getFiltersText({ ...defaultFilters, rating: "8" });

    expect(result).toContain("8");
  });

  test("function has been called with assessments filter", () => {
    const result = getFiltersText({ ...defaultFilters, assessments: "10000" });

    expect(result).toContain("10000");
  });

  test("function has been called with genres filter", () => {
    const result = getFiltersText({
      ...defaultFilters,
      genres: ["test", "test"],
    });

    expect(result).toEqual("test, test, all, all, all, all, all, all");
  });

  test("function has been called with year filter", () => {
    const result = getFiltersText({
      ...defaultFilters,
      year: "test",
    });

    expect(result).toEqual("all, all, test, all, all, all, all");
  });
});
