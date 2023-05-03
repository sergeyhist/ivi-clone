import { FC, useEffect, useState } from "react";
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
import axios from "axios";
import { useRouter } from "next/router";
import { creators } from "/src/utils/creators";
import { comments } from "/src/utils/comments";

const Movie: FC = () => {
  const showModal = useAppSelector((state) => state.showModal);
  const dispatch = useAppDispatch();
  const { locale } = useRouter();
  // const [movie, setFetchedMovie] = useState<IMovie>();

  const name = locale === "ru" ? movie?.name_ru : movie?.name_en;

  // useEffect(() => {
  //   fetchMovie();
  // }, []);

  // const fetchMovie = async (): Promise<void> => {
  //   try {
  //     const response = await axios.get<IMovie>(
  //       "http://85.237.34.125:4000/films/984fdb2d-da0c-4e04-926a-f72f103c4ccb"
  //     );
  //     console.log(response.data);
  //     setFetchedMovie(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const closeCallback = (): void => {
    dispatch(
      setShowModal({
        ...showModal,
        showMovieInfoModal: { isShow: false, defaultTab: "actors" },
      })
    );
  };

  return (
    <>
      {movie && (
        <Layout title={`${String(name)} (${String(movie?.year)})`}>
          <BreadCrumbs mobileVersion={true} />
          <MovieInfo movie={movie} />
          <RelatedMovies movieTitle={String(name)} />
          <CreatorsList creators={creators} />
          <WatchAllDevices movieTitle={String(name)} imageUrl={String(movie?.img)} />
          <CommentsSlider comments={comments} />
          <BreadCrumbs currentTitle={String(name)} />
          {showModal.showMovieInfoModal.isShow &&
            createAppPortal(
              <MovieInfoModal
                movieTitle={String(name)}
                creators={creators}
                closeCallback={closeCallback}
              />
            )}
        </Layout>
      )}
    </>
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
