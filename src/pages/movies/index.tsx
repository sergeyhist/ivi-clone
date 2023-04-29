import { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import Filters from "../../components/Catalog/Filters/Filters";
import Layout from "/src/components/Layout/Layout";
import Sorting from "../../components/Catalog/Sorting/Sorting";
import { IActiveFilters } from "/src/types/IFilter";
import styles from "/src/styles/pages/MoviesPage.module.sass";
import FiltersInfo from "../../components/Catalog/FiltersInfo/FiltersInfo";
import BreadCrumbs from "../../UI/BreadCrumbs/BreadCrumbs";

const Home = (): ReactNode => {
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
        <BreadCrumbs type="slash" currentTitle={t("titles.movies") || ""} />
        <h1 className={styles.page__title + " container"}>
          {t("titles.movies")}
        </h1>{" "}
        {/* TODO: h1 лучше вынести в компонент FiltersInfo */}
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
};

export default Home;
