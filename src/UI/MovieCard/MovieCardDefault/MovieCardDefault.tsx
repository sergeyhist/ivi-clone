import { FC } from "react";
import styles from "./MovieCardDefault.module.sass";
import Link from "next/link";
import Image from "next/image";
import IMovieCard from "../../../types/IMovieCard";
import MovieCardButtons from "./MovieCardButtons/MovieCardButtons";
import { getTypeTitle, getTypeClassName } from "../MovieCard.utils";
import MovieCardRating from "../MovieCardsRating/MovieCardsRating";
import MovieCardChart from "../MovieCardsChart/MovieCardsChart";

interface MovieCardDefaultProps {
  content: IMovieCard;
  type?: "default" | "related";
}

const MovieCardDefault: FC<MovieCardDefaultProps> = ({
  content,
  type = "default",
}) => {
  const className =
    type == "related" ? styles.content_related : styles.content_default;
  const typeTitle = getTypeTitle(content.type);
  const typeClassName = getTypeClassName(content.type);

  return (
    <article className={`${styles.content} ${className}`}>
      <Link className={styles.content__link} href={content.route}>
        <div className={styles.content__filter}>
          <Image
            height={234}
            width={153}
            className={styles.content__img}
            src={content.imgUrl}
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
              <p className={styles.information__text}>{content.info}</p>
              <p className={styles.information__text}>{content.infoTime}</p>
            </div>
          </div>
          <div className={styles.age}></div>
        </div>
        <div className={styles.content__bottom}>
          <h4 className={styles.content__title}>{content.title}</h4>
          <p className={typeClassName}>{typeTitle}</p>
        </div>
      </Link>
    </article>
  );
};

export default MovieCardDefault;
