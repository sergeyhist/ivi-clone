import { FC } from "react";
import styles from "./MovieTrailer.module.sass";
import Image from "next/image";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import { IMovie } from "../MovieInfo.utils";

interface MovieTrailerProps {
  movie: IMovie;
}

const MovieTrailer: FC<MovieTrailerProps> = ({ movie }) => {
  return (
    <div className={styles.trailer}>
      <Image
        src={movie.movieImgUrl}
        className={styles.trailer__img}
        width={858}
        height={483}
        alt="trailer-img"
      />
      <div className={styles.trailer__over}>
        <button className={styles.trailer__player}>
          <i className={styles.trailer__icon}></i>
          Развернуть трейлер
        </button>
        <div className={styles.trailer__center}>
          <CustomButton className={styles.button} type="red">
            <div className={styles.button__content}>
              <p className={styles.button__title}>Смотреть</p>
              <p className={styles.button__subtitle}>по подписке Иви</p>
            </div>
          </CustomButton>
          <p className={styles.trailer__text}>Первые 30 дней подписки за 1 ₽</p>
        </div>
        <p className={styles.trailer__age}></p>
      </div>
    </div>
  );
};

export default MovieTrailer;
