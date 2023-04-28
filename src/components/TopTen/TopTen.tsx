import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import { slides, breakpoints } from "./TopTen.utils";
import TopTenSlide from "./TopTenSlide/TopTenSlide";
import styles from "./TopTen.module.sass";
import Slider from "/src/UI/Slider/Slider";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const TopTen: FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <h2 className={styles.section__title}>
        <Image
          width={116}
          height={24}
          className={styles.section__img}
          src="/images/topten.svg"
          alt=""
        />{" "}
        {t("home.top.title")}
      </h2>

      <Slider swiperClassName={styles.swiper} breakpoints={breakpoints}>
        {slides.map((slide) => (
          <SwiperSlide className="unselectable" key={slide.id}>
            <TopTenSlide
              mainImgUrl={slide.mainImgUrl}
              logoImgUrl={slide.logoImgUrl}
              numberImgUrl={slide.numberImgUrl}
              route={slide.route}
              id={slide.id}
            />
          </SwiperSlide>
        ))}
      </Slider>
    </section>
  );
};

export default TopTen;
