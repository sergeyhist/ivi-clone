import { FC } from "react";
import styles from "./MovieTrailer.module.sass";
import Image from "next/image";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import { IMovie } from "/src/types/IMovie";
import { useTranslation } from "react-i18next";

interface MovieTrailerProps {
  movie: IMovie;
}

const MovieTrailer: FC<MovieTrailerProps> = ({ movie }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.trailer}>
      <Image
        src={movie.imgUrl}
        className={styles.trailer__img}
        width={858}
        height={483}
        alt="trailer-img"
      />
      <div className={styles.trailer__over}>
        <button className={styles.trailer__player}>
          <i className={styles.trailer__icon}></i>
          {t("movie.trailer.expand")}
        </button>
        <div className={styles.trailer__center}>
          <CustomButton className={styles.button} type="red">
            <div className={styles.button__content}>
              <p className={styles.button__title}>{t("movie.trailer.watch")}</p>
              <p className={styles.button__subtitle}>
                {t("movie.trailer.subscription")}
              </p>
            </div>
          </CustomButton>
          <p className={styles.trailer__text}>{t("movie.trailer.promo")}</p>
        </div>
        <p className={styles.trailer__age}></p>
      </div>
    </div>
  );
};

export default MovieTrailer;
