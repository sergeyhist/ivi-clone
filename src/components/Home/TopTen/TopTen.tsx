import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import { breakpoints } from "./TopTen.utils";
import TopTenSlide from "./TopTenSlide/TopTenSlide";
import styles from "./TopTen.module.sass";
import Slider from "/src/UI/Slider/Slider";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Container from "/src/UI/Container/Container";
import { IMovie } from "/src/types/IMovie";

interface TopTenProps {
  topTenMovies: IMovie[];
}

const TopTen: FC<TopTenProps> = ({ topTenMovies }) => {
  const { t } = useTranslation("home");
  const { locale } = useRouter();

  return (
    <section data-testid="topten-slider" className={styles.section}>
      <Container>
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
          {topTenMovies.map((movie, index) => (
            <SwiperSlide className={styles.slide} key={index}>
              <TopTenSlide
                image={movie.img}
                number={index + 1}
                route={"/movies/" + movie.film_id}
              />
            </SwiperSlide>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default TopTen;
