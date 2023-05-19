import { FC } from "react";
import styles from "./MovieCard.module.sass";
import Link from "next/link";
import Image from "next/image";
import { IMovie } from "/src/types/IMovie";
import MovieCardButtons from "./MovieCardButtons/MovieCardButtons";
import MovieCardRating from "./MovieCardsRating/MovieCardsRating";
import MovieCardChart from "./MovieCardsChart/MovieCardsChart";
import { getBackendImage } from "/src/utils/getBackendImg";
import { useTranslation } from "next-i18next";
import { declOfNum } from "/src/utils/declOfNum";
import { getAgeImg, getMovieCounty, getMovieName } from "../../utils/movie";
import { useRouter } from "next/router";

interface MovieCardDefaultProps {
  content: IMovie;
  type?: "default" | "related";
}

const MovieCard: FC<MovieCardDefaultProps> = ({ content, type = "default" }) => {
  const { t } = useTranslation(["countries", "movie"]);
  const { locale } = useRouter();
  const className = styles[`content_${type}`];

  return (
    <article data-testid="movie-card" className={`${styles.content} ${className}`}>
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
            data-testid="movie-card-image"
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
                getMovieCounty(content)
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
              data-testid="movie-card-age"
            />
          </div>
        </div>
        <div className={styles.content__bottom}>
          <h4 className={styles.content__title}>{getMovieName(content, locale)}</h4>
        </div>
      </Link>
    </article>
  );
};

export default MovieCard;
