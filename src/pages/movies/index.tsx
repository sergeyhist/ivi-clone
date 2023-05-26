import { FC } from "react";
import Filters from "../../components/Catalog/Filters/Filters";
import Layout from "/src/components/Layout/Layout";
import Sorting from "../../components/Catalog/Sorting/Sorting";
import BreadCrumbs from "../../UI/BreadCrumbs/BreadCrumbs";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsResult } from "next";
import MoviesList from "/src/components/Catalog/MoviesList/MoviesList";
import { useAppSelector } from "/src/hooks/redux";
import { getFiltersText } from "/src/utils/filters/getFiltersText";
import CustomTitle from "/src/UI/CustomTitle/CustomTitle";
import FiltersInfo from "/src/components/Catalog/FiltersInfo/FiltersInfo";
import MoviesLayout from "/src/components/Catalog/MoviesLayout/MoviesLayout";

const Movies: FC = () => {
  const { t } = useTranslation(["titles", "sorting"]);
  const { filters } = useAppSelector((state) => state.filters);
  const { width } = useAppSelector((state) => state.windowSize);

  return (
    <Layout title={t("titles:movies")}>
      {width > 520 && <BreadCrumbs type="slash" currentTitle={getFiltersText(filters)} />}
      <MoviesLayout>
        <CustomTitle title={t("titles:movies")} />
        <FiltersInfo />
        <Sorting />
        <Filters />
        <MoviesList />
      </MoviesLayout>
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
        "year",
        "registration",
        "movie",
        "admin"
      ])),
    },
  };
};

export default Movies;
