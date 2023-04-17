import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import styles from "./FilmsSlider.module.sass";
import Slider from "/src/UI/Slider/Slider";
import Link from "next/link";
import FilmSlide from "../FilmSlide/FilmSlide";
import IFilmSlide from "../../types/IFilmSlide";

interface HomeSliderProps {
  slides: IFilmSlide[];
  title?: string;
  categoryRoute?: string;
}

const FilmsSlider: FC<HomeSliderProps> = ({ slides, title, categoryRoute = "/" }) => {
  return (
    <div className={styles.wrapper}>
      {title && (
        <Link href={categoryRoute} className={styles.title}>
          {title} <i className={styles.icon}></i>
        </Link>
      )}

      <Slider
        prevClassName={styles.prev}
        nextClassName={styles.next}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          395: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          510: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          745: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          920: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
          1100: {
            slidesPerView: 6,
            spaceBetween: 24,
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <FilmSlide slide={slide} />
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};

export default FilmsSlider;
