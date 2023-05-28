import { FC } from "react";
import styles from "./MoviePoster.module.sass";
import Link from "next/link";
import Image from "next/image";
import { IMovie } from "/src/types/IMovie";
import { useTranslation } from "next-i18next";
import { declOfNum } from "/src/utils/declOfNum";
import { getBackendImage } from "/src/utils/getBackendImg";

interface MoviePosterProps {
  content: IMovie;
}

const MoviePoster: FC<MoviePosterProps> = ({ content }) => {
  const { t } = useTranslation(["countries", "movie"]);

  return (
    <article className={styles.content}>
      <Link className={styles.content__link} href={"/movies/" + content.film_id}>
        <div className={styles.content__filter}>
          <Image
            height={234}
            width={153}
            className={styles.content__img}
            src={getBackendImage(content.img)}
            alt={content.name_en}
            placeholder="blur"
            blurDataURL="/images/placeholder.svg"
          />
        </div>
      </Link>
      <div className={styles.information}>
        <div className={styles.rating}>
          <div className={styles.grade}>
            <span className={`${styles.grade__number_int} ${styles.grade__number}`}>
              {String(content.rating)[0]}
            </span>
            <span className={styles.grade__number}>,</span>
            <span
              className={`${styles.grade__number_float} ${styles.grade__number}`}
            >
              {String(content.rating)[2] || 0}
            </span>
          </div>
        </div>
        <p className={styles.information__text}>{`${content.year} ${t(
          content.countries[0].slug
        )}`}</p>
        <p className={styles.information__text}>
          <i className={`${styles.icon} ${styles.icon_time}`}></i>
          {declOfNum(content.duration, [
            t("movie:minute-decl.0"),
            t("movie:minute-decl.1"),
            t("movie:minute-decl.2"),
          ])}
        </p>
      </div>
    </article>
  );
};

export default MoviePoster;
