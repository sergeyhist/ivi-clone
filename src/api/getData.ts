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

export const getGenresSlugs = async (): Promise<string[] | undefined> => {
  try {
    const data = await getGenres();
    const slugs = data ? data.map((genre: IGenre) => genre.slug) : [];

    return slugs;
  } catch (error) {
    console.log(error);
  }
};

export const getCountriesSlugs = async (): Promise<string[] | undefined> => {
  try {
    const data = await getCountries();
    const slugs = data ? data.map((country: ICountry) => country.slug) : [];

    return slugs;
  } catch (error) {
    console.log(error);
  }
};

export const getActors = async (): Promise<IPerson[] | undefined> => {
  try {
    const response = await axios.get(
      `http://${ip}:4000/name/persons?film_role=actor`
    );

    return response.data as IPerson[];
  } catch (error) {
    console.log(error);
  }
};

export const getDirectors = async (): Promise<IPerson[] | undefined> => {
  try {
    const response = await axios.get(
      `http://${ip}:4000/name/persons?film_role=filmmaker`
    );

    return response.data as IPerson[];
  } catch (error) {
    console.log(error);
  }
};
