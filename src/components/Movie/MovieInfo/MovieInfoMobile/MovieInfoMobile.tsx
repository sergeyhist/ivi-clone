import { FC, useState } from "react";
import styles from "./MovieInfoMobile.module.sass";
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
import CustomTitle from "/src/UI/CustomTitle/CustomTitle";
import { getMovieName } from "/src/utils/movie";
import Container from "/src/UI/Container/Container";

interface MovieInfoMobileProps {
  movie: IMovie;
  persons: IPerson[] | undefined;
}

const MovieInfoMobile: FC<MovieInfoMobileProps> = ({ movie, persons }) => {
  const { t } = useTranslation("movie");
  const { locale } = useRouter();
  const [textHeight, setTextHeight] = useState<number>(100);

  return (
    <section data-testid="movie-info-mobile" className={styles.mobile}>
      <Container>
        <CustomTitle
          className={styles.mobile__title}
          type="large"
          title={`${getMovieName(movie, locale)} (${movie.year})`}
        />
        <MovieParams movie={movie} />
        <MovieTrailer movie={movie} />
        <div className={styles.mobile__row}>
          <div className={styles.mobile__content}>
            <MovieMedallions movie={movie} persons={persons} />
            <TextDropDown
              toggleTitles={{
                defaultTitle: t("details.show"),
                activeTitle: t("details.hide"),
              }}
              textHeight={textHeight}
            >
              <MovieDescription
                setTextHeight={setTextHeight}
                description={movie.description}
              />
            </TextDropDown>
            <MovieRating grade={movie.rating} grades={movie.assessments} />
            <MovieOptions movie={movie} />
          </div>
          <div className={styles.mobile__buttons}>
            <MovieTrailerButtons />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MovieInfoMobile;
