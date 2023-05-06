import { FC } from "react";
import { mockMovie } from "/src/utils/movie";
import MovieSlider from "/src/UI/MovieSlider/MovieSlider";
import styles from "./RelatedMovies.module.sass";
import { useTranslation } from "next-i18next";

interface RelatedMoviesProps {
  movieTitle: string;
}

const RelatedMovies: FC<RelatedMoviesProps> = ({ movieTitle }) => {
  const { t } = useTranslation("movie");

  return (
    <section className={styles.section}>
      <div className="container">
        <MovieSlider
          title={`${t("related.with")} ${movieTitle} ${t("related.watch")}`}
          slideType="related"
          slides={[mockMovie]}
        />
      </div>
    </section>
  );
};

export default RelatedMovies;
