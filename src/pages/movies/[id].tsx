import { FC } from "react";
import { movie } from "../../utils/movie";
import Layout from "../../components/Layout/Layout";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import BreadCrumbs from "/src/components/BreadCrumbs/BreadCrumbs";
import WatchAllDevices from "/src/components/WatchAllDevices/WatchAllDevices";
import RelatedMovies from "/src/components/RelatedMovies/RelatedMovies";
import CreatorsList from "/src/components/CreatorsList/CreatorsList";
import CommentsSlider from "/src/components/CommentsSlider/CommentsSlider";
import { useAppDispatch, useAppSelector } from "/src/hooks/redux";
import createAppPortal from "/src/utils/createAppPortal";
import MovieInfoModal from "/src/components/MovieInfoModal/MovieInfoModal";
import { setShowModal } from "/src/store/slices/modalsSlice";

const Movie: FC = () => {
  const showModal = useAppSelector((state) => state.showModal);
  const dispatch = useAppDispatch();

  return (
    <Layout title={`${movie.title} (${movie.type} ${movie.year})`}>
      <BreadCrumbs />
      <MovieInfo movie={movie} />
      <RelatedMovies movieTitle={movie.title} />
      <CreatorsList creators={movie.creators} />
      <WatchAllDevices movieTitle={movie.title} imageUrl={movie.imgUrl} />
      <CommentsSlider />
      <BreadCrumbs currentTitle={movie.title} />
      {showModal.showMovieInfoModal &&
        createAppPortal(
          <MovieInfoModal
            creators={movie.creators}
            movieTitle={movie.title}
            closeCallback={() =>
              dispatch(
                setShowModal({ ...showModal, showMovieInfoModal: false })
              )
            }
          />
        )}
    </Layout>
  );
};

export default Movie;
