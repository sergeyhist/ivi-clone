import { FC } from "react";
import styles from "./MovieCardPoster.module.sass";
import Link from "next/link";
import Image from "next/image";
import IMovieCard from "../../../types/IMovieCard";
import MovieCardRating from "../MovieCardsRating/MovieCardsRating";

interface MovieCardPosterProps {
  content: IMovieCard;
}

const MovieCardPoster: FC<MovieCardPosterProps> = ({ content }) => {
  return (
    <article className={styles.content}>
      <Link className={styles.content__link} href={content.route}>
        <div className={styles.content__filter}>
          <Image
            height={234}
            width={153}
            className={styles.content__img}
            src={content.imgUrl}
            alt=""
          />
        </div>
      </Link>
      <div className={styles.information}>
        <MovieCardRating content={content} />
        <p className={styles.information__text}>{content.info}</p>
        <p className={styles.information__text}>
          <i className={`${styles.icon} ${styles.icon_time}`}></i>
          {content.infoTime}
        </p>
      </div>
    </article>
  );
};

export default MovieCardPoster;
