import axios from "axios";
import { IMovie } from "../types/IMovie";
import { IComment } from "../types/IComment";
import { IPerson } from "../types/IPerson";

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

export const getMovie = async (film_id: string): Promise<IMovie | null> => {
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
