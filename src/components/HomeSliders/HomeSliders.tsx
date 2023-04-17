import { FC } from "react";
import { slides } from "./HomeSliders.utils";
import IFilmCard from "../../types/IFilmCard";
import FilmsSlider from "/src/UI/FilmSlider/FilmsSlider";
import FilmsTooltips from "/src/UI/FilmTooltips/FilmTooltips";
import styles from "./HomeSliders.module.sass";

const HomeSliders: FC = () => {
  return (
    <>
      <FilmsTooltips />
      <section className={styles.section}>
        <FilmsSlider title="Лучшие фильмы в подписке" slides={slides as IFilmCard[]} />
        <FilmsSlider title="Лучшие комедии" slides={slides as IFilmCard[]} />
      </section>
    </>
  );
};

export default HomeSliders;
