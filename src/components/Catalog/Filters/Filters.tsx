import { FC } from "react";
import { useTranslation } from "next-i18next";
import styles from "./Filters.module.sass";
import { yearFilterItems } from "./Filters.utils";
import MultiSelector from "./MultiSelector/MultiSelector";
import PersonSelector from "./PersonSelector/PersonSelector";
import RangeSelector from "./RangeSelector/RangeSelector";
import ResetButton from "./ResetButton/ResetButton";
import SingleSelector from "./SingleSelector/SingleSelector";
import { useRouter } from "next/router";
import { setQueryParams } from "/src/utils/query";
import { useAppSelector } from "/src/hooks/redux";
import { changeHandler } from "/src/utils/filters/changeHandler";
import { defaultFilters } from "/src/utils/filters/filtersVariables";

const sortHandler = (a: string, b: string): 1 | -1 => (a > b ? 1 : -1);

const Filters: FC = () => {
  const { t } = useTranslation("filters");
  const router = useRouter();
  const filtersState = useAppSelector((state) => state.filters);
  const persons = useAppSelector((state) => state.persons);
  const slugs = useAppSelector((state) => state.slugs);

  return (
    <div className="container">
      <div className={styles.filters}>
        <div className={styles.filters__top}>
          <MultiSelector
            title={t("genre")}
            items={slugs.genresSlugs}
            filters={filtersState.filters}
            filtersType="genres"
            getFilter={(result) =>
              setQueryParams(router, {
                genres: changeHandler(filtersState.filters.genres, result),
              })
            }
            dropdownPosition="left"
          />
          <MultiSelector
            title={t("country")}
            items={[...slugs.countriesSlugs].sort(sortHandler)}
            filters={filtersState.filters}
            filtersType={"countries"}
            getFilter={(result) =>
              setQueryParams(router, {
                countries: changeHandler(
                  filtersState.filters.countries,
                  result
                ),
              })
            }
            dropdownPosition="center"
          />
          <SingleSelector
            title={t("year")}
            items={yearFilterItems}
            filter={filtersState.filters.year as string}
            filtersType="year"
            getFilter={(result) => {
              setQueryParams(router, {
                year: changeHandler(filtersState.filters.year, result, true),
              });
            }}
          />
        </div>
        <div className={styles.filters__bottom}>
          <RangeSelector
            title={t("rating")}
            max={9}
            step={0.1}
            filter={filtersState.filters.rating as string}
            getFilter={(result) =>
              setQueryParams(router, {
                rating: changeHandler(
                  filtersState.filters.rating,
                  result,
                  true
                ),
              })
            }
          />
          <RangeSelector
            title={t("ratingCount")}
            max={1000000}
            step={10000}
            filter={filtersState.filters.assessments as string}
            getFilter={(result) =>
              setQueryParams(router, {
                assessments: changeHandler(
                  filtersState.filters.assessments,
                  result,
                  true
                ),
              })
            }
          />
          <PersonSelector
            type="actor"
            list={persons.actors}
            filter={filtersState.filters.actor as string}
            getFilter={(result) =>
              setQueryParams(router, {
                actor: changeHandler(filtersState.filters.actor, result, true),
              })
            }
          />
          <PersonSelector
            type="director"
            list={persons.directors}
            filter={filtersState.filters.director as string}
            getFilter={(result) =>
              setQueryParams(router, {
                director: changeHandler(
                  filtersState.filters.director,
                  result,
                  true
                ),
              })
            }
          />
        </div>
        <ResetButton
          clickCallback={() => setQueryParams(router, defaultFilters)}
        />
      </div>
    </div>
  );
};

export default Filters;
