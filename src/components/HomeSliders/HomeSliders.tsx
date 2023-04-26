import { FC } from "react";
import { slides } from "./HomeSliders.utils";
import MovieSlider from "../../UI/MovieSlider/MovieSlider";
import MovieTooltips from "../../UI/MovieTooltips/MovieTooltips";
import styles from "./HomeSliders.module.sass";
import { useTranslation } from "react-i18next";

const HomeSliders: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <MovieTooltips />
      <section className={styles.section}>
        <MovieSlider title={t("home.compilations.subscribe")} slides={slides} />
        <MovieSlider title={t("home.compilations.comedy")} slides={slides} />
      </section>
    </>
  );
};

export default HomeSliders;
