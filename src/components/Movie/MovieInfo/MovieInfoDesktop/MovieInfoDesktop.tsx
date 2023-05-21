import { FC, useState } from "react";
import styles from "./MovieInfoDesktop.module.sass";
import MovieParams from "../MovieInfoComponents/MovieParams/MovieParams";
import MovieTrailer from "../MovieInfoComponents/MovieTrailer/MovieTrailer";
import MovieTrailerButtons from "../MovieInfoComponents/MovieButtons/MovieButtons";
import MovieMedallions from "../MovieInfoComponents/MovieMedallions/MovieMedallions";
import MovieRating from "../MovieInfoComponents/MovieRating/MovieRating";
import MovieDescription from "../MovieInfoComponents/MovieDescription/MovieDescription";
import MovieOptions from "../MovieInfoComponents/MovieOptions/MovieOptions";
import TextDropDown from "/src/UI/TextDropDown/TextDropDown";
import { IMovie } from "/src/types/IMovie";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { IPerson } from "/src/types/IPerson";
import { getMovieName } from "../../../../utils/movie";
import CustomTitle from "/src/UI/CustomTitle/CustomTitle";
import Container from "/src/UI/Container/Container";

interface MovieInfoDesktopProps {
  movie: IMovie;
  persons: IPerson[] | undefined;
}

const MovieInfoDesktop: FC<MovieInfoDesktopProps> = ({ movie, persons }) => {
  const { t } = useTranslation("movie");
  const { locale } = useRouter();
  const [textHeight, setTextHeight] = useState<number>(100);

  return (
    <section data-testid="movie-info-desktop" className={styles.desktop}>
      <Container>
        <div className={styles.desktop__row}>
          <div className={styles.trailer}>
            <div className={styles.trailer__sticky}>
              <MovieTrailer movie={movie} />
              <MovieTrailerButtons />
            </div>
          </div>
          <div className={styles.content}>
            <CustomTitle
              className={styles.title}
              type="large"
              title={`${getMovieName(movie, locale)} (${movie.year})`}
            />

            <MovieParams movie={movie} />
            <MovieMedallions movie={movie} persons={persons} />
            <TextDropDown
              textHeight={textHeight}
              toggleTitles={{
                defaultTitle: t("details.show"),
                activeTitle: t("details.hide"),
              }}
            >
              <MovieDescription
                setTextHeight={setTextHeight}
                description={movie.description}
              />
              <MovieOptions movie={movie} />
            </TextDropDown>
            <MovieRating grade={movie.rating} grades={movie.assessments} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MovieInfoDesktop;
