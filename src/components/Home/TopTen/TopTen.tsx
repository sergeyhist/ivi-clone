import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import { slides, breakpoints } from "./TopTen.utils";
import TopTenSlide from "./TopTenSlide/TopTenSlide";
import styles from "./TopTen.module.sass";
import Slider from "/src/UI/Slider/Slider";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const TopTen: FC = () => {
  const { t } = useTranslation("home");
  const { locale } = useRouter();

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.section__title}>
          {locale === "ru" && (
            <Image
              width={116}
              height={24}
              className={styles.section__img}
              src="/images/topten.svg"
              alt="topten"
            />
          )}
          {locale !== "ru" && "Top 10"} {t("top.title")}
        </h2>

        <Slider
          swiperClassName={styles.swiper}
          breakpoints={breakpoints}
          slidesPerView={"auto"}
        >
          {slides.map((slide) => (
            <SwiperSlide className={styles.slide} key={slide.id}>
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
      </div>
    </section>
  );
};

export default TopTen;
