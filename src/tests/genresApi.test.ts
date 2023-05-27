import {
  getGenres,
  getGenresSlugs,
  updateGenre,
  useGenresSlugs,
  useGetGenres,
} from "/src/api/genres";
import { genresList, genresListSlugs } from "/src/utils/mocks/genres";
import axios from "axios";
import * as SWR from "swr";

jest.mock("axios");
jest.mock("swr");

describe("Countries api", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("getGenresSlugs", async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: genresList.slice(0, 2),
    });

    const result = await getGenresSlugs("test");

    expect(result).toEqual(genresListSlugs.slice(0, 2));
  });

  test("getGenresSlugs with undefined data", async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: undefined,
    });

    const result = await getGenresSlugs("test");

    expect(result).toEqual([]);
  });

  test("useCountriesslugs", () => {
    useGenresSlugs();

    expect(SWR.default).toHaveBeenCalledWith(
      "undefined/genres",
      getGenresSlugs
    );
  });

  test("getGenres", async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: genresList.slice(0, 2),
    });

    const result = await getGenres();

    expect(result).toEqual(genresList.slice(0, 2));
  });

  test("getGenres with error", async () => {
    (axios.get as jest.Mock).mockRejectedValue(jest.fn());

    const result = await getGenres();

    expect(result).toEqual([]);
  });

  test("updateGenre", async () => {
    (axios.request as jest.Mock).mockResolvedValue({
      data: "test",
    });

    const result = await updateGenre(
      "test",
      "testid",
      "testname_en",
      "testname_ru"
    );

    expect(result).toEqual("test");
  });

  test("useGetGenres", () => {
    useGetGenres("test");

    expect(SWR.default).toHaveBeenCalledWith(
      "test",
      getGenres
    );
  })

  test("updateGenre with error", async () => {
    (axios.request as jest.Mock).mockRejectedValue(jest.fn());

    const result = await updateGenre(
      "test",
      "testid",
      "testname_en",
      "testname_ru"
    );

    expect(result).toEqual(undefined);
  });
});
