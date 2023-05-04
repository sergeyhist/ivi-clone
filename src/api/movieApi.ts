import axios from "axios";
import {IMovie} from "/src/types/IMovie";

const getMoviesById = async (filmsId: string[]): Promise<IMovie[] | undefined> => {
  try {
    const response = await axios.get(
      "http://85.237.34.125:4000/id/films",
      {
        params: {
          films: filmsId,
        },
      }
    );
    return response.data as IMovie[];
  } catch (err) {
    console.log(err);
  }
};


export default {getMoviesById};