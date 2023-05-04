import axios from "axios";
import { IActiveFilters } from "../types/IFilter";
import {IMovie} from "../types/IMovie";

const ip = "85.237.34.125";

export const getFilteredMovies = async (
  filters: IActiveFilters,
  limit: number
): Promise<IMovie[] | undefined> => {
  try {
    const response = await axios.get(`http://${ip}:4000/filter/films`, {
      params: {
        genres: filters.genre.map((genre) => genre.slug),
        rating: filters.rating.slug,
        assessments: filters.ratingCount.slug,
        year: filters.year.slug === "all" ? "" : filters.year.slug,
        country: filters.country.map((country) => country.slug),
        limit: limit,
      },
    });

    return response.data as IMovie[];
  } catch (error) {
    console.log(error);
  }
};
