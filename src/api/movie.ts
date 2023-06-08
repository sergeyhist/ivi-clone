import axios, { AxiosResponse } from "axios";
import { IMovie } from "../types/IMovie";
import { IComment } from "../types/IComment";
import { IPerson } from "../types/IPerson";
import { IFilters } from "../types/IFilter";
import useSWR, { SWRResponse } from "swr";
import { mockMovies } from "../utils/mocks/movies";
import { actorsList } from "../utils/mocks/actors";

export const getMoviesById = async (
  filmsId: string[]
): Promise<IMovie[] | undefined> => {
  try {
    const response = await axios.get(`${String(process.env.SERVER_HOST)}/id/films`, {
      params: {
        films: filmsId,
      },
    });
    return response.data as IMovie[];
  } catch (err) {
    return mockMovies.slice(0, 30);
  }
};

export const getMovieById = async (film_id: string): Promise<IMovie | null> => {
  try {
    const response = await axios.get<IMovie>(
      `${String(process.env.SERVER_HOST)}/films/${film_id}`
    );
    return response.data;
  } catch (error) {
    return mockMovies[0];
  }
};

export const getMoviePersons = async (film_id: string): Promise<IPerson[]> => {
  try {
    const response = await axios.get<IPerson[]>(
      `${String(process.env.SERVER_HOST)}/persons/films/${film_id}`
    );
    return response.data;
  } catch (error) {
    return actorsList;
  }
};

export const getMovieComments = async (film_id: string): Promise<IComment[]> => {
  try {
    const response = await axios.get<IComment[]>(
      `${String(process.env.SERVER_HOST)}/comments/films/${film_id}`
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const getMoviesByGenre = async (genre_slug: string): Promise<IMovie[]> => {
  try {
    const response = await axios.get<IMovie[]>(
      `${String(process.env.SERVER_HOST)}/filter/films?genres=${genre_slug}&limit=10`
    );
    return response.data;
  } catch (error) {
    return mockMovies.slice(0, 5);
  }
};

export const getMovies = async (key: string): Promise<IMovie[]> => {
  try {
    const response = await axios.get<IMovie[]>(
      String(process.env.SERVER_HOST) + key
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const useGetMovies = (key: string): SWRResponse<IMovie[]> => {
  return useSWR(key, getMovies);
};

export const deleteMovieById = async (
  film_id: string,
  token: string
): Promise<AxiosResponse | null> => {
  try {
    const config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `${String(process.env.SERVER_HOST)}/films/${film_id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.request(config);
    return response;
  } catch (error) {
    return null;
  }
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
    return undefined;
  }
};

export const updateMovie = async (
  token: string,
  film_id: string,
  name_en: string,
  name_ru: string
): Promise<IMovie | undefined> => {
  try {
    const data = JSON.stringify({
      name_ru: name_ru,
      name_en: name_en,
    });

    const config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${String(process.env.SERVER_HOST)}/films/${film_id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    const response = await axios.request<IMovie>(config);
    return response.data as unknown as IMovie;
  } catch (error) {
    return undefined;
  }
};
