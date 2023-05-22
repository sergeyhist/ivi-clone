import { FC } from "react";
import MovieSlider from "/src/UI/MovieSlider/MovieSlider";
import styles from "./RelatedMovies.module.sass";
import { useTranslation } from "next-i18next";
import { IMovie } from "/src/types/IMovie";
import Container from "/src/UI/Container/Container";

interface RelatedMoviesProps {
  movieTitle: string;
  movies: IMovie[];
}

const RelatedMovies: FC<RelatedMoviesProps> = ({ movieTitle, movies }) => {
  const { t } = useTranslation("movie");

  return (
    <section className={styles.section}>
      <Container>
        <MovieSlider
          title={`${t("related.with")} ${movieTitle} ${t("related.watch")}`}
          slideType="related"
          slides={movies}
        />
      </Container>
    </section>
  );
};

export default RelatedMovies;
