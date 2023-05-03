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
          {movie.languagesAudio.map((lang) => (
            <span className={styles.option__span} key={lang.language_id}>
              {lang.language}
            </span>
          ))}
        </MovieOption>
        <MovieOption className={styles.option} title={t("details.subtitles")}>
          {movie.languagesSubtitle.map((lang) => (
            <span className={styles.option__span} key={lang.language_id}>
              {lang.language}
            </span>
          ))}
        </MovieOption>
        <MovieOption className={styles.option} title={t("details.quality")}>
          {movie.qualities.map((quality) => (
            <MovieBadge className={styles.option__span} key={quality.quality_id}>
              {quality.quality}
            </MovieBadge>
          ))}
        </MovieOption>
      </MovieOptions>
    </TextDropDown>
  );
};

export default MovieDropDown;
