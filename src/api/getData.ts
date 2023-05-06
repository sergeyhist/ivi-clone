import axios from "axios";
import { IGenre } from "../types/IGenre";

const ip = "85.237.34.125"

export const getGenres = async () => {
  try {
    const response = await axios.get(`http://${ip}:4000/genres`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCountries = async () => {
  try {
    const response = await axios.get(`http://${ip}:4000/countries`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getGenresSlugs = async (): Promise<string[] | undefined> => {
  try {
    const data = await getGenres();
    const slugs = await data.map((genre: IGenre) => genre.slug);

    return slugs;
  } catch (error) {
    console.log(error);
  }
};

export const getCountriesSlugs = async (): Promise<string[] | undefined> => {
  try {
    const data = await getCountries();
    const slugs = await data.map((country: any) => country.slug);

    return slugs;
  } catch (error) {
    console.log(error);
  }
};

export const getActors = async (): Promise<string[] | undefined> => {
  try {
    const response = await axios.get(`http://${ip}:4000/name/persons?film_role=actor`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDirectors = async (): Promise<string[] | undefined> => {
  try {
    const response = await axios.get(`http://${ip}:4000/name/persons?film_role=filmmaker`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
