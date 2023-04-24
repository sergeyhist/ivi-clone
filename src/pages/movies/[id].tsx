import { FC } from "react";
import Layout from "../../components/Layout/Layout";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import BreadCrumbs from "/src/components/BreadCrumbs/BreadCrumbs";
import WatchAllDevices from "/src/components/WatchAllDevices/WatchAllDevices";
import { movie, breadCrumbPages } from "../../utils/movie";

const Film: FC = () => {
  return (
    <Layout title={`${movie.title} (${movie.type} ${movie.year})"}`}>
      <BreadCrumbs pages={breadCrumbPages} />
      <MovieInfo movie={movie} />
      <WatchAllDevices movieTitle={movie.title} imageUrl={movie.imgUrl} />
    </Layout>
  );
};

export default Film;
