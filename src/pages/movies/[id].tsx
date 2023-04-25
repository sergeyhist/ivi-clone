import { FC } from "react";
import { movie } from "../../utils/movie";
import Layout from "../../components/Layout/Layout";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import BreadCrumbs from "/src/components/BreadCrumbs/BreadCrumbs";
import WatchAllDevices from "/src/components/WatchAllDevices/WatchAllDevices";
import RelatedMovies from "/src/components/RelatedMovies/RelatedMovies";
import CreatorsList from "/src/components/CreatorsList/CreatorsList";

const Movie: FC = () => {
  return (
    <Layout title={`${movie.title} (${movie.type} ${movie.year})`}>
      <BreadCrumbs />
      <MovieInfo movie={movie} />
      <RelatedMovies movieTitle={movie.title} />
      <CreatorsList creators={movie.creators} />
      <WatchAllDevices movieTitle={movie.title} imageUrl={movie.imgUrl} />
      <BreadCrumbs currentTitle={movie.title} />
    </Layout>
  );
};

export default Movie;
