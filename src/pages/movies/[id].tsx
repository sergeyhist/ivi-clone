import { FC } from "react";
import { movie } from "../../utils/movie";
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout/Layout";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import BreadCrumbs from "/src/components/BreadCrumbs/BreadCrumbs";
import WatchAllDevices from "/src/components/WatchAllDevices/WatchAllDevices";
import RelatedMovies from "/src/components/RelatedMovies/RelatedMovies";
import CreatorsList from "/src/components/CreatorsList/CreatorsList";

const Film: FC = () => {
  const { t } = useTranslation();

  return (
    <Layout title={`${movie.title} (${movie.type} ${movie.year})`}>
      <BreadCrumbs
        pages={[
          { route: "/", name: t("breadcrumbs.home") },
          { route: "/movies", name: t("breadcrumbs.movies") },
          { route: movie.id, name: movie.title },
        ]}
      />
      <MovieInfo movie={movie} />
      <RelatedMovies movieTitle={movie.title} />
      <CreatorsList creators={movie.creators} />
      <WatchAllDevices movieTitle={movie.title} imageUrl={movie.imgUrl} />
    </Layout>
  );
};

export default Film;
