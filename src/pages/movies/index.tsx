import { useState } from "react";
import { useTranslation } from "react-i18next";
import Filters from "/src/components/Filters/Filters";
import Layout from "/src/components/Layout/Layout";
import Sorting from "/src/components/Sorting/Sorting";
import { IActiveFilters } from "/src/types/IFilter";
import styles from "/src/styles/pages/MoviesPage.module.sass";
import FiltersInfo from "/src/components/FiltersInfo/FiltersInfo";

export default function Home() {
  const { t } = useTranslation();

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
    <Layout title={t("titles.movies")}>
      <div className={styles.page}>
        <h1 className={styles.page__title}>{t('titles.movies')}</h1>
        <FiltersInfo activeFilters={activeFilters} />
        <Sorting
          activeSorting={activeSorting}
          setActiveSorting={setActiveSorting}
          sortOptions={[
            { slug: "ratings-count", text: t("sorting.ratings-count") },
            { slug: "rating", text: t("sorting.rating") },
            { slug: "date", text: t("sorting.date") },
            { slug: "abc", text: t("sorting.abc") },
          ]}
        />
        <Filters
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
        />
      </div>
    </Layout>
  );
}
