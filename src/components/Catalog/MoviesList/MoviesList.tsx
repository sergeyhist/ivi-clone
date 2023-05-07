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
import filterMovies from "/src/utils/filters/filterMovies";
import { listLimit } from "/src/utils/filters/filtersVariables";
import { getFiltersFromRoute } from "/src/utils/filters/getFiltersFromRoute";
import { setQueryParams } from "/src/utils/query";

const MoviesList: FC = () => {
  const router = useRouter();

  const {
    filteredMovies,
    filters,
    filteredMoviesPage,
    sortingMethod,
    isMoviesLoading,
  } = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  const setPageRoute = (page: number) => {
    setQueryParams(router, { page: page.toString() });
  };

  const debouncedFilter = useDebouncedCallback(() => {
    filterMovies(filters, sortingMethod);
  }, 400);

  useEffect(() => {
    dispatch(setIsMoviesLoading(true));
    debouncedFilter();
  }, [sortingMethod]);

  useEffect(() => {
    router.query.page
      ? dispatch(setFilteredMoviesPage(Number(router.query.page)))
      : dispatch(setFilteredMoviesPage(1));
    dispatch(
      setFilters(getFiltersFromRoute(router, filters, () => debouncedFilter()))
    );
  }, [router, dispatch]);

  return (
    <div className="container">
      {filteredMovies.length > 0 && (
        <>
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
        </>
      )}
    </div>
  );
};

export default MoviesList;
