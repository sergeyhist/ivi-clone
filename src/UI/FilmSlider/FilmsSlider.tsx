import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import styles from "./FilmsSlider.module.sass";
import Slider from "/src/UI/Slider/Slider";
import Link from "next/link";
import FilmCard from "../FilmCard/FilmCard";
import IFilmCard from "../../types/IFilmCard";
import { breakpoints } from "./FilmSlider.utils";

interface HomeSliderProps {
  slides: IFilmCard[];
  title?: string;
  categoryRoute?: string;
}

const FilmsSlider: FC<HomeSliderProps> = ({ slides, title, categoryRoute }) => {
  return (
    <div className={styles.wrapper}>
      {title && categoryRoute && (
        <Link href={categoryRoute} className={styles.title}>
          {title} <i className={styles.icon}></i>
        </Link>
      )}

      <Slider prevClassName={styles.prev} nextClassName={styles.next} breakpoints={breakpoints}>
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <FilmCard slide={slide} />
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};

export default FilmsSlider;
