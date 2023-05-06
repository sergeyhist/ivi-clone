import axios from "axios";
import { IPerson } from "../types/IPerson";

export const getMoviePersons = async (
  film_id: string
): Promise<IPerson[] | undefined> => {
  try {
    const response = await axios.get<IPerson[]>(
      `http://85.237.34.125:4000/persons/films/${film_id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
