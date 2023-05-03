import { FC } from "react";
import styles from "./MovieParams.module.sass";
import Badge from "../MovieBadge/MovieBadge";
import Link from "next/link";
import { IMovie } from "/src/types/IMovie";
import { useTranslation } from "next-i18next";

interface MovieParamsProps {
  movie: IMovie;
}

const MovieParams: FC<MovieParamsProps> = ({ movie }) => {
  const { t } = useTranslation("movie");

  return (
    <div className={styles.params}>
      <ul className={styles.list}>
        <li className={styles.list__item}>{movie.year}</li>
        <li className={styles.list__item}>{movie.duration}</li>
        <li className={styles.list__item}>{movie.age_limit}+</li>
      </ul>
      <ul className={styles.list}>
        {movie.genres.map((genre) => (
          <li
            key={genre.genre_id}
            className={`${styles.list__item} ${styles.list__item_dot}`}
          >
            <Link href={"/movies/" + genre.slug} className={styles.list__link}>
              {genre.genre_ru}
            </Link>
          </li>
        ))}
      </ul>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <Badge>{t("params.quality")}</Badge>
        </li>

        <li className={styles.list__item}>
          <i className={`${styles.icon} ${styles.icon_sound}`}></i>
          {t("params.lang")}
        </li>

        <li className={styles.list__item}>
          <i className={`${styles.icon} ${styles.icon_label}`}></i>
          {t("params.subtitle")}
        </li>
      </ul>
    </div>
  );
};

export default MovieParams;
