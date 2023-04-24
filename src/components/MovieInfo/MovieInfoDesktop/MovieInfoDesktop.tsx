import { FC } from "react";
import styles from "./MovieInfoDesktop.module.sass";
import MovieTitle from "../MovieTitle/MovieTitle";
import MovieParams from "../MovieParams/MovieParams";
import MovieTrailer from "../MovieTrailer/MovieTrailer";
import MovieTrailerButtons from "../MovieButtons/MovieButtons";
import MovieMedallions from "../MovieMedallions/MovieMedallions";
import MovieRating from "../MovieRating/MovieRating";
import MovieDropDown from "./MovieDropDown/MovieDropDown";
import { IMovie } from "/src/types/IMovie";

interface MovieInfoDesktopProps {
  movie: IMovie;
}

const MovieInfoDesktop: FC<MovieInfoDesktopProps> = ({ movie }) => {
  return (
    <section className={styles.desktop}>
      <div className={styles.trailer}>
        <div className={styles.trailer__sticky}>
          <MovieTrailer movie={movie} />
          <MovieTrailerButtons />
        </div>
      </div>
      <div className={styles.content}>
        <MovieTitle title={movie.title} year={movie.year} type={movie.type} />

        <MovieParams movie={movie} />
        <MovieMedallions movie={movie} />

        <MovieDropDown movie={movie} />

        <MovieRating
          grade={movie.rating.grade}
          category={movie.rating.gradeCategory}
          grades={movie.rating.grades}
        />
      </div>
    </section>
  );
};

export default MovieInfoDesktop;
