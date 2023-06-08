import axios from "axios";
import {
  getMovieById,
  getMovieComments,
  getMoviePersons,
  getMovies,
  getMoviesByGenre,
  getMoviesById,
  updateMovie,
  getFilteredMovies,
  deleteMovieById,
  useGetMovies,
} from "../api/movie";
import * as SWR from "swr";
import { mockMovies } from "../utils/mocks/movies";
import { actorsList } from "../utils/mocks/actors";

jest.mock("axios");
jest.mock("swr");

/* eslint-disable */
describe("useGetMovies", () => {
  it("should call useGetMovies", () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: "data",
    });

    useGetMovies("some key");

    expect(SWR.default).toBeCalled();
  });
});

describe("deleteMovieById", () => {
  it("should return data", async () => {
    (axios.request as jest.Mock).mockImplementation(() => Promise.resolve("data"));
    const result = await deleteMovieById("some id", "token");
    expect(result).toBe("data");
  });
  it("should return error response", async () => {
    (axios.request as jest.Mock).mockImplementation(() =>
      Promise.reject(new Error("Request failed"))
    );
    const result = await deleteMovieById("some id", "token");
    expect(result).toEqual(null);
  });
});

describe("getMovieById", () => {
  it("should return data", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: "data" })
    );
    const result = await getMovieById("some id");
    expect(result).toBe("data");
  });
  it("should return error response", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.reject(new Error("Request failed"))
    );
    const result = await getMovieById("some id");
    expect(result).toEqual(mockMovies[0]);
  });
});

describe("getMovieComments", () => {
  it("should return data", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: "data" })
    );
    const result = await getMovieComments("some id");
    expect(result).toBe("data");
  });

  it("should return error response", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.reject(new Error("Request failed"))
    );
    const result = await getMovieComments("some id");
    expect(result).toEqual([]);
  });
});

describe("getMoviePersons", () => {
  it("should return data", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: "data" })
    );
    const result = await getMoviePersons("some id");
    expect(result).toBe("data");
  });

  it("should return error response", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.reject(new Error("Request failed"))
    );
    const result = await getMoviePersons("some id");
    expect(result).toEqual(actorsList);
  });
});

describe("getMovies", () => {
  it("should return data", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: "data" })
    );
    const result = await getMovies("some key");
    expect(result).toBe("data");
  });

  it("should return error response", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.reject(new Error("Request failed"))
    );
    const result = await getMovies("some key");
    expect(result).toEqual([]);
  });
});

describe("getMoviesByGenre", () => {
  it("should return data", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: "data" })
    );
    const result = await getMoviesByGenre("some genre");
    expect(result).toBe("data");
  });

  it("should return error response", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.reject(new Error("Request failed"))
    );
    const result = await getMoviesByGenre("some genre");
    expect(result).toEqual(mockMovies.slice(0, 5));
  });
});

describe("getMoviesById", () => {
  it("should return data", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: "data" })
    );
    const result = await getMoviesById(["some id"]);
    console.log(result);
    expect(result).toBe("data");
  });

  it("should return error response", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.reject(new Error("Request failed"))
    );
    const result = await getMoviesById(["some id"]);
    expect(result).toBe(undefined);
  });
});

describe("updateMovie", () => {
  const filters = {
    genres: "",
    countries: "",
    year: "",
    rating: "",
    assessments: "",
    actor: "",
    director: "",
  };

  it("should return data", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: "data" })
    );

    const result = await getFilteredMovies(filters, 10);
    console.log(result);
    expect(result).toBe("data");
  });

  it("should return error response", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.reject(new Error("Request failed"))
    );

    const result = await getFilteredMovies(filters, 10);
    expect(result).toBe(undefined);
  });

  it("should return filtersTest", async () => {
    const filtersTest = {
      genres: "genres",
      countries: "countries",
      year: "year",
      rating: "0",
      assessments: "0",
      actor: "actor",
      director: "director",
    };
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: "data" })
    );

    const result = await getFilteredMovies(filtersTest, 10);
    expect(result).toBe("data");
  });
});

describe("updateMovie", () => {
  it("should return data", async () => {
    (axios.request as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: "data" })
    );
    const result = await updateMovie("token", "film_id", "name_en", "name_ru");
    console.log(result);
    expect(result).toBe("data");
  });

  it("should return error response", async () => {
    (axios.request as jest.Mock).mockImplementation(() =>
      Promise.reject(new Error("Request failed"))
    );
    const result = await updateMovie("token", "film_id", "name_en", "name_ru");
    expect(result).toBe(undefined);
  });
});
