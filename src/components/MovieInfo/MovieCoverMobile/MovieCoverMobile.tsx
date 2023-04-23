import { FC } from "react";
import styles from "./MovieCoverMobile.module.sass";
import MovieTitle from "../MovieTitle/MovieTitle";
import MovieParams from "../MovieParams/MovieParams";
import MovieTrailer from "../MovieTrailer/MovieTrailer";
import MovieTrailerButtons from "../MovieButtons/MovieButtons";
import { IMovie } from "../MovieInfo.utils";
import MovieContent from "./MovieContent/MovieContent";

interface MovieCoverMobileProps {
  movie: IMovie;
}

const MovieCoverMobile: FC<MovieCoverMobileProps> = ({ movie }) => {
  return (
    <>
      <section className={styles.mobile}>
        <MovieTitle
          title={movie.title}
          type={movie.movieType}
          year={movie.movieParams.movieYear}
        />
        <MovieParams params={movie.movieParams} />
        <MovieTrailer movie={movie} />
        <div className={styles.mobile__row}>
          <div className={styles.mobile__content}>
            <MovieContent movie={movie} />
          </div>
          <div className={styles.mobile__buttons}>
            <MovieTrailerButtons />
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieCoverMobile;
