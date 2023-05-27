import axios from "axios";
import useSWR, { SWRResponse } from "swr";
import { ICountry } from "../types/IMovie";

export const getCountriesSlugs = async (url: string): Promise<string[]> => {
  const response = await axios.get(url);
  const data = response.data as ICountry[];
  const slugs = data
    ? data.map((country: ICountry) => country.slug.toLowerCase())
    : [];

  return slugs;
};

export const useCountriesSlugs = (): SWRResponse<string[]> => {
  return useSWR(
    `${String(process.env.SERVER_HOST)}/countries`,
    getCountriesSlugs
  );
};
