import { FC, useEffect } from "react";
import styles from "./Filters.module.sass";
import { getResetfilters, sortHandler, yearFilterItems } from "./Filters.utils";
import MultiSelector from "./MultiSelector/MultiSelector";
import PersonSelector from "./PersonSelector/PersonSelector";
import RangeSelector from "./RangeSelector/RangeSelector";
import ResetButton from "./ResetButton/ResetButton";
import SingleSelector from "./SingleSelector/SingleSelector";
import { setQueryParams } from "/src/utils/query";
import { useAppDispatch, useAppSelector } from "/src/hooks/redux";
import { useRouter } from "next/router";
import { useGetActors, useGetDirectors } from "/src/api/persons";
import { getFiltersFromRoute } from "/src/utils/filters/getFiltersFromRoute";
import { compareFilters } from "/src/utils/filters/compareFilters";
import { setFilters } from "/src/store/slices/filtersSlice";
import { useTranslation } from "next-i18next";
import { actorsList } from "/src/utils/mocks/actors";

const Filters: FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { query } = router;
  const dispatch = useAppDispatch();

  const { filters } = useAppSelector((state) => state.filters);
  const slugs = useAppSelector((state) => state.slugs);
  const { width } = useAppSelector((state) => state.windowSize);

  const actors = useGetActors();
  const directors = useGetDirectors();

  const resetHandler = (): void => {
    const resetFilters = getResetfilters(filters);

    Object.keys(resetFilters).length > 0 && setQueryParams(router, resetFilters);
  };

  useEffect(() => {
    const routeFilters = getFiltersFromRoute(router);

    compareFilters(routeFilters, filters) && dispatch(setFilters(routeFilters));
  }, [router, filters, dispatch]);

  return (
    <div data-testid="filters" className={styles.filters}>
      <div className={styles.filters__top}>
        <MultiSelector
          title={"genre"}
          items={sortHandler([...slugs.genresSlugs])}
          filters={filters.genres as string[]}
          filtersType="genres"
          dropdownPosition="left"
        />
        <MultiSelector
          title={"country"}
          items={sortHandler([...slugs.countriesSlugs])}
          filters={filters.countries as string[]}
          filtersType={"countries"}
          dropdownPosition="center"
        />
        <SingleSelector
          title={"year"}
          items={yearFilterItems}
          filter={filters.year as string}
          filterType="year"
        />
      </div>
      <div className={styles.filters__bottom}>
        <RangeSelector
          title={"rating"}
          max={9}
          step={0.1}
          filter={filters.rating as string}
          filterType="rating"
        />
        <RangeSelector
          title={"ratingCount"}
          max={1000000}
          step={10000}
          filter={filters.assessments as string}
          filterType="assessments"
        />
        <PersonSelector
          type="actor"
          list={actors.data || actorsList}
          filter={filters.actor as string}
        />
        <PersonSelector
          type="director"
          list={directors.data || actorsList}
          filter={filters.director as string}
        />
      </div>
      <div className={styles.filters__buttons}>
        <ResetButton
          text={t("filters:reset.filters")}
          textPosition="right"
          clickCallback={resetHandler}
        />
        <ResetButton
          text={t("filters:reset.page")}
          textPosition={width > 550 ? "left" : "right"}
          clickCallback={() => query.page && setQueryParams(router, { page: [] })}
        />
      </div>
    </div>
  );
};

export default Filters;
