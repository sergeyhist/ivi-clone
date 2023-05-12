import axios from "axios";
import { ICountry } from "../types/ICountry";
import { IGenre } from "../types/IGenre";
import { IPerson } from "../types/IPerson";

export const getGenresSlugs = async (
  url: string
): Promise<string[] | undefined> => {
  try {
    const response = await axios.get(url);
    const data = response.data as IGenre[];
    const slugs = data ? data.map((genre: IGenre) => genre.slug.toLowerCase()) : [];

    return slugs;
  } catch (e) {
    console.log(e);
  }
};

export const getCountriesSlugs = async (
  url: string
): Promise<string[] | undefined> => {
  try {
    const response = await axios.get(url);
    const data = response.data as ICountry[];
    const slugs = data ? data.map((country: ICountry) => country.slug.toLowerCase()) : [];

    return slugs;
  } catch (e) {
    console.log(e);
  }
};

export const getActors = async (
  url: string
): Promise<IPerson[] | undefined> => {
  try {
    const response = await axios.get(url);

    return response.data as IPerson[];
  } catch (error) {
    console.log(error);
  }
};

export const getDirectors = async (
  url: string
): Promise<IPerson[] | undefined> => {
  try {
    const response = await axios.get(url);

    return response.data as IPerson[];
  } catch (error) {
    console.log(error);
  }
};
