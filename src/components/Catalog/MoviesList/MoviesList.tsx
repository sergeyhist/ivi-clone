import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import MoreButton from "./MoreButton/MoreButton";
import styles from "./MoviesList.module.sass";
import { useAppDispatch, useAppSelector } from "/src/hooks/redux";
import {
  setFilteredMovies,
  setIsMoviesLoading,
  setMoviesPage,
} from "/src/store/slices/filtersSlice";
import { IMovie } from "/src/types/IMovie";
import MovieCard from "/src/UI/MovieCard/MovieCard";
import filterMovies from "/src/utils/filters/filterMovies";
import { setQueryParams } from "/src/utils/query";
import { useTranslation } from "next-i18next";
import PageLoader from "/src/UI/PageLoader/PageLoader";

const MoviesList: FC = () => {
  const router = useRouter();
  const { query } = router;
  const { t } = useTranslation();
  const { filteredMovies, filters, sortingMethod, isMoviesLoading, moviesPage } =
    useAppSelector((state) => state.filters);
  const { width } = useAppSelector((state) => state.windowSize);
  const dispatch = useAppDispatch();

  const [isPageLoading, setIsPageLoading] = useState(false);
  const [listLimit, setListLimit] = useState(0);

  const debouncedFilter = useDebouncedCallback(() => {
    filterMovies(filters, sortingMethod).then((movies) => {
      dispatch(setFilteredMovies(movies));
      dispatch(setIsMoviesLoading(false));
    });
  }, 1000);

  useEffect(() => {
    dispatch(setMoviesPage(0));
    dispatch(setIsMoviesLoading(true));
    debouncedFilter();
  }, [dispatch, filters, sortingMethod, debouncedFilter]);

  useEffect(() => {
    query.page
      ? query.page !== moviesPage.toString() &&
        dispatch(setMoviesPage(Number(query.page)))
      : dispatch(setMoviesPage(1));
    setIsPageLoading(false);
  }, [query, moviesPage, dispatch]);

  useEffect(() => {
    width > 1160 && setListLimit(7 * 3);
    width > 1060 && width < 1160 && setListLimit(6 * 3);
    width > 890 && width < 1060 && setListLimit(5 * 3);
    width > 700 && width < 890 && setListLimit(4 * 4);
    width > 540 && width < 700 && setListLimit(3 * 5);
    width < 540 && setListLimit(2 * 7);
  }, [width]);

  if (isMoviesLoading) {
    return <PageLoader />;
  }

  if (filteredMovies.length > 0) {
    return (
      <div data-testid="movies-list">
        <div className={`${styles.list}`}>
          {filteredMovies
          .slice(0, listLimit * moviesPage)
          .map((movie: IMovie, i) => (
            <div data-testid="movies-item" key={i} className={styles.list__movie}>
              <MovieCard content={movie} />
            </div>
          ))}
        </div>
        {isPageLoading && <PageLoader />}
        {listLimit * moviesPage < filteredMovies.length && (
          <MoreButton
            clickCallback={() => {
              setIsPageLoading(true);
              setQueryParams(router, { page: String(moviesPage + 1) });
            }}
          />
        )}
      </div>
    );
  }

  return (
    <h2 data-testid="movies-notfound" className={styles.list__text}>
      {t("filters:movienotfound")}
    </h2>
  );
};

export default MoviesList;
