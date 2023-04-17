import { FC } from "react";
import { slides } from "./HomeSliders.utils";
import IFilmSlide from "../../types/IFilmSlide";
import FilmsSlider from "/src/UI/FilmSlider/FilmsSlider";
import FilmsTooltips from "/src/UI/FilmTooltips/FilmTooltips";
import styles from "./HomeSliders.module.sass";

const HomeSliders: FC = () => {
  return (
    <>
      <FilmsTooltips />
      <section className={styles.section}>
        <FilmsSlider title="Лучшие фильмы в подписке" slides={slides as IFilmSlide[]} />
        <FilmsSlider title="Лучшие комедии" slides={slides as IFilmSlide[]} />
      </section>
    </>
  );
};

export default HomeSliders;
