import { FC } from "react";
import styles from "./MovieDropDown.module.sass";
import MovieDescription from "../../MovieDescription/MovieDescription";
import MovieOption from "../../MovieOption/MovieOption";
import MovieBadge from "../../MovieBadge/MovieBadge";
import MovieOptions from "../../MovieOptions/MovieOptions";
import TextDropDown from "/src/UI/TextDropDown/TextDropDown";
import { IMovie } from "/src/types/IMovie";
import { useTranslation } from "next-i18next";

interface MovieDropDownProps {
  movie: IMovie;
}

const MovieDropDown: FC<MovieDropDownProps> = ({ movie }) => {
  const { t } = useTranslation("movie");

  return (
    <TextDropDown
      toggleTitles={{
        defaultTitle: t("details.show"),
        activeTitle: t("details.hide"),
      }}
    >
      <MovieDescription descriptionHTML={movie.description} />
      <MovieOptions>
        <MovieOption className={styles.option} title={t("details.langs")}>
          {movie.langs.map((lang, index) => (
            <span className={styles.option__span} key={index}>
              {lang.name}
            </span>
          ))}
        </MovieOption>
        <MovieOption className={styles.option} title={t("details.subtitles")}>
          {movie.subtitles.map((lang, index) => (
            <span className={styles.option__span} key={index}>
              {lang.name}
            </span>
          ))}
        </MovieOption>
        <MovieOption className={styles.option} title={t("details.quality")}>
          {movie.qualities.map((movieQuality, index) => (
            <MovieBadge className={styles.option__span} key={index}>
              {movieQuality}
            </MovieBadge>
          ))}
        </MovieOption>
      </MovieOptions>
    </TextDropDown>
  );
};

export default MovieDropDown;
