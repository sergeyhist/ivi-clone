import { FC } from "react";
import IMovieCard from "../../types/IMovieCard";
import MovieCardDefault from "./MovieCardDefault/MovieCardDefault";
import MovieCardRelated from "./MovieCardRelated/MovieCardRelated";
import MovieCardPoster from "./MovieCardPoster/MovieCardPoster";

interface HomeSliderProps {
  content: IMovieCard;
  type?: "default" | "related" | "poster";
}

const MovieCard: FC<HomeSliderProps> = ({ content, type = "default" }) => {
  switch (type) {
    case "default":
      return <MovieCardDefault content={content} />;
    case "related":
      return <MovieCardRelated content={content} />;
    case "poster":
      return <MovieCardPoster content={content} />;
    default:
      return <MovieCardDefault content={content} />;
  }
};

export default MovieCard;
