import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import styles from "./MovieSlider.module.sass";
import Slider from "../Slider/Slider";
import Link from "next/link";
import MovieCard from "../MovieCard/MovieCard";
import { breakpoints } from "./MovieSlider.utils";
import { IMovie } from "/src/types/IMovie";
import CustomTitle from "../CustomTitle/CustomTitle";

interface HomeSliderProps {
  slides: IMovie[];
  title?: string | null;
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
    <>
      {slides.length !== 0 && (
        <div data-testid="movie-slider" className={styles.wrapper}>
          {title && categoryRoute && (
            <Link href={categoryRoute} className={styles.title}>
              <CustomTitle type="link" title={title} />
            </Link>
          )}

          <Slider
            swiperClassName={styles.swiper}
            prevClassName={styles.prev}
            nextClassName={styles.next}
            breakpoints={breakpoints}
          >
            {slides.map((slide, index) => (
              <SwiperSlide className="unselectable" key={index}>
                <MovieCard type={slideType} content={slide} />
              </SwiperSlide>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

export default MovieSlider;
