import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Filters.module.sass";
import {
  countryFilterItems,
  genreFilterItems,
  genreFilterSlides,
  yearFilterItems,
} from "./Filters.utils";
import MultiSelector from "./MultiSelector/MultiSelector";
import SingleSelector from "./SingleSelector/SingleSelector";
import { IFilter } from "/src/types/IFilter";

const sortHandler = (a: IFilter, b: IFilter) => (a.slug > b.slug ? 1 : -1);

const Filters: FC = () => {
  const { t } = useTranslation();

  const [genreFilters, setGenreFilters] = useState<string[]>([]);
  const [countryFilters, setCountryFilters] = useState<string[]>([]);
  const [yearFilter, setYearFilter] = useState<string>("all");

  return (
    <section className={styles.filters}>
      <MultiSelector
        title={t("filters.genre")}
        items={genreFilterItems.sort(sortHandler)}
        sliderItems={genreFilterSlides}
        activeFilters={genreFilters}
        setActiveFilters={setGenreFilters}
      />
      <MultiSelector
        title={t("filters.country")}
        items={countryFilterItems.sort(sortHandler)}
        sliderItems={[...countryFilterItems].slice(0, 7)}
        activeFilters={countryFilters}
        setActiveFilters={setCountryFilters}
      />
      <SingleSelector
        title={t("filters.years.title")}
        items={yearFilterItems}
        activeFilter={yearFilter}
        setActiveFilter={setYearFilter}
      />
    </section>
  );
};

export default Filters;
