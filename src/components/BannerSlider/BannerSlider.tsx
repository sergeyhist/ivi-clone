import {FC} from "react";
import {Swiper} from "swiper/react";
import {SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import {slides, slidesPerView} from "./BannerSlider.utils";
import BannerSlide from "./BannerSlide/BannerSlide";
import SliderButtons from "../../UI/SliderButtons/SliderButtons";
import styles from "./BannerSlider.module.sass";

const BannerSlider: FC = () => {
  return (
    <section className={styles.section}>
      <Swiper
        modules={[Autoplay]}
        className={styles.swiper}
        spaceBetween={16}
        slidesPerView={slidesPerView}
        loop={true}
        centeredSlides={true}
        autoplay={{delay: 5000}}
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
