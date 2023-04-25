import { FC } from "react";
import { slides } from "../HomeSliders/HomeSliders.utils";
import MovieSlider from "../../UI/MovieSlider/MovieSlider";
import styles from "./RelatedMovies.module.sass";
import MovieCard from "/src/UI/MovieCard/MovieCard";

const RelatedMovies: FC = () => {
  return (
    <>
      <section className={styles.section}>
        <MovieSlider
          title="С фильмом смотрят так же"
          slideType="related"
          slides={slides}
        />
        <div style={{ width: "200px" }}>
          <MovieCard type="poster" content={slides[0]} />
        </div>
      </section>
    </>
  );
};

export default RelatedMovies;
