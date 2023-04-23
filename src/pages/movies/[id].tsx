import { FC } from "react";
import Layout from "../../components/Layout/Layout";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import BreadCrumbs from "/src/components/BreadCrumbs/BreadCrumbs";
import WatchAllDevices from "/src/components/WatchAllDevices/WatchAllDevices";
import { movie } from "../../components/MovieInfo/MovieInfo.utils";

const Film: FC = () => {
  return (
    <Layout
      title={`${movie.title} (${movie.movieType} ${movie.movieParams.movieYear})"}`}
    >
      <BreadCrumbs
        pages={[
          { route: "/movies", name: "Фильмы" },
          { route: movie.id, name: movie.title },
        ]}
      />
      <MovieInfo movie={movie} />
      <WatchAllDevices movieTitle="1+1" imageUrl="/images/trailer1.jpeg" />
    </Layout>
  );
};

export default Film;
