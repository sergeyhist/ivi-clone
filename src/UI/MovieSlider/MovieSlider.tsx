import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import styles from "./MovieSlider.module.sass";
import Slider from "../Slider/Slider";
import Link from "next/link";
import MovieCard from "../MovieCard/MovieCard";
import IMovieCard from "../../types/IMovieCard";
import { breakpoints } from "./MovieSlider.utils";

interface HomeSliderProps {
  slides: IMovieCard[];
  title?: string;
  categoryRoute?: string;
  slideType?: "default" | "related";
}

const MovieSlider: FC<HomeSliderProps> = ({
  slides,
  title,
  categoryRoute = "/",
  slideType = "default",
}) => {
  return (
    <div className={styles.wrapper}>
      {title && categoryRoute && (
        <Link href={categoryRoute} className={styles.title}>
          {title} <i className={styles.icon}></i>
        </Link>
      )}

      <Slider
        swiperClassName={styles.swiper}
        prevClassName={styles.prev}
        nextClassName={styles.next}
        breakpoints={breakpoints}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <MovieCard type={slideType} slide={slide} />
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;
