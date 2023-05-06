import axios from "axios";
import { IMovie } from "../types/IMovie";

export const getMovie = async (film_id: string): Promise<IMovie | undefined> => {
  try {
    const response = await axios.get<IMovie>(
      `http://85.237.34.125:4000/films/${film_id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
