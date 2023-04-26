import { FC } from "react";
import IMovieCard from "../../types/IMovieCard";
import MovieCardDefault from "./MovieCardDefault/MovieCardDefault";
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
      return <MovieCardDefault type="related" content={content} />;
    case "poster":
      return <MovieCardPoster content={content} />;
  }
};

export default MovieCard;
