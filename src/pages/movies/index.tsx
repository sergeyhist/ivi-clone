import { FC, useState } from "react";
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

  return (
    <Layout title={t("titles:movies")}>
      <div className={styles.page}>
        <BreadCrumbs type="slash" currentTitle={"Жанр"} />
        <h1 className={styles.page__title + " container"}>{t("titles:movies")}</h1>{" "}
        <FiltersInfo activeFilters={activeFilters} />
        <Sorting
          activeSorting={activeSorting}
          setActiveSorting={setActiveSorting}
          sortOptions={[
            { slug: "ratings-count", text: t("sorting:ratings-count") },
            { slug: "rating", text: t("sorting:rating") },
            { slug: "date", text: t("sorting:date") },
            { slug: "abc", text: t("sorting:abc") },
          ]}
        />
        <Filters activeFilters={activeFilters} setActiveFilters={setActiveFilters} />
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
      ])),
    },
  };
};

export default Movies;
