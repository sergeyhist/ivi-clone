import axios from "axios";
import { IMovie } from "../types/IMovie";
import { IComment } from "../types/IComment";
import { IPerson } from "../types/IPerson";
import { IFilters } from "../types/IFilter";
import useSWR, { SWRResponse } from "swr";

export const getMoviesById = async (
  filmsId: string[]
): Promise<IMovie[] | undefined> => {
  try {
    if (!process.env.SERVER_HOST)
      throw new Error("process.env.SERVER_HOST undefined");
    const response = await axios.get(`${process.env.SERVER_HOST}/id/films`, {
      params: {
        films: filmsId,
      },
    });
    return response.data as IMovie[];
  } catch (err) {
    console.log(err);
  }
};

export const getMovieById = async (film_id: string): Promise<IMovie | null> => {
  try {
    if (!process.env.SERVER_HOST)
      throw new Error("process.env.SERVER_HOST undefined");
    const response = await axios.get<IMovie>(
      `${process.env.SERVER_HOST}/films/${film_id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getMoviePersons = async (film_id: string): Promise<IPerson[]> => {
  try {
    if (!process.env.SERVER_HOST)
      throw new Error("process.env.SERVER_HOST undefined");
    const response = await axios.get<IPerson[]>(
      `${process.env.SERVER_HOST}/persons/films/${film_id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getMovieComments = async (film_id: string): Promise<IComment[]> => {
  try {
    if (!process.env.SERVER_HOST)
      throw new Error("process.env.SERVER_HOST undefined");
    const response = await axios.get<IComment[]>(
      `${process.env.SERVER_HOST}/comments/films/${film_id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getMoviesByGenre = async (genre_slug: string): Promise<IMovie[]> => {
  try {
    if (!process.env.SERVER_HOST)
      throw new Error("process.env.SERVER_HOST undefined");
    const response = await axios.get<IMovie[]>(
      `${process.env.SERVER_HOST}/filter/films?genres=${genre_slug}&limit=10`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getMovies = async (key = "/films?limit=100"): Promise<IMovie[]> => {
  try {
    if (!process.env.SERVER_HOST)
      throw new Error("process.env.SERVER_HOST undefined");
    const response = await axios.get<IMovie[]>(process.env.SERVER_HOST + key);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const useGetMovies = (key: string): SWRResponse<IMovie[]> => {
  return useSWR(key, getMovies);
};

export const getFilteredMovies = async (
  filters: IFilters,
  limit: number
): Promise<IMovie[] | undefined> => {
  try {
    const response = await axios.get(
      `${String(process.env.SERVER_HOST)}/filter/films`,
      {
        params: {
          genres: filters.genres,
          countries: filters.countries,
          rating: filters.rating === "0" ? undefined : filters.rating,
          assessments: filters.assessments === "0" ? undefined : filters.assessments,
          year_min:
            filters.year.length > 0
              ? (filters.year as string).split("-")[0]
              : undefined,
          year_max:
            filters.year.length > 0
              ? (filters.year as string).split("-")[1]
              : undefined,
          actor:
            filters.actor.length > 0
              ? (filters.actor as string).split("_")
              : undefined,
          filmmaker:
            filters.director.length > 0
              ? (filters.director as string).split("_")
              : undefined,
          limit: limit,
        },
      }
    );

    return response.data as IMovie[];
  } catch (error) {
    console.log(error);
  }
};

export const updateMovie = async (
  token: string,
  film_id: string,
  name_en: string,
  name_ru: string
): Promise<IMovie | undefined> => {
  try {
    if (!process.env.SERVER_HOST)
      throw new Error("process.env.SERVER_HOST undefined");

    const data = JSON.stringify({
      name_ru: name_ru,
      name_en: name_en,
    });

    const config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${process.env.SERVER_HOST}/films/${film_id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    const response = await axios.request<IMovie>(config);
    return response.data as unknown as IMovie;
  } catch (error) {
    console.error(error);
  }
};
