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
        rating: filters.rating,
        assessments: filters.assessments,
        year: filters.year === "all" ? undefined : filters.year,
        countries: filters.countries,
        limit: limit,
      },
    });

    return response.data as IMovie[];
  } catch (error) {
    console.log(error);
  }
};
