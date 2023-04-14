import {FC} from "react";
import Slider from "/src/UI/Slider/Slider";
import {SwiperSlide} from "swiper/react";
import BannerSlide from "./BannerSlide/BannerSlide";
import {slides, slidesPerView} from "./BannerSlider.utils";
import styles from "./BannerSlider.module.sass";
import SliderButtons from "/src/UI/Slider/SliderButtons/SliderButtons";
import {Swiper} from "swiper/react";

const BannerSlider: FC = () => {
  return (
    <section className={styles.section}>
      <Swiper
        className={styles.swiper}
        spaceBetween={16}
        slidesPerView={slidesPerView}
        loop={true}
        centeredSlides={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <BannerSlide slide={slide} />
          </SwiperSlide>
        ))}
        <SliderButtons prevClassName={styles.prev} nextClassName={styles.next} />
      </Swiper>
    </section>
  );
};

export default BannerSlider;
