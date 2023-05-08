import axios from "axios";
import { ICountry } from "../types/ICountry";
import { IGenre } from "../types/IGenre";
import { IPerson } from "../types/IPerson";

const ip = "85.237.34.125";

export const getGenres = async (): Promise<IGenre[] | undefined> => {
  try {
    const response = await axios.get(`http://${ip}:4000/genres`);

    return response.data as IGenre[];
  } catch (error) {
    console.log(error);
  }
};

export const getCountries = async (): Promise<ICountry[] | undefined> => {
  try {
    const response = await axios.get(`http://${ip}:4000/countries`);

    return response.data as ICountry[];
  } catch (error) {
    console.log(error);
  }
};

export const getGenresSlugs = async (
  url: string
): Promise<string[] | undefined> => {
  try {
    const response = await axios.get(url);
    const data = response.data as IGenre[];
    const slugs = data ? data.map((genre: IGenre) => genre.slug) : [];

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
    const slugs = data ? data.map((country: ICountry) => country.slug) : [];

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
