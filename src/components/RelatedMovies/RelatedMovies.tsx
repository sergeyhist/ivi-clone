import { FC } from "react";
import { slides } from "../HomeSliders/HomeSliders.utils";
import MovieSlider from "../../UI/MovieSlider/MovieSlider";
import styles from "./RelatedMovies.module.sass";
import { useTranslation } from "react-i18next";

interface RelatedMoviesProps {
  movieTitle: string;
}

const RelatedMovies: FC<RelatedMoviesProps> = ({ movieTitle }) => {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className="container">
        <MovieSlider
          title={`${t("movie.related.with")} ${movieTitle} ${t(
            "movie.related.watch"
          )}`}
          slideType="related"
          slides={slides}
        />
      </div>
    </section>
  );
};

export default RelatedMovies;
