import axios from "axios";
import { IFilters } from "../types/IFilter";
import { IMovie } from "../types/IMovie";

const ip = "85.237.34.125";

export const getFilteredMovies = async (
  filters: IFilters,
  limit: number
): Promise<IMovie[] | undefined> => {
  try {
    const response = await axios.get(`http://${ip}:4000/filter/films`, {
      params: {
        genres: filters.genres,
        countries: filters.countries,
        rating: filters.rating === "0" ? undefined : filters.rating,
        assessments: filters.assessments === "0" ? undefined : filters.assessments,
        year_min: filters.year.length > 0 ? (filters.year as string).split('-')[0] : undefined,
        year_max: filters.year.length > 0 ? (filters.year as string).split('-')[1] : undefined,
        limit: limit,
      },
    });

    return response.data as IMovie[];
  } catch (error) {
    console.log(error);
  }
};
