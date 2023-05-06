import { FC, useEffect, useRef, useState } from "react";
import Filters from "../../components/Catalog/Filters/Filters";
import Layout from "/src/components/Layout/Layout";
import Sorting from "../../components/Catalog/Sorting/Sorting";
import { IFilters } from "/src/types/IFilter";
import styles from "/src/styles/pages/MoviesPage.module.sass";
import BreadCrumbs from "../../UI/BreadCrumbs/BreadCrumbs";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsResult } from "next";
import MoviesList from "/src/components/Catalog/MoviesList/MoviesList";
import { useDebouncedCallback } from "use-debounce";
import MoreButton from "/src/components/Catalog/MoreButton/MoreButton";
import { getFilteredMovies } from "/src/api/filters";
import { IMovie } from "/src/types/IMovie";
import { useRouter } from "next/router";
import getSortedList from "/src/utils/getSortedList";
import { getFiltersText } from "/src/components/Catalog/Filters/Filters.utils";
import {
  getActors,
  getCountriesSlugs,
  getDirectors,
  getGenresSlugs,
} from "/src/api/getData";
import { setQueryParams } from "/src/utils/query";
import { compareFilters } from "/src/utils/compare";
import { IPerson } from "/src/types/IPerson";

const listLimit = 21;

interface MoviesProps {
  genres: string[];
  countries: string[];
  actors: IPerson[];
  directors: IPerson[];
}

const Movies: FC<MoviesProps> = ({ genres, countries, actors, directors }) => {
  const { t } = useTranslation(["titles", "sorting"]);
  const router = useRouter();

  const defaultFilter = useRef<IFilters>({
    genres: [],
    countries: [],
    year: [],
    rating: [],
    assessments: [],
  });

  const [filters, setFilters] = useState<IFilters>({
    ...defaultFilter.current,
  });
  const [activeSorting, setActiveSorting] = useState("assessments");
  const [filteredMovies, setFilteredMovies] = useState<IMovie[]>([]);
  const [isMoviesLoading, setIsMoviesLoading] = useState(true);
  const [page, setPage] = useState<number>(1);

  const debouncedFilter = useDebouncedCallback((filters: IFilters) => {
    getFilteredMovies(filters, 1000)?.then((movies: IMovie[] | undefined) => {
      movies && movies.length > 0
        ? setFilteredMovies(getSortedList(activeSorting, movies))
        : setFilteredMovies([]);
      setIsMoviesLoading(false);
    });
  }, 500);

  const getFiltersFromRoute = (): IFilters => {
    const result: IFilters = { ...defaultFilter.current };

    result.genres = router.query.genres ? router.query.genres : result.genres;
    result.countries = router.query.countries
      ? router.query.countries
      : result.countries;
    result.year = router.query.year ? router.query.year : result.year;
    result.rating = router.query.rating ? router.query.rating : result.rating;
    result.assessments = router.query.assessments
      ? router.query.assessments
      : result.assessments;

    if (compareFilters(filters, result)) {
      setIsMoviesLoading(true);
      debouncedFilter(result);
    }

    return result;
  };

  const setPageRoute = (page: number) => {
    setQueryParams(router, { page: page.toString() });
  };

  useEffect(() => {
    router.query.page ? setPage(Number(router.query.page)) : setPage(1);
    setFilters(getFiltersFromRoute());
  }, [router, setPage]);

  useEffect(() => {
    setIsMoviesLoading(true);
    debouncedFilter(filters);
  }, [activeSorting]);

  return (
    <Layout title={t("titles:movies")}>
      <div className={styles.page}>
        <BreadCrumbs type="slash" currentTitle={getFiltersText(filters)} />
        <h1 className={styles.page__title + " container"}>
          {t("titles:movies")}
        </h1>{" "}
        <div className={styles.page__info + " container"}>
          {getFiltersText(filters)}
        </div>
        <Sorting
          activeSorting={activeSorting}
          setActiveSorting={setActiveSorting}
          sortOptions={[
            { slug: "assessments", text: t("sorting:ratings-count") },
            { slug: "rating", text: t("sorting:rating") },
            { slug: "year", text: t("sorting:date") },
            { slug: `name_${router.locale}`, text: t("sorting:abc") },
          ]}
        />
        <div className="container">
          <Filters
            countries={countries}
            genres={genres}
            actors={actors}
            directors={directors}
            filters={filters}
          />
        </div>
        {filteredMovies && (
          <MoviesList
            isLoading={isMoviesLoading}
            items={filteredMovies.slice(0, listLimit * page)}
          />
        )}
        {filteredMovies && listLimit * page < filteredMovies?.length && (
          <div className=" container">
            <MoreButton
              clickCallback={() => {
                setPageRoute(page + 1);
              }}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({
  locale,
}: {
  locale: string;
}): Promise<GetStaticPropsResult<Record<string, unknown>>> => {
  const genres = await getGenresSlugs();
  const countries = await getCountriesSlugs();
  const actors = await getActors();
  const directors = await getDirectors();

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "titles",
        "footer",
        "header",
        "breadcrumbs",
        "sorting",
        "filters",
        "countries",
        "genres",
        "mobileMenu",
        "dropDownCategory",
        "year",
      ])),
      genres: genres,
      countries: countries,
      actors: actors,
      directors: directors,
    },
  };
};

export default Movies;
