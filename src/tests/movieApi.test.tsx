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

jest.mock("axios");
jest.mock("swr");

/* eslint-disable */
describe("useGetMovies", () => {
  it("useCountriesslugs", () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: "data",
    });

    useGetMovies("some key");

    expect(SWR.default).toBeCalled();
  });
});

describe("deleteMovieById", () => {
  it("should call deleteMovieById", async () => {
    (axios.request as jest.Mock).mockImplementation(() => Promise.resolve("data"));
    const result = await deleteMovieById("some id", "token");
    expect(result).toBe("data");
  });
  it("should call deleteMovieById", async () => {
    (axios.request as jest.Mock).mockImplementation(() =>
      Promise.reject(new Error("Request failed"))
    );
    const result = await deleteMovieById("some id", "token");
    expect(result).toEqual(null);
  });
});

describe("getMovieById", () => {
  it("should call getMovieById", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: "data" })
    );
    const result = await getMovieById("some id");
    expect(result).toBe("data");
  });
  it("should call getMovieById", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.reject(new Error("Request failed"))
    );
    const result = await getMovieById("some id");
    expect(result).toEqual(null);
  });
});

describe("getMovieComments", () => {
  it("should call updateMovie", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: "data" })
    );
    const result = await getMovieComments("some id");
    expect(result).toBe("data");
  });

  it("should call updateMovie", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.reject(new Error("Request failed"))
    );
    const result = await getMovieComments("some id");
    expect(result).toEqual([]);
  });
});

describe("getMoviePersons", () => {
  it("should call updateMovie", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: "data" })
    );
    const result = await getMoviePersons("some id");
    expect(result).toBe("data");
  });

  it("should call updateMovie", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.reject(new Error("Request failed"))
    );
    const result = await getMoviePersons("some id");
    expect(result).toEqual([]);
  });
});

describe("getMovies", () => {
  it("should call updateMovie", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: "data" })
    );
    const result = await getMovies("some key");
    expect(result).toBe("data");
  });

  it("should call updateMovie", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.reject(new Error("Request failed"))
    );
    const result = await getMovies("some key");
    expect(result).toEqual([]);
  });
});

describe("getMoviesByGenre", () => {
  it("should call updateMovie", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: "data" })
    );
    const result = await getMoviesByGenre("some genre");
    expect(result).toBe("data");
  });

  it("should call updateMovie", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.reject(new Error("Request failed"))
    );
    const result = await getMoviesByGenre("some genre");
    expect(result).toEqual([]);
  });
});

describe("getMoviesById", () => {
  it("should call updateMovie", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: "data" })
    );
    const result = await getMoviesById(["some id"]);
    console.log(result);
    expect(result).toBe("data");
  });

  it("should call updateMovie", async () => {
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

  it("should call getFilteredMovies", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: "data" })
    );

    const result = await getFilteredMovies(filters, 10);
    console.log(result);
    expect(result).toBe("data");
  });

  it("should call getFilteredMovies", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.reject(new Error("Request failed"))
    );

    const result = await getFilteredMovies(filters, 10);
    expect(result).toBe(undefined);
  });

  it("should call getFilteredMovies", async () => {
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
  it("should call updateMovie", async () => {
    (axios.request as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: "data" })
    );
    const result = await updateMovie("token", "film_id", "name_en", "name_ru");
    console.log(result);
    expect(result).toBe("data");
  });

  it("should call updateMovie", async () => {
    (axios.request as jest.Mock).mockImplementation(() =>
      Promise.reject(new Error("Request failed"))
    );
    const result = await updateMovie("token", "film_id", "name_en", "name_ru");
    expect(result).toBe(undefined);
  });
});
