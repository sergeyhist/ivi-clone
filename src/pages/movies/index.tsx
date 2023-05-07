import { FC } from "react";
import Filters from "../../components/Catalog/Filters/Filters";
import Layout from "/src/components/Layout/Layout";
import Sorting from "../../components/Catalog/Sorting/Sorting";
import styles from "/src/styles/pages/MoviesPage.module.sass";
import BreadCrumbs from "../../UI/BreadCrumbs/BreadCrumbs";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsResult } from "next";
import MoviesList from "/src/components/Catalog/MoviesList/MoviesList";
import {
  getActors,
  getCountriesSlugs,
  getDirectors,
  getGenresSlugs,
} from "/src/api/getData";
import { IPerson } from "/src/types/IPerson";
import { useAppSelector } from "/src/hooks/redux";
import {getFiltersText} from "/src/utils/filters/getFiltersText";

interface MoviesProps {
  genres: string[];
  countries: string[];
  actors: IPerson[];
  directors: IPerson[];
}

const Movies: FC<MoviesProps> = ({ genres, countries, actors, directors }) => {
  const { t } = useTranslation(["titles", "sorting"]);
  const { filters } = useAppSelector((state) => state.filters);

  return (
    <Layout title={t("titles:movies")}>
      <div className={styles.page}>
        <BreadCrumbs type="slash" currentTitle={getFiltersText(filters)} />
        <h1 className={styles.page__title + " container"}>
          {t("titles:movies")}
        </h1>
        <div className={styles.page__info + " container"}>
          {getFiltersText(filters)}
        </div>
        <Sorting />
        <Filters
          countries={countries}
          genres={genres}
          actors={actors}
          directors={directors}
        />
        <MoviesList />
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
        "registration"
      ])),
      genres: genres,
      countries: countries,
      actors: actors,
      directors: directors,
    },
  };
};

export default Movies;
