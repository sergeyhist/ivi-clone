import { FC } from "react";
import styles from "./MovieCardPoster.module.sass";
import Link from "next/link";
import Image from "next/image";
import IMovieCard from "../../../types/IMovieCard";
import MovieCardRating from "../MovieCardsRating/MovieCardsRating";

interface MovieCardPosterProps {
  slide: IMovieCard;
}

const MovieCardPoster: FC<MovieCardPosterProps> = ({ slide }) => {
  return (
    <article className={styles.slide}>
      <Link className={styles.slide__link} href={slide.route}>
        <div className={styles.slide__filter}>
          <Image
            height={234}
            width={153}
            className={styles.slide__img}
            src={slide.imgUrl}
            alt=""
          />
        </div>
      </Link>
      <div className={styles.information}>
        <MovieCardRating slide={slide} />
        <p className={styles.information__text}>{slide.info}</p>
        <p className={styles.information__text}>
          <i className={`${styles.icon} ${styles.icon_time}`}></i>
          {slide.infoTime}
        </p>
      </div>
    </article>
  );
};

export default MovieCardPoster;
