import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import { slides, slidesPerView } from "./BannerSlider.utils";
import BannerSlide from "./BannerSlide/BannerSlide";
import styles from "./BannerSlider.module.sass";
import Slider from "/src/UI/Slider/Slider";

const BannerSlider: FC = () => {
  return (
    <section className={styles.section}>
      <Slider
        swiperClassName={styles.swiper}
        breakpoints={{
          0: {
            slidesPerView: slidesPerView,
            spaceBetween: 16,
          },
        }}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 5000 }}
        prevClassName={styles.swiper__prev}
        nextClassName={styles.swiper__next}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <BannerSlide slide={slide} />
          </SwiperSlide>
        ))}
      </Slider>
    </section>
  );
};

export default BannerSlider;
