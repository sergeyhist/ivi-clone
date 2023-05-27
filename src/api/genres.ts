import axios from "axios";
import useSWR, { SWRResponse } from "swr";
import { IGenre } from "../types/IGenre";

export const getGenresSlugs = async (url: string): Promise<string[]> => {
  const response = await axios.get(url);
  const data = response.data as IGenre[];
  const slugs = data
    ? data.map((genre: IGenre) => genre.slug.toLowerCase())
    : [];

  return slugs;
};

export const useGenresSlugs = (): SWRResponse<string[]> => {
  return useSWR(`${String(process.env.SERVER_HOST)}/genres`, getGenresSlugs);
};

export const getGenres = async (
  key = "/genres?limit=100"
): Promise<IGenre[]> => {
  try {
    const response = await axios.get<IGenre[]>(
      String(process.env.SERVER_HOST) + key
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const useGetGenres = (key: string): SWRResponse<IGenre[]> => {
  return useSWR(key, getGenres);
};

export const updateGenre = async (
  token: string,
  genre_id: string,
  genre_en: string,
  genre_ru: string
): Promise<IGenre | undefined> => {
  try {
    const data = JSON.stringify({
      genre_ru: genre_ru,
      genre_en: genre_en,
    });

    const config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${String(process.env.SERVER_HOST)}/genres/${genre_id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    const response = await axios.request(config);
    return response.data as unknown as IGenre;
  } catch (error) {
    return undefined;
  }
};
