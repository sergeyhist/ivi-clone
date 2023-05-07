import { FC } from "react";
import MovieSlider from "/src/UI/MovieSlider/MovieSlider";
import styles from "./HomeSliders.module.sass";
import { IMovie } from "/src/types/IMovie";

interface ICompilations {
  movies: IMovie[];
  title: string;
}

interface HomeSlidersProps {
  compilations: ICompilations[];
}

const HomeSliders: FC<HomeSlidersProps> = ({ compilations = [] }) => {
  return (
    <section className={styles.section}>
      <div className="container">
        {compilations.map((compilation, index) => (
          <MovieSlider key={index} title={compilation.title} slides={compilation.movies} />
        ))}
      </div>
    </section>
  );
};

export default HomeSliders;
