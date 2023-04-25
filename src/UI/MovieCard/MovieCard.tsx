import { FC } from "react";
import IMovieCard from "../../types/IMovieCard";
import MovieCardDefault from "./MovieCardDefault/MovieCardDefault";
import MovieCardRelated from "./MovieCardRelated/MovieCardRelated";
import MovieCardPoster from "./MovieCardPoster/MovieCardPoster";

interface HomeSliderProps {
  slide: IMovieCard;
  type?: "default" | "related" | "poster";
}

const MovieCard: FC<HomeSliderProps> = ({ slide, type = "default" }) => {
  switch (type) {
    case "default":
      return <MovieCardDefault slide={slide} />;
    case "related":
      return <MovieCardRelated slide={slide} />;
    case "poster":
      return <MovieCardPoster slide={slide} />;
    default:
      return <MovieCardDefault slide={slide} />;
  }
};

export default MovieCard;
