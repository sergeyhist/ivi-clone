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
import { useRouter } from "next/router";

interface MovieInfoDesktopProps {
  movie: IMovie;
}

const MovieInfoDesktop: FC<MovieInfoDesktopProps> = ({ movie }) => {
  const { locale } = useRouter();
  return (
    <section className={styles.desktop}>
      <div className="container">
        <div className={styles.desktop__row}>
          <div className={styles.trailer}>
            <div className={styles.trailer__sticky}>
              <MovieTrailer movie={movie} />
              <MovieTrailerButtons />
            </div>
          </div>
          <div className={styles.content}>
            <MovieTitle
              title={locale === "ru" ? movie.name_ru : movie.name_en}
              year={movie.year}
            />
            <MovieParams movie={movie} />
            <MovieMedallions movie={movie} />
            <MovieDropDown movie={movie} />
            <MovieRating grade={movie.rating} grades={movie.assessments} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieInfoDesktop;
