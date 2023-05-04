import { FC } from "react";
import styles from "./MoviesList.module.sass";
import { IMovie } from "/src/types/IMovie";
import MovieCard from "/src/UI/MovieCard/MovieCard";

interface MoviesListProps {
  isLoading?: boolean;
  items: any[];
}

const MoviesList: FC<MoviesListProps> = ({ isLoading, items }) => {
  return (
    <div
      className={`${styles.list} ${
        isLoading ? styles.list_loading : ""
      } container`}
    >
      {items.map((movie: IMovie, i) => (
        <div key={i} className={styles.list__movie}>
          <MovieCard content={movie} />
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
