import axios from "axios";
import useSWR, { SWRResponse } from "swr";
import { IGenre } from "../types/IGenre";

const getGenresSlugs = async (url: string): Promise<string[]> => {
  const response = await axios.get(url);
  const data = response.data as IGenre[];
  const slugs = data ? data.map((genre: IGenre) => genre.slug.toLowerCase()) : [];

  return slugs;
};

export const useGenresSlugs = (): SWRResponse<string[]> => {
  return useSWR(`${String(process.env.SERVER_HOST)}/genres`, getGenresSlugs);
};

export const getGenres = async (key = "/genres?limit=100"): Promise<IGenre[]> => {
  try {
    if (!process.env.SERVER_HOST)
      throw new Error("process.env.SERVER_HOST undefined");
    const response = await axios.get<IGenre[]>(process.env.SERVER_HOST + key);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const updateGenre = async (
  token: string,
  genre_id: string,
  genre_en: string,
  genre_ru: string
): Promise<IGenre | undefined> => {
  try {
    if (!process.env.SERVER_HOST)
      throw new Error("process.env.SERVER_HOST undefined");

    const data = JSON.stringify({
      genre_ru: genre_ru,
      genre_en: genre_en,
    });

    const config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${process.env.SERVER_HOST}/genres/${genre_id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    const response = await axios.request<IGenre>(config);
    return response.data as unknown as IGenre;
  } catch (error) {
    console.error(error);
  }
};
