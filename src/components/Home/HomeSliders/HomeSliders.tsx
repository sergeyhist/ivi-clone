import { FC } from "react";
import MovieSlider from "/src/UI/MovieSlider/MovieSlider";
import styles from "./HomeSliders.module.sass";
import { IMovie } from "/src/types/IMovie";
import Container from "/src/UI/Container/Container";

interface ICompilations {
  movies: IMovie[];
  title: string;
  route: string;
}

interface HomeSlidersProps {
  compilations: ICompilations[];
}

const HomeSliders: FC<HomeSlidersProps> = ({ compilations }) => {
  const sliders = compilations.filter(
    (compilation) => compilation.movies.length !== 0
  );
  return (
    <section data-testid="home-compilations" className={styles.section}>
      <Container>
        {sliders?.map((compilation, index) => (
          <MovieSlider
            key={index}
            title={compilation.title}
            slides={compilation.movies}
            categoryRoute={compilation.route}
          />
        ))}
      </Container>
    </section>
  );
};

export default HomeSliders;
