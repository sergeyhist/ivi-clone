import axios from "axios";
import useSWR, { SWRResponse } from "swr";
import { IGenre } from "../types/IGenre";

const getGenresSlugs = async (url: string): Promise<string[]> => {
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

