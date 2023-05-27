import axios from "axios";
import * as SWR from "swr";
import { actorsList } from "/src/utils/mocks/actors";
import {
  getPersonById,
  getPersons,
  useGetActors,
  useGetDirectors,
} from "/src/api/persons";

jest.mock("axios");
jest.mock("swr");

describe("Countries api", () => {
  test("getPersonById", async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: actorsList[0],
    });

    const result = await getPersonById("test");

    expect(result).toEqual(actorsList[0]);
  });

  test("getPersonById with error", async () => {
    (axios.get as jest.Mock).mockRejectedValue(jest.fn());

    const result = await getPersonById("test");

    expect(result).toEqual(undefined);
  });

  test("getPersons", async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: actorsList.slice(0, 2),
    });

    const result = await getPersons("test");

    expect(result).toEqual(actorsList.slice(0, 2));
  });

  test("useCountriesslugs", () => {
    useGetActors();

    expect(SWR.default).toHaveBeenCalledWith(
      "undefined/name/persons?film_role=actor",
      getPersons
    );
  });

  test("useCountriesslugs", () => {
    useGetDirectors();

    expect(SWR.default).toHaveBeenCalledWith(
      "undefined/name/persons?film_role=filmmaker",
      getPersons
    );
  });
});
