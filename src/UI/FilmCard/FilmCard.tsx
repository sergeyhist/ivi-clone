import { FC } from "react";
import styles from "./FilmCard.module.sass";
import Link from "next/link";
import Image from "next/image";
import IFilmCard from "../../types/IFilmCard";
import IconButtons from "./IconButtons/IconButtons";
import ProgressBar from "./ProgressBar/ProgressBar";
import { getTypeTitle, getTypeClassName } from "./FilmCard.utils";

interface HomeSliderProps {
  slide: IFilmCard;
}

const FilmCard: FC<HomeSliderProps> = ({ slide }) => {
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
            <IconButtons />

            <div className={styles.information}>
              <div className={styles.information__row}>
                <div className={styles.grade}>
                  <span
                    className={`${styles.grade__number_int} ${styles.grade__number}`}
                  >
                    8
                  </span>
                  <span className={styles.grade__number}>,</span>
                  <span
                    className={`${styles.grade__number_float} ${styles.grade__number}`}
                  >
                    6
                  </span>
                </div>
                <div className={styles.raiting}>
                  {slide.raitingBars.map((value, index) => (
                    <ProgressBar
                      key={index}
                      className={styles.raiting__bar}
                      value={value}
                    />
                  ))}
                </div>
              </div>
              <div className={styles.chart}>
                <p className={styles.chart__name}>{slide.chartName}</p>
                <ProgressBar
                  value={slide.chartRaiting}
                  className={styles.chart__bar}
                />
              </div>
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

export default FilmCard;
