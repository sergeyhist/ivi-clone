import { FC } from "react";
import styles from "./MovieInfoMobile.module.sass";
import MovieTitle from "../MovieInfoComponents/MovieTitle/MovieTitle";
import MovieParams from "../MovieInfoComponents/MovieParams/MovieParams";
import MovieTrailer from "../MovieInfoComponents/MovieTrailer/MovieTrailer";
import MovieTrailerButtons from "../MovieInfoComponents/MovieButtons/MovieButtons";
import MovieMedallions from "../MovieInfoComponents/MovieMedallions/MovieMedallions";
import MovieDescription from "../MovieInfoComponents/MovieDescription/MovieDescription";
import MovieRating from "../MovieInfoComponents/MovieRating/MovieRating";
import MovieOptions from "../MovieInfoComponents/MovieOptions/MovieOptions";
import TextDropDown from "/src/UI/TextDropDown/TextDropDown";
import { IMovie } from "/src/types/IMovie";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { IPerson } from "/src/types/IPerson";

interface MovieInfoMobileProps {
  movie: IMovie;
  persons: IPerson[] | undefined;
}

const MovieInfoMobile: FC<MovieInfoMobileProps> = ({ movie, persons }) => {
  const { t } = useTranslation("movie");
  const { locale } = useRouter();

  return (
    <section className={styles.mobile}>
      <div className="container">
        <MovieTitle
          title={locale === "ru" ? movie.name_ru : movie.name_en}
          year={movie.year}
        />
        <MovieParams movie={movie} />
        <MovieTrailer />
        <div className={styles.mobile__row}>
          <div className={styles.mobile__content}>
            <MovieMedallions movie={movie} persons={persons} />
            <TextDropDown
              toggleTitles={{
                defaultTitle: t("details.show"),
                activeTitle: t("details.hide"),
              }}
            >
              <MovieDescription descriptionHTML={movie.description} />
            </TextDropDown>
            <MovieRating grade={movie.rating} grades={movie.assessments} />
            <MovieOptions movie={movie} />
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
