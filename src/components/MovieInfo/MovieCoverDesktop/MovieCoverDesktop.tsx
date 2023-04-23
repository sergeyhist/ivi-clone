import { FC } from "react";
import styles from "./MovieCoverDesktop.module.sass";
import MovieTitle from "../MovieTitle/MovieTitle";
import MovieParams from "../MovieParams/MovieParams";
import MovieTrailer from "../MovieTrailer/MovieTrailer";
import MovieTrailerButtons from "../MovieButtons/MovieButtons";
import MovieMedallions from "../MovieMedallions/MovieMedallions";
import MovieRating from "../MovieRating/MovieRating";
import MovieDropDown from "./MovieDropDown/MovieDropDown";
import { IMovie } from "../MovieInfo.utils";

interface MovieCoverDesktopProps {
  movie: IMovie;
}

const MovieCoverDesktop: FC<MovieCoverDesktopProps> = ({ movie }) => {
  return (
    <section className={styles.desktop}>
      <div className={styles.trailer}>
        <div className={styles.trailer__sticky}>
          <MovieTrailer movie={movie} />
          <MovieTrailerButtons />
        </div>
      </div>
      <div className={styles.content}>
        <MovieTitle
          title={movie.title}
          year={movie.movieParams.movieYear}
          type={movie.movieType}
        />

        <MovieParams params={movie.movieParams} />
        <MovieMedallions creators={movie.movieCreators} />

        <MovieDropDown movie={movie} />

        <MovieRating
          grade={movie.movieRating.grade}
          category={movie.movieRating.gradeCategory}
          grades={movie.movieRating.grades}
        />
      </div>
    </section>
  );
};

export default MovieCoverDesktop;
