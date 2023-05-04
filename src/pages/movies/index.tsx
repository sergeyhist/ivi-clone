import { FC, useEffect, useState } from "react";
import Filters from "../../components/Catalog/Filters/Filters";
import Layout from "/src/components/Layout/Layout";
import Sorting from "../../components/Catalog/Sorting/Sorting";
import { IActiveFilters } from "/src/types/IFilter";
import styles from "/src/styles/pages/MoviesPage.module.sass";
import FiltersInfo from "../../components/Catalog/FiltersInfo/FiltersInfo";
import BreadCrumbs from "../../UI/BreadCrumbs/BreadCrumbs";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsResult } from "next";
import MoviesList from "/src/components/Catalog/MoviesList/MoviesList";
import { useDebouncedCallback } from "use-debounce";
import MoreButton from "/src/components/Catalog/MoreButton/MoreButton";
import {getFilteredMovies} from "/src/api/filters";
import {IMovie} from "/src/types/IMovie";

const Movies: FC = () => {
  const { t } = useTranslation(["titles", "sorting"]);

  const [activeFilters, setActiveFilters] = useState<IActiveFilters>({
    genre: [],
    country: [],
    year: { slug: "all", text: "" },
    rating: { slug: "0", text: "" },
    ratingCount: { slug: "0", text: "" },
    actor: { slug: "", text: "" },
    director: { slug: "", text: "" },
  });

  const [activeSorting, setActiveSorting] = useState("ratings-count");
  const [filteredMovies, setFilteredMovies] = useState<IMovie[]>([]);
  const [isMoviesLoading, setIsMoviesLoading] = useState(true);
  const [listLimit, setListLimit] = useState(21);

  const debouncedFilter = useDebouncedCallback(() => {
    getFilteredMovies(activeFilters, 1000)?.then((movies: IMovie[] | undefined) => {
      movies && setFilteredMovies(movies);
      setIsMoviesLoading(false);
    });
  }, 300);

  useEffect(() => {
    setIsMoviesLoading(true);
    debouncedFilter();
  }, [activeFilters, debouncedFilter]);

  return (
    <Layout title={t("titles:movies")}>
      <div className={styles.page}>
        <BreadCrumbs type="slash" currentTitle={"Жанр"} />
        <h1 className={styles.page__title + " container"}>
          {t("titles:movies")}
        </h1>{" "}
        <FiltersInfo activeFilters={activeFilters} />
        <Sorting
          activeSorting={activeSorting}
          setActiveSorting={setActiveSorting}
          sortOptions={[
            { slug: "assessments", text: t("sorting:ratings-count") },
            { slug: "rating", text: t("sorting:rating") },
            { slug: "date", text: t("sorting:date") },
            { slug: "", text: t("sorting:abc") },
          ]}
        />
        <div className="container">
          <Filters
            activeFilters={activeFilters}
            setActiveFilters={setActiveFilters}
          />
        </div>
        {filteredMovies && (
          <MoviesList
            isLoading={isMoviesLoading}
            items={filteredMovies.slice(0, listLimit)}
          />
        )}
        {listLimit < filteredMovies?.length && (
          <div className=" container">
            <MoreButton limit={listLimit} setLimit={setListLimit} />
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
      ])),
    },
  };
};

export default Movies;
