import { FC } from "react";
import styles from "./MovieOptions.module.sass";
import { IMovie } from "/src/types/IMovie";
import MovieOption from "./MovieOption/MovieOption";
import { useTranslation } from "next-i18next";
import MovieBadge from "../MovieBadge/MovieBadge";

interface MovieOptionsProps {
  movie: IMovie;
}

const MovieOptions: FC<MovieOptionsProps> = ({ movie }) => {
  const { t } = useTranslation("movie");

  return (
    <div data-testid="movie-options" className={styles.options}>
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
    </div>
  );
};

export default MovieOptions;
