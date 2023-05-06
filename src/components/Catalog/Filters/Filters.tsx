import { FC, useRef } from "react";
import { useTranslation } from "next-i18next";
import styles from "./Filters.module.sass";
import {
  filterDefaults,
  isFilterActive,
  yearFilterItems,
} from "./Filters.utils";
import MultiSelector from "./MultiSelector/MultiSelector";
import PersonSelector from "./PersonSelector/PersonSelector";
import RangeSelector from "./RangeSelector/RangeSelector";
import ResetButton from "./ResetButton/ResetButton";
import SingleSelector from "./SingleSelector/SingleSelector";
import { IFilters } from "/src/types/IFilter";
import { useRouter } from "next/router";
import { setQueryParams } from "/src/utils/query";
import { IPerson } from "/src/types/IPerson";

interface FiltersProps {
  genres: string[];
  countries: string[];
  actors: IPerson[];
  directors: IPerson[];
  filters: IFilters;
}

const sortHandler = (a: string, b: string): 1 | -1 => (a > b ? 1 : -1);

const Filters: FC<FiltersProps> = ({
  genres,
  countries,
  actors,
  directors,
  filters,
}) => {
  const { t } = useTranslation("filters");
  const router = useRouter();

  const defaultFilters = useRef(filters);

  const resetHandler = (): void => {
    setQueryParams(router, defaultFilters.current);
  };

  const changeHandler = (
    filter: string[] | string,
    slug: string,
    replace: boolean = false
  ): string[] => {
    let result: string[];

    if (isFilterActive(filter, slug) || filterDefaults.includes(slug)) {
      result =
        typeof filter !== "string"
          ? (filter as string[]).filter((item) => item !== slug)
          : (filter = []);
    } else {
      result = replace
        ? [slug]
        : typeof filter !== "string"
        ? [...(filter as string[]), slug]
        : [filter as string, slug];
    }

    return result;
  };

  return (
    <div className={styles.filters}>
      <div className={styles.filters__top}>
        <MultiSelector
          title={t("genre")}
          items={genres}
          filters={filters}
          filtersType="genres"
          getFilter={(result) =>
            setQueryParams(router, {
              genres: changeHandler(filters.genres, result),
            })
          }
          dropdownPosition="left"
        />
        <MultiSelector
          title={t("country")}
          items={countries.sort(sortHandler)}
          filters={filters}
          filtersType={"countries"}
          getFilter={(result) =>
            setQueryParams(router, {
              countries: changeHandler(filters.countries, result),
            })
          }
          dropdownPosition="center"
        />
        <SingleSelector
          title={t("year")}
          items={yearFilterItems}
          filter={filters.year as string}
          filtersType="year"
          getFilter={(result) => {
            setQueryParams(router, {
              year: changeHandler(filters.year, result, true),
            });
          }}
        />
      </div>
      <div className={styles.filters__bottom}>
        <RangeSelector
          title={t("rating")}
          max={9}
          step={0.1}
          filter={filters.rating as string}
          getFilter={(result) =>
            setQueryParams(router, {
              rating: changeHandler(filters.rating, result, true),
            })
          }
        />
        <RangeSelector
          title={t("ratingCount")}
          max={1000000}
          step={10000}
          filter={filters.assessments as string}
          getFilter={(result) =>
            setQueryParams(router, {
              assessments: changeHandler(filters.assessments, result, true),
            })
          }
        />
        <PersonSelector
          type="actor"
          list={actors}
          getFilter={(result) => setQueryParams(router, { actor: result })}
        />
        <PersonSelector
          type="director"
          list={directors}
          getFilter={(result) => setQueryParams(router, { actor: result })}
        />
      </div>
      <ResetButton clickCallback={resetHandler} />
    </div>
  );
};

export default Filters;
