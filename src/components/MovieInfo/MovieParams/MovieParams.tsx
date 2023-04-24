import { FC } from "react";
import styles from "./MovieParams.module.sass";
import Badge from "../MovieBadge/MovieBadge";
import Link from "next/link";
import { IMovie } from "/src/types/IMovie";

interface MovieParamsProps {
  movie: IMovie;
}

const MovieParams: FC<MovieParamsProps> = ({ movie }) => {
  const quality = movie.qualities.find((quality) => quality === "FullHD");
  const lang = movie.langs.find((lang) => lang.shortName === "Рус");
  const subtitle = movie.subtitles.find(
    (subtitle) => subtitle.shortName === "Рус"
  );

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
        {quality && (
          <li className={styles.list__item}>
            <Badge>{quality}</Badge>
          </li>
        )}
        {lang && (
          <li className={styles.list__item}>
            <i className={`${styles.icon} ${styles.icon_sound}`}></i>
            {lang.shortName}
          </li>
        )}
        {subtitle && (
          <li className={styles.list__item}>
            <i className={`${styles.icon} ${styles.icon_label}`}></i>
            {subtitle.shortName}
          </li>
        )}
      </ul>
    </div>
  );
};

export default MovieParams;
