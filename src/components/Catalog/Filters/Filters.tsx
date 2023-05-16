import { FC, useEffect } from "react";
import styles from "./Filters.module.sass";
import { getResetfilters, yearFilterItems } from "./Filters.utils";
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

const sortHandler = (a: string, b: string): 1 | -1 => (a > b ? 1 : -1);

const Filters: FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { filters } = useAppSelector((state) => state.filters);
  const slugs = useAppSelector((state) => state.slugs);

  const actors = useGetActors();
  const directors = useGetDirectors();

  const resetHandler = (): void => {
    const resetFilters = getResetfilters(filters);

    Object.keys(resetFilters).length > 0 &&
      setQueryParams(router, resetFilters);
  };

  useEffect(() => {
    const routeFilters = getFiltersFromRoute(router);

    compareFilters(routeFilters, filters) && dispatch(setFilters(routeFilters));
  }, [router, filters, dispatch]);

  return (
    <div className={styles.filters}>
      <div className={styles.filters__top}>
        <MultiSelector
          title={"genre"}
          items={slugs.genresSlugs}
          filters={filters.genres as string[]}
          filtersType="genres"
          dropdownPosition="left"
        />
        <MultiSelector
          title={"country"}
          items={[...slugs.countriesSlugs].sort(sortHandler)}
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
          list={actors.data || []}
          filter={filters.actor as string}
        />
        <PersonSelector
          type="director"
          list={directors.data || []}
          filter={filters.director as string}
        />
      </div>
      <ResetButton clickCallback={resetHandler} />
    </div>
  );
};

export default Filters;
