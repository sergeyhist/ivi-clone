import { FC } from "react";
import styles from "./MovieInfoMobile.module.sass";
import MovieTitle from "../MovieTitle/MovieTitle";
import MovieParams from "../MovieParams/MovieParams";
import MovieTrailer from "../MovieTrailer/MovieTrailer";
import MovieTrailerButtons from "../MovieButtons/MovieButtons";
import MovieContent from "./MovieContent/MovieContent";
import { IMovie } from "/src/types/IMovie";
import { useRouter } from "next/router";

interface MovieInfoMobileProps {
  movie: IMovie;
}

const MovieInfoMobile: FC<MovieInfoMobileProps> = ({ movie }) => {
  const { locale } = useRouter();
  return (
    <section className={styles.mobile}>
      <div className="container">
        <MovieTitle
          title={locale === "ru" ? movie.name_ru : movie.name_en}
          year={movie.year}
        />
        <MovieParams movie={movie} />
        <MovieTrailer movie={movie} />
        <div className={styles.mobile__row}>
          <div className={styles.mobile__content}>
            <MovieContent movie={movie} />
          </div>
          <div className={styles.mobile__buttons}>
            <MovieTrailerButtons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieInfoMobile;
