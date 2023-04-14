import {FC} from "react";
import Link from "next/link";
import styles from "./TopTen.module.sass";
import Slider from "/src/UI/Slider/Slider";
import {SwiperSlide} from "swiper/react";
import TopTenSlide from "./TopTenSlide/TopTenSlide";
import SliderButtons from "/src/UI/Slider/SliderButtons/SliderButtons";
import {Swiper} from "swiper/react";
import {slides} from "./TopTen.utils";

const TopTen: FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.section__title}>
        <img className={styles.section__img} src="/images/topten.svg" alt="" /> за неделю
      </h2>

      <div className={styles.row}>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            880: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1160: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
          }}
          className={styles.swiper}
          spaceBetween={24}
          slidesPerView={5}
          loop={false}
          centeredSlides={false}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <TopTenSlide
                mainImgUrl={slide.mainImgUrl}
                logoImgUrl={slide.logoImgUrl}
                numberImgUrl={slide.numberImgUrl}
                route={slide.route}
                id={slide.id}
              />
            </SwiperSlide>
          ))}

          <SliderButtons />
        </Swiper>
      </div>
    </section>
  );
};

export default TopTen;
