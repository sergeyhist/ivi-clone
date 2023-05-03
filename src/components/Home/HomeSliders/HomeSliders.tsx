import { FC } from "react";
import MovieSlider from "/src/UI/MovieSlider/MovieSlider";
import styles from "./HomeSliders.module.sass";
import { useTranslation } from "next-i18next";
import { movie } from "/src/utils/movie";

const HomeSliders: FC = () => {
  const { t } = useTranslation("home");

  return (
    <section className={styles.section}>
      <div className="container">
        <MovieSlider
          title={t("compilations.subscribe")}
          slides={[movie, movie, movie, movie, movie, movie, movie, movie, movie]}
        />
        <MovieSlider
          title={t("compilations.comedy")}
          slides={[movie, movie, movie, movie, movie, movie, movie, movie, movie]}
        />
      </div>
    </section>
  );
};

export default HomeSliders;
