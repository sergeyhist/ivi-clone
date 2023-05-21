import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import { slides, breakpoints } from "./BannerSlider.utils";
import BannerSlide from "./BannerSlide/BannerSlide";
import styles from "./BannerSlider.module.sass";
import Slider from "/src/UI/Slider/Slider";
import Container from "/src/UI/Container/Container";

const BannerSlider: FC = () => {
  return (
    <section data-testid="banner-slider" className={styles.section}>
      <Container>
        <Slider
          swiperClassName={styles.swiper}
          breakpoints={breakpoints}
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 15000 }}
          prevClassName={styles.swiper__prev}
          nextClassName={styles.swiper__next}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <BannerSlide slide={slide} />
            </SwiperSlide>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default BannerSlider;
