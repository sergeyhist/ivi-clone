import { FC } from "react";
import styles from "./MovieParams.module.sass";
import Badge from "../MovieBadge/MovieBadge";
import Link from "next/link";
import { IMovie } from "/src/types/IMovie";
import { useTranslation } from "react-i18next";

interface MovieParamsProps {
  movie: IMovie;
}

const MovieParams: FC<MovieParamsProps> = ({ movie }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.params}>
      <ul className={styles.list}>
        <li className={styles.list__item}>{movie.year}</li>
        <li className={styles.list__item}>{movie.time}</li>
        <li className={styles.list__item}>{movie.age}+</li>
      </ul>
      <ul className={styles.list}>
        {movie.categories.map((category, index) => (
          <li
            key={index}
            className={`${styles.list__item} ${styles.list__item_dot}`}
          >
            <Link href={category.route} className={styles.list__link}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <Badge>{t("movie.params.quality")}</Badge>
        </li>

        <li className={styles.list__item}>
          <i className={`${styles.icon} ${styles.icon_sound}`}></i>
          {t("movie.params.lang")}
        </li>

        <li className={styles.list__item}>
          <i className={`${styles.icon} ${styles.icon_label}`}></i>
          {t("movie.params.subtitle")}
        </li>
      </ul>
    </div>
  );
};

export default MovieParams;
