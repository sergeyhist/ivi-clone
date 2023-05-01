import { FC } from "react";
import { slides } from "./HomeSliders.utils";
import MovieSlider from "/src/UI/MovieSlider/MovieSlider";
import styles from "./HomeSliders.module.sass";
import { useTranslation } from "next-i18next";

const HomeSliders: FC = () => {
  const { t } = useTranslation("home");

  return (
    <section className={styles.section}>
      <div className="container">
        <MovieSlider title={t("compilations.subscribe")} slides={slides} />
        <MovieSlider title={t("compilations.comedy")} slides={slides} />
      </div>
    </section>
  );
};

export default HomeSliders;
