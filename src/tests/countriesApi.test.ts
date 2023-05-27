import { getCountriesSlugs, useCountriesSlugs } from "/src/api/countries";
import { countriesList, countriesListSlugs } from "/src/utils/mocks/countries";
import axios from "axios";
import * as SWR from "swr";

jest.mock("axios");
jest.mock("swr");

describe("Countries api", () => {
  test("getCountriesSlugs", async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: countriesList.slice(0, 2),
    });

    const result = await getCountriesSlugs("test");

    expect(result).toEqual(countriesListSlugs.slice(0, 2));
  });

  test("getCountriesSlugs with undefined data", async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: undefined,
    });

    const result = await getCountriesSlugs("test");

    expect(result).toEqual([]);
  });

  test("useCountriesslugs", () => {
    useCountriesSlugs();

    expect(SWR.default).toHaveBeenCalledWith(
      "undefined/countries",
      getCountriesSlugs
    );
  });
});
