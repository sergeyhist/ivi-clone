import { FC } from "react";
import styles from "./TvSlider.module.sass";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import ITVSlide from "/src/types/ITVSlide";
import Slider from "/src/UI/Slider/Slider";
import { tvSlideBreakpoints } from "../TvDropDown.utils";
import Link from "next/link";

interface TvSliderProps {
  slides: ITVSlide[];
}

const TvSlider: FC<TvSliderProps> = ({ slides }) => {
  return (
    <Slider
      breakpoints={tvSlideBreakpoints}
      swiperClassName={styles.channels__slider}
      prevClassName={styles.button_prev}
      nextClassName={styles.button_next}
      dataTestId={"tv-slider"}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Link className={styles.link} href={slide.link} target="_blank">
            <Image
              className={styles.channels__slider_item + " unselectable"}
              src={slide.imageUrl}
              alt="slider item"
              width={88}
              height={58}
              placeholder="blur"
              blurDataURL="/images/placeholder.svg"
            />
          </Link>
        </SwiperSlide>
      ))}
      <div className={styles.slider__shadow_left}></div>
      <div className={styles.slider__shadow_right}></div>
    </Slider>
  );
};

export default TvSlider;
