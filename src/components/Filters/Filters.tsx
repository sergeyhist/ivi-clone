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
import PersonSelector from "./PersonSelector/PersonSelector";
import RangeSelector from "./RangeSelector/RangeSelector";
import ResetButton from "./ResetButton/ResetButton";
import SingleSelector from "./SingleSelector/SingleSelector";
import { IFilter } from "/src/types/IFilter";

const sortHandler = (a: IFilter, b: IFilter) => (a.slug > b.slug ? 1 : -1);

const Filters: FC = () => {
  const { t } = useTranslation();

  const [genreFilters, setGenreFilters] = useState<string[]>([]);
  const [countryFilters, setCountryFilters] = useState<string[]>([]);
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [ratingFilter, setRatingFilter] = useState<string>("0");
  const [ratingCountFilter, setRatingCountFilter] = useState<string>("0");
  const [actorFilter, setActorFilter] = useState<string>("");
  const [directorFilter, setDirectorFilter] = useState<string>("");

  return (
    <section className={styles.filters}>
      <MultiSelector
        title={t("filters.genre")}
        items={genreFilterItems.sort(sortHandler)}
        sliderItems={genreFilterSlides}
        activeFilters={genreFilters}
        setActiveFilters={setGenreFilters}
        dropdownPosition="left"
      />
      <MultiSelector
        title={t("filters.country")}
        items={countryFilterItems.sort(sortHandler)}
        sliderItems={[...countryFilterItems].slice(0, 10)}
        activeFilters={countryFilters}
        setActiveFilters={setCountryFilters}
        dropdownPosition="center"
      />
      <SingleSelector
        title={t("filters.years.title")}
        items={yearFilterItems}
        activeFilter={yearFilter}
        setActiveFilter={setYearFilter}
      />
      <RangeSelector
        title={t("filters.rating")}
        max={9}
        step={0.1}
        activeFilter={ratingFilter}
        setActiveFilter={setRatingFilter}
      />
      <RangeSelector
        title={t("filters.ratingCount")}
        max={500000}
        step={5000}
        activeFilter={ratingCountFilter}
        setActiveFilter={setRatingCountFilter}
      />
      <div className={styles.filters__person}>
        <PersonSelector
          type="actor"
          activeFilter={actorFilter}
          setActiveFilter={setActorFilter}
        />
        <PersonSelector
          type="director"
          activeFilter={directorFilter}
          setActiveFilter={setDirectorFilter}
        />
      </div>
      <ResetButton
        clickCallback={() => {
          setGenreFilters([]);
          setCountryFilters([]);
          setYearFilter("all");
          setRatingFilter("0");
          setRatingCountFilter("0");
          setActorFilter("");
          setDirectorFilter("");
        }}
      />
    </section>
  );
};

export default Filters;
