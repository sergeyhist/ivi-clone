import { FC } from "react";
import styles from "./MovieCardPoster.module.sass";
import Link from "next/link";
import Image from "next/image";
import MovieCardRating from "../MovieCardsRating/MovieCardsRating";
import { IMovie } from "/src/types/IMovie";

interface MovieCardPosterProps {
  content: IMovie;
}

const MovieCardPoster: FC<MovieCardPosterProps> = ({ content }) => {
  return (
    <article className={styles.content}>
      <Link className={styles.content__link} href={"/movies/" + content.film_id}>
        <div className={styles.content__filter}>
          <Image
            height={234}
            width={153}
            className={styles.content__img}
            src={"https:" + content.img}
            alt=""
          />
        </div>
      </Link>
      <div className={styles.information}>
        <MovieCardRating content={content} />
        <p className={styles.information__text}>{`${content.year} ${content.country}`}</p>
        <p className={styles.information__text}>
          <i className={`${styles.icon} ${styles.icon_time}`}></i>
          {content.duration}
        </p>
      </div>
    </article>
  );
};

export default MovieCardPoster;
