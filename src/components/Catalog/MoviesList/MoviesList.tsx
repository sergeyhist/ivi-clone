import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import MoreButton from "./MoreButton/MoreButton";
import styles from "./MoviesList.module.sass";
import { useAppDispatch, useAppSelector } from "/src/hooks/redux";
import {
  setFilteredMoviesPage,
  setFilters,
  setIsMoviesLoading,
} from "/src/store/slices/filtersSlice";
import { IMovie } from "/src/types/IMovie";
import MovieCard from "/src/UI/MovieCard/MovieCard";
import { compareFilters } from "/src/utils/filters/compareFilters";
import filterMovies from "/src/utils/filters/filterMovies";
import { listLimit } from "/src/utils/filters/filtersVariables";
import { getFiltersFromRoute } from "/src/utils/filters/getFiltersFromRoute";
import { setQueryParams } from "/src/utils/query";
import { useTranslation } from "next-i18next";

const MoviesList: FC = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const {
    filteredMovies,
    filters,
    filteredMoviesPage,
    sortingMethod,
    isMoviesLoading,
  } = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  const setPageRoute = (page: number): void => {
    setQueryParams(router, { page: page.toString() });
  };

  const debouncedFilter = useDebouncedCallback(() => {
    filterMovies(filters, sortingMethod);
  }, 1000);

  useEffect(() => {
    const routeFilters = getFiltersFromRoute(router);

    compareFilters(routeFilters, filters) && dispatch(setFilters(routeFilters));
  }, [router, filters, dispatch]);

  useEffect(() => {
    dispatch(setIsMoviesLoading(true));
    debouncedFilter();
  }, [dispatch, filters, sortingMethod, debouncedFilter]);

  useEffect(() => {
    router.query.page
      ? dispatch(setFilteredMoviesPage(Number(router.query.page)))
      : dispatch(setFilteredMoviesPage(1));
  }, [router, dispatch]);

  if (isMoviesLoading) {
    return <h2 className={styles.list__text}>{t("filters:loading")}</h2>;
  }

  if (filteredMovies.length > 0) {
    return (
      <div>
        <div
          className={`${styles.list} ${
            isMoviesLoading ? styles.list_loading : ""
          }`}
        >
          {filteredMovies
            .slice(0, listLimit * filteredMoviesPage)
            .map((movie: IMovie, i) => (
              <div key={i} className={styles.list__movie}>
                <MovieCard content={movie} />
              </div>
            ))}
        </div>
        {listLimit * filteredMoviesPage < filteredMovies.length && (
          <MoreButton
            clickCallback={() => {
              setPageRoute(filteredMoviesPage + 1);
            }}
          />
        )}
      </div>
    );
  }

  return <h2 className={styles.list__text}>{t("filters:movienotfound")}</h2>;
};

export default MoviesList;
