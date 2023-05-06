import axios from "axios";
import { IComment } from "../types/IComment";

export const getMovieComments = async (
  film_id: string
): Promise<IComment[] | undefined> => {
  try {
    const response = await axios.get<IComment[]>(
      `http://85.237.34.125:4000/comments/films/${film_id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
