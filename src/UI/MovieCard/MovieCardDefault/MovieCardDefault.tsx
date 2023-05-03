import { FC } from "react";
import styles from "./MovieCardDefault.module.sass";
import Link from "next/link";
import Image from "next/image";
import { IMovie } from "/src/types/IMovie";
import MovieCardButtons from "./MovieCardButtons/MovieCardButtons";
import MovieCardRating from "../MovieCardsRating/MovieCardsRating";
import MovieCardChart from "../MovieCardsChart/MovieCardsChart";
import { useRouter } from "next/router";

interface MovieCardDefaultProps {
  content: IMovie;
  type?: "default" | "related";
}

const MovieCardDefault: FC<MovieCardDefaultProps> = ({ content, type = "default" }) => {
  const className = type == "related" ? styles.content_related : styles.content_default;
  const { locale } = useRouter();

  return (
    <article className={`${styles.content} ${className}`}>
      <Link className={styles.content__link} href={"movies/" + content.film_id}>
        <div className={styles.content__filter}>
          <Image
            height={234}
            width={153}
            className={styles.content__img}
            src={"https:" + content.img}
            alt=""
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
              <p
                className={styles.information__text}
              >{`${content.year} ${content.country}`}</p>
              <p className={styles.information__text}>{content.duration} минут</p>
            </div>
          </div>
          <div className={styles.age}></div>
        </div>
        <div className={styles.content__bottom}>
          <h4 className={styles.content__title}>
            {content[`name_${String(locale)}`] || content.name_en}
          </h4>
        </div>
      </Link>
    </article>
  );
};

export default MovieCardDefault;
