import { FC } from "react";
import styles from "./MovieParams.module.sass";
import Badge from "../MovieBadge/MovieBadge";
import Link from "next/link";
import { IMovieParams } from "../MovieInfo.utils";

interface MovieParamsProps {
  params: IMovieParams;
}

const MovieParams: FC<MovieParamsProps> = ({ params }) => {
  return (
    <div className={styles.params}>
      <ul className={styles.list}>
        <li className={styles.list__item}>{params.movieYear}</li>
        <li className={styles.list__item}>{params.movieTime}</li>
        <li className={styles.list__item}>{params.movieAge}+</li>
      </ul>
      <ul className={styles.list}>
        {params.movieCategories.map((category, index) => (
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
          <Badge>{params.movieQualities[0]}</Badge>
        </li>
        <li className={styles.list__item}>
          <i className={`${styles.icon} ${styles.icon_sound}`}></i>
          {params.movieLangs[0].shortName}
        </li>
        <li className={styles.list__item}>
          <i className={`${styles.icon} ${styles.icon_label}`}></i>
          {params.movieSubtitles[0].shortName}
        </li>
      </ul>
    </div>
  );
};

export default MovieParams;
