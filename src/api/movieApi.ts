import axios from "axios";
import { IMovie } from "../types/IMovie";
import { IComment } from "../types/IComment";
import { IPerson } from "../types/IPerson";

export const getMoviesById = async (
  filmsId: string[]
): Promise<IMovie[] | undefined> => {
  try {
    const response = await axios.get("http://85.237.34.125:4000/id/films", {
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
    const response = await axios.get<IMovie>(
      `http://85.237.34.125:4000/films/${film_id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getMoviePersons = async (film_id: string): Promise<IPerson[]> => {
  try {
    const response = await axios.get<IPerson[]>(
      `http://85.237.34.125:4000/persons/films/${film_id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getMovieComments = async (film_id: string): Promise<IComment[]> => {
  try {
    const response = await axios.get<IComment[]>(
      `http://85.237.34.125:4000/comments/films/${film_id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getMoviesByGenre = async (genre_slug: string): Promise<IMovie[]> => {
  try {
    const response = await axios.get<IMovie[]>(
      `http://85.237.34.125:4000/filter/films?genres=${genre_slug}&limit=20`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
