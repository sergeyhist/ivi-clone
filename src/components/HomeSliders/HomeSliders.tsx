import { FC } from "react";
import { slides } from "./HomeSliders.utils";
import MovieSlider from "../../UI/MovieSlider/MovieSlider";
import MovieTooltips from "../../UI/MovieTooltips/MovieTooltips";
import styles from "./HomeSliders.module.sass";

const HomeSliders: FC = () => {
  return (
    <>
      <MovieTooltips />
      <section className={styles.section}>
        <MovieSlider title="Лучшие фильмы в подписке" slides={slides} />
        <MovieSlider title="Лучшие комедии" slides={slides} />
      </section>
    </>
  );
};

export default HomeSliders;
