import { FC, memo } from "react";
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
// import { mockMovie } from "/src/utils/movie";
// import { mockPersons } from "/src/utils/person";
// import { mockComments } from "/src/utils/comments";
import { getMovieName } from "/src/utils/movie";
import { useTranslation } from "next-i18next";
import {
  getMovie,
  getMoviePersons,
  getMovieComments,
  getMoviesByGenre,
} from "/src/api/movieApi";
import NotFound from "/src/components/NotFound/NotFound";

interface MovieProps {
  serverMovie: IMovie;
  serverPersons: IPerson[];
  serverComments: IComment[];
  serverRelatedMovies: IMovie[];
}

const Movie: FC<MovieProps> = ({
  serverMovie,
  serverPersons = [],
  serverComments = [],
  serverRelatedMovies = [],
}) => {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  const movie = serverMovie;
  const persons = serverPersons;
  const comments = serverComments;

  return (
    <>
      {movie && (
        <Layout title={`${getMovieName(movie, locale)} (${movie.year})`}>
          <BreadCrumbs mobileVersion={true} />
          <MovieInfo movie={movie} persons={persons} />
          <RelatedMovies
            movies={serverRelatedMovies}
            movieTitle={getMovieName(movie, locale)}
          />
          <CreatorsList persons={persons} />
          <WatchAllDevices
            movieTitle={getMovieName(movie, locale)}
            imageUrl={movie.img}
          />
          <CommentsSlider comments={comments} />
          <BreadCrumbs currentTitle={getMovieName(movie, locale)} />
          <MovieModal
            movie={movie}
            movieTitle={getMovieName(movie, locale)}
            comments={comments}
            persons={persons}
          />
        </Layout>
      )}
      {!movie && (
        <Layout title={t("common:not_found.title")}>
          <NotFound title={t("common:not_found.content")} />
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
  const serverMovie = await getMovie(String(params.id));
  const serverPersons = await getMoviePersons(String(params.id));
  const serverComments = await getMovieComments(String(params.id));
  const serverRelatedMovies = await getMoviesByGenre(
    serverMovie?.genres[0].slug || "drama"
  );

  return {
    props: {
      serverMovie,
      serverPersons,
      serverComments,
      serverRelatedMovies,
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
        "countries",
      ])),
    },
  };
};

export default memo(Movie);
