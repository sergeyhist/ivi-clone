import { FC } from "react";
import { useTranslation } from "next-i18next";
import styles from "./Filters.module.sass";
import { yearFilterItems } from "./Filters.utils";
import MultiSelector from "./MultiSelector/MultiSelector";
import PersonSelector from "./PersonSelector/PersonSelector";
import RangeSelector from "./RangeSelector/RangeSelector";
import ResetButton from "./ResetButton/ResetButton";
import SingleSelector from "./SingleSelector/SingleSelector";
import { setQueryParams } from "/src/utils/query";
import { useAppSelector } from "/src/hooks/redux";
import { changeHandler } from "/src/utils/filters/changeHandler";
import { defaultFilters } from "/src/utils/filters/filtersVariables";
import { useRouter } from "next/router";

const sortHandler = (a: string, b: string): 1 | -1 => (a > b ? 1 : -1);

const Filters: FC = () => {
  const { t } = useTranslation("filters");
  const router = useRouter();
  const { filters } = useAppSelector((state) => state.filters);
  const persons = useAppSelector((state) => state.persons);
  const slugs = useAppSelector((state) => state.slugs);

  return (
    <div className={styles.filters}>
      <div className={styles.filters__top}>
        <MultiSelector
          title={t("genre")}
          items={slugs.genresSlugs}
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
          items={[...slugs.countriesSlugs].sort(sortHandler)}
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
          list={persons.actors}
          filter={filters.actor as string}
          getFilter={(result) =>
            setQueryParams(router, {
              actor: changeHandler(filters.actor, result, true),
            })
          }
        />
        <PersonSelector
          type="director"
          list={persons.directors}
          filter={filters.director as string}
          getFilter={(result) =>
            setQueryParams(router, {
              director: changeHandler(filters.director, result, true),
            })
          }
        />
      </div>
      <ResetButton
        clickCallback={() => setQueryParams(router, defaultFilters)}
      />
    </div>
  );
};

export default Filters;
