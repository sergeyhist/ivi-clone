import { FC, memo, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import MovieInfo from "../../components/Movie/MovieInfo/MovieInfo";
import BreadCrumbs from "../../UI/BreadCrumbs/BreadCrumbs";
import WatchAllDevices from "/src/components/Movie/WatchAllDevices/WatchAllDevices";
import RelatedMovies from "/src/components/Movie/RelatedMovies/RelatedMovies";
import CreatorsList from "/src/components/Movie/CreatorsList/CreatorsList";
import CommentsSlider from "/src/components/Movie/CommentsSlider/CommentsSlider";
import MovieModal from "../../components/ModalWindows/MovieModal/MovieModal";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSidePropsResult } from "next";
import { useRouter } from "next/router";
import { IMovie } from "/src/types/IMovie";
import { IComment } from "/src/types/IComment";
import { IPerson } from "/src/types/IPerson";
import { getMovieName } from "../../utils/movie";
import { useTranslation } from "next-i18next";
import {
  getMovieById,
  getMoviePersons,
  getMovieComments,
  getMoviesByGenre,
} from "/src/api/movie";
import NotFound from "/src/components/NotFound/NotFound";

interface MovieProps {
  movie: IMovie;
  persons: IPerson[];
  comments: IComment[];
  relatedMovies: IMovie[];
}

const Movie: FC<MovieProps> = ({
  movie,
  persons = [],
  comments = [],
  relatedMovies = [],
}) => {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  const [commentsState, setCommentsState] = useState<IComment[]>(comments);

  useEffect(() => {
    setCommentsState(comments);
  }, [comments]);

  return (
    <>
      {movie && (
        <Layout title={`${getMovieName(movie, locale)} (${movie.year})`}>
          <BreadCrumbs mobileVersion={true} />
          <MovieInfo movie={movie} persons={persons} />
          <RelatedMovies
            movies={relatedMovies}
            movieTitle={getMovieName(movie, locale)}
          />
          <CreatorsList persons={persons} />
          <WatchAllDevices
            movieTitle={getMovieName(movie, locale)}
            imageUrl={movie.img}
          />
          <CommentsSlider comments={commentsState} />
          <BreadCrumbs currentTitle={getMovieName(movie, locale)} />
          <MovieModal
            movie={movie}
            movieTitle={getMovieName(movie, locale)}
            comments={commentsState}
            setCommentsState={setCommentsState}
            persons={persons}
          />
        </Layout>
      )}
      {!movie && (
        <Layout title={t("movie:not_found.title")}>
          <NotFound
            contentText={t("movie:not_found.content")}
            linkText={t("movie:not_found.link")}
            linkRoute="/movies"
          />
        </Layout>
      )}
    </>
  );
};

export const getServerSideProps = async ({
  locale,
  params,
}: {
  locale: string;
  params: { id: string };
}): Promise<GetServerSidePropsResult<Record<string, unknown>>> => {
  const movie = await getMovieById(String(params.id));
  const persons = await getMoviePersons(String(params.id));
  const comments = await getMovieComments(String(params.id));
  const relatedMovies = await getMoviesByGenre(
    movie && movie.genres[0] ? movie.genres[0].slug : "drama"
  );

  return {
    props: {
      movie,
      persons,
      comments,
      relatedMovies,
      ...(await serverSideTranslations(locale, [
        "common",
        "footer",
        "header",
        "movie",
        "dropDownCategory",
        "breadcrumbs",
        "mobileMenu",
        "countries",
        "genres",
        "registration",
        "admin"
      ])),
    },
  };
};

export default memo(Movie);
