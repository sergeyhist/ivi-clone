import { FC } from "react";
import styles from "./FilmSlide.module.sass";
import Link from "next/link";
import Image from "next/image";
import IFilmSlide from "../../types/IFilmSlide";

interface HomeSliderProps {
  slide: IFilmSlide;
}

const FilmSlide: FC<HomeSliderProps> = ({ slide }) => {
  const type = slide.type ? "Подписка" : "Бесплатно";
  const typeClassName = slide.type ? `${styles.slide__type} ${styles.slide__type_active}` : styles.slide__type;

  return (
    <article className={styles.slide}>
      <Link className={styles.slide__link} href={slide.route}>
        <div className={styles.slide__filter}>
          <Image height={234} width={153} className={styles.slide__img} src={slide.imgUrl} alt="" />
          <div className={styles.slide__inner}>
            <div className={styles.icons}>
              <button data-tooltip-id="save" data-tooltip-place={"top"} className={styles.icons__button}>
                <i className={`${styles.icon_save} ${styles.icon}`}></i>
              </button>
              <button data-tooltip-id="similar" data-tooltip-place={"top"} className={styles.icons__button}>
                <i className={`${styles.icon_similar} ${styles.icon}`}></i>
              </button>
              <button data-tooltip-id="favorite" data-tooltip-place={"top"} className={styles.icons__button}>
                <i className={`${styles.icon_star} ${styles.icon}`}></i>
              </button>
              <button data-tooltip-id="block" data-tooltip-place={"top"} className={styles.icons__button}>
                <i className={`${styles.icon_block} ${styles.icon}`}></i>
              </button>
            </div>

            <div className={styles.information}>
              <div className={styles.information__row}>
                <div className={styles.grade}>
                  <span className={`${styles.grade__number_int} ${styles.grade__number}`}>8</span>
                  <span className={styles.grade__number}>,</span>
                  <span className={`${styles.grade__number_float} ${styles.grade__number}`}>6</span>
                </div>
                <div className={styles.raiting}>
                  <div className={styles.raiting__bar}>
                    <div style={{ width: slide.raitingBar1 }} className={styles.raiting__value}></div>
                  </div>
                  <div className={styles.raiting__bar}>
                    <div style={{ width: slide.raitingBar2 }} className={styles.raiting__value}></div>
                  </div>
                  <div className={styles.raiting__bar}>
                    <div style={{ width: slide.raitingBar3 }} className={styles.raiting__value}></div>
                  </div>
                  <div className={styles.raiting__bar}>
                    <div style={{ width: slide.raitingBar4 }} className={styles.raiting__value}></div>
                  </div>
                </div>
              </div>
              <div className={styles.chart}>
                <p className={styles.chart__name}>{slide.chartName}</p>
                <div className={styles.chart__bar}>
                  <div style={{ width: slide.chartRaiting }} className={styles.chart__value}></div>
                </div>
              </div>
              <p className={styles.information__text}>{slide.info}</p>
              <p className={styles.information__text}>{slide.infoTime}</p>
            </div>
          </div>
        </div>
        <div className={styles.slide__bottom}>
          <h4 className={styles.slide__title}>{slide.title}</h4>
          <p className={typeClassName}>{type}</p>
        </div>
      </Link>
    </article>
  );
};

export default FilmSlide;
