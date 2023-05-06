import { FC, useEffect, useState } from "react";
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
import { useRouter } from "next/router";
import { getMovie } from "/src/api/getMovie";
import { IMovie } from "/src/types/IMovie";
import { getMovieComments } from "/src/api/getMovieComments";
import { IComment } from "/src/types/IComment";
import { getMoviePersons } from "/src/api/getMoviePersons";
import { IPerson } from "/src/types/IPerson";
import { mockMovie } from "/src/utils/movie";
import { mockPersons } from "/src/utils/person";
import { mockComments } from "/src/utils/comments";
import { getMovieName } from "/src/utils/movie";

const Movie: FC = () => {
  const showModal = useAppSelector((state) => state.showModal);
  const dispatch = useAppDispatch();
  const { locale, query } = useRouter();
  const [movie, setMovie] = useState<IMovie | undefined>(mockMovie);
  const [comments, setComments] = useState<IComment[] | undefined>(mockComments);
  const [persons, setPersons] = useState<IPerson[] | undefined>(mockPersons);

  // useEffect(() => {
  //   console.log(query.id);
  //   getMovie(String(query.id)).then((movie) => {
  //     setMovie(movie);
  //   });
  //   getMovieComments(String(query.id)).then((comments) => {
  //     setComments(comments);
  //   });
  //   getMoviePersons(String(query.id)).then((persons) => {
  //     setPersons(persons);
  //   });
  // }, [query.id]);

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
      {movie && comments && persons && (
        <Layout title={`${getMovieName(movie, locale)} (${movie.year})`}>
          <BreadCrumbs mobileVersion={true} />
          <MovieInfo movie={movie} persons={persons} />
          <RelatedMovies movieTitle={getMovieName(movie, locale)} />
          <CreatorsList persons={persons} />
          <WatchAllDevices movieTitle={getMovieName(movie, locale)} imageUrl={movie.img} />
          <CommentsSlider comments={comments} />
          <BreadCrumbs currentTitle={getMovieName(movie, locale)} />
          {showModal.showMovieInfoModal.isShow &&
            createAppPortal(
              <MovieInfoModal
                movieTitle={getMovieName(movie, locale)}
                comments={comments}
                persons={persons}
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
        "dropDownCategory",
        "breadcrumbs",
        "movieInfo",
        "mobileMenu",
      ])),
    },
  };
};

export default Movie;
