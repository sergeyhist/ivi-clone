import filterMovies from "../utils/filters/filterMovies";
import { defaultFilters } from "../utils/filters/filtersVariables";
import * as movieApi from "../api/movie";
import { mockMovies } from "../utils/mocks/movies";

jest.mock("axios");
jest.mock("../api/movie");

describe("filterMovies function", () => {
  test("function returned correct value", async () => {
    const spy = jest.spyOn(movieApi, "getFilteredMovies");

    (movieApi.getFilteredMovies as jest.Mock).mockResolvedValue(mockMovies);

    const result = await filterMovies(defaultFilters, "rating");


    expect(spy).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockMovies);
  });
});
