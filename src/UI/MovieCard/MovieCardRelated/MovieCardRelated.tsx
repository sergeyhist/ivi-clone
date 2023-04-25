import { FC } from "react";
import styles from "./MovieCardRelated.module.sass";
import Link from "next/link";
import Image from "next/image";
import IMovieCard from "../../../types/IMovieCard";
import { getTypeTitle, getTypeClassName } from "../MovieCard.utils";
import MovieCardsRating from "../MovieCardsRating/MovieCardsRating";
import MovieCardsChart from "../MovieCardsChart/MovieCardsChart";

interface MovieCardRelatedProps {
  slide: IMovieCard;
}

const MovieCardRelated: FC<MovieCardRelatedProps> = ({ slide }) => {
  const typeTitle = getTypeTitle(slide.type);
  const typeClassName = getTypeClassName(slide.type);

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
          <div className={styles.slide__inner}>
            <button className={styles.button}>
              <i className={`${styles.icon_save} ${styles.icon}`}></i>
            </button>
            <div className={styles.information}>
              <MovieCardsRating slide={slide} />
              <MovieCardsChart slide={slide} />
              <p className={styles.information__text}>{slide.info}</p>
              <p className={styles.information__text}>{slide.infoTime}</p>
            </div>
          </div>
          <div className={styles.age}></div>
        </div>
        <div className={styles.slide__bottom}>
          <h4 className={styles.slide__title}>{slide.title}</h4>
          <p className={typeClassName}>{typeTitle}</p>
        </div>
      </Link>
    </article>
  );
};

export default MovieCardRelated;
