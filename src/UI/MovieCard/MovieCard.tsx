import { FC } from "react";
import styles from "./MovieCard.module.sass";
import Link from "next/link";
import Image from "next/image";
import { IMovie } from "/src/types/IMovie";
import MovieCardButtons from "./MovieCardButtons/MovieCardButtons";
import MovieCardRating from "./MovieCardsRating/MovieCardsRating";
import MovieCardChart from "./MovieCardsChart/MovieCardsChart";
import { useRouter } from "next/router";
import { getBackendImage } from "/src/utils/getBackendImg";
import { useTranslation } from "next-i18next";
import { declOfNum } from "/src/utils/declOfNum";
import { getAgeImg } from "/src/utils/movie/movie";

interface MovieCardDefaultProps {
  content: IMovie;
  type?: "default" | "related";
}

const MovieCardDefault: FC<MovieCardDefaultProps> = ({
  content,
  type = "default",
}) => {
  const { t } = useTranslation(["countries", "movie"]);
  const className =
    type == "related" ? styles.content_related : styles.content_default;
  const { locale } = useRouter();
  const getName = (movie: IMovie): string => {
    return String(movie["name_" + String(locale)]);
  };

  return (
    <article className={`${styles.content} ${className}`}>
      <Link className={styles.content__link} href={"/movies/" + content.film_id}>
        <div className={styles.content__filter}>
          <Image
            fill
            sizes="100%"
            className={styles.content__img}
            src={getBackendImage(content.img)}
            alt={content.name_en}
            placeholder="blur"
            blurDataURL="/images/placeholder.svg"
          />
          <div className={styles.content__inner}>
            {type == "default" && <MovieCardButtons />}
            {type == "related" && (
              <button className={styles.button}>
                <i className={`${styles.icon_save} ${styles.icon}`}></i>
              </button>
            )}
            <div className={styles.information}>
              <MovieCardRating content={content} />
              <MovieCardChart content={content} />
              <p className={styles.information__text}>{`${content.year} ${t(
                content.countries[0].slug
              )}`}</p>
              <p className={styles.information__text}>
                {declOfNum(content.duration, [
                  t("movie:minute-decl.0"),
                  t("movie:minute-decl.1"),
                  t("movie:minute-decl.2"),
                ])}
              </p>
            </div>
          </div>
          <div className={styles.age}>
            <Image
              className={styles.age__img}
              height={16}
              width={24}
              src={getAgeImg(content.age_limit)}
              alt={"age"}
            />
          </div>
        </div>
        <div className={styles.content__bottom}>
          <h4 className={styles.content__title}>{getName(content)}</h4>
        </div>
      </Link>
    </article>
  );
};

export default MovieCardDefault;
