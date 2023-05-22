import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import MoreButton from "./MoreButton/MoreButton";
import styles from "./MoviesList.module.sass";
import { useAppDispatch, useAppSelector } from "/src/hooks/redux";
import { setIsMoviesLoading } from "/src/store/slices/filtersSlice";
import { IMovie } from "/src/types/IMovie";
import MovieCard from "/src/UI/MovieCard/MovieCard";
import filterMovies from "/src/utils/filters/filterMovies";
import { setQueryParams } from "/src/utils/query";
import { useTranslation } from "next-i18next";
import { PropagateLoader } from "react-spinners";

const MoviesList: FC = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { filteredMovies, filters, sortingMethod, isMoviesLoading } =
    useAppSelector((state) => state.filters);
  const { width } = useAppSelector((state) => state.windowSize);
  const dispatch = useAppDispatch();

  const [page, setPage] = useState(1);
  const [listLimit, setListLimit] = useState(0);

  const debouncedFilter = useDebouncedCallback(() => {
    filterMovies(filters, sortingMethod);
  }, 1000);

  useEffect(() => {
    dispatch(setIsMoviesLoading(true));
    setPage(1);
    debouncedFilter();
  }, [dispatch, filters, sortingMethod, debouncedFilter]);

  useEffect(() => {
    (Number(router.query.page) || 0) < page ||
    (page === 1 && router.query.page !== "1")
      ? setQueryParams(router, { page: page.toString() })
      : setPage(Number(router.query.page));
  }, [router, page, dispatch]);

  useEffect(() => {
    width > 1160 && setListLimit(7 * 3);
    width > 1060 && width < 1160 && setListLimit(6 * 3);
    width > 890 && width < 1060 && setListLimit(5 * 3);
    width > 700 && width < 890 && setListLimit(4 * 4);
    width > 540 && width < 700 && setListLimit(3 * 5);
    width < 540 && setListLimit(2 * 7);
  }, [width]);

  if (isMoviesLoading) {
    return (
      <div className={styles.list__loader}>
        <PropagateLoader color="#312b45" />
      </div>
    );
  }

  if (filteredMovies.length > 0) {
    return (
      <div>
        <div
          className={`${styles.list} ${
            isMoviesLoading ? styles.list_loading : ""
          }`}
        >
          {filteredMovies.slice(0, listLimit * page).map((movie: IMovie, i) => (
            <div key={i} className={styles.list__movie}>
              <MovieCard content={movie} />
            </div>
          ))}
        </div>
        {listLimit * page < filteredMovies.length && (
          <MoreButton clickCallback={() => setPage(page + 1)} />
        )}
      </div>
    );
  }

  return <h2 className={styles.list__text}>{t("filters:movienotfound")}</h2>;
};

export default MoviesList;
