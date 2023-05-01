import { FC } from "react";
import { movie } from "/src/utils/movie";
import Layout from "../../components/Layout/Layout";
import MovieInfo from "../../components/Movie/MovieInfo/MovieInfo";
import BreadCrumbs from "../../UI/BreadCrumbs/BreadCrumbs";
import WatchAllDevices from "/src/components/Movie/WatchAllDevices/WatchAllDevices";
import RelatedMovies from "/src/components/Movie/RelatedMovies/RelatedMovies";
import CreatorsList from "/src/components/Movie/CreatorsList/CreatorsList";
import CommentsSlider from "/src/components/Movie/CommentsSlider/CommentsSlider";
import { useAppDispatch, useAppSelector } from "/src/hooks/redux";
import createAppPortal from "/src/utils/createAppPortal";
import { setShowModal } from "/src/store/slices/modalsSlice";
import MovieInfoModal from "/src/components/ModalWindows/MovieInfoModal/MovieInfoModal";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSidePropsResult } from "next";

const Movie: FC = () => {
  const showModal = useAppSelector((state) => state.showModal);
  const dispatch = useAppDispatch();

  const closeCallback = (): void => {
    dispatch(
      setShowModal({
        ...showModal,
        showMovieInfoModal: { isShow: false, defaultTab: "actors" },
      })
    );
  };

  return (
    <Layout title={`${movie.title} (${movie.type} ${movie.year})`}>
      <BreadCrumbs mobileVersion={true} />
      <MovieInfo movie={movie} />
      <RelatedMovies movieTitle={movie.title} />
      <CreatorsList creators={movie.creators} />
      <WatchAllDevices movieTitle={movie.title} imageUrl={movie.imgUrl} />
      <CommentsSlider />
      <BreadCrumbs currentTitle={movie.title} />
      {showModal.showMovieInfoModal.isShow &&
        createAppPortal(
          <MovieInfoModal
            creators={movie.creators}
            movieTitle={movie.title}
            closeCallback={closeCallback}
          />
        )}
    </Layout>
  );
};

export const getServerSideProps = async ({
  locale,
}: {
  locale: string;
}): Promise<GetServerSidePropsResult<Record<string, unknown>>> => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "footer",
        "header",
        "movie",
        "creators",
        "breadcrumbs",
        "movieInfo",
        "mobileMenu",
      ])),
    },
  };
};

export default Movie;
