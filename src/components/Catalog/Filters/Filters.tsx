import { FC, useRef } from "react";
import { useTranslation } from "next-i18next";
import styles from "./Filters.module.sass";
import { yearFilterItems } from "./Filters.utils";
import MultiSelector from "./MultiSelector/MultiSelector";
import PersonSelector from "./PersonSelector/PersonSelector";
import RangeSelector from "./RangeSelector/RangeSelector";
import ResetButton from "./ResetButton/ResetButton";
import SingleSelector from "./SingleSelector/SingleSelector";
import { IFilters } from "/src/types/IFilter";
import { useRouter } from "next/router";
import {setQueryParams} from "/src/utils/query";

interface FiltersProps {
  genres: string[];
  countries: string[];
  filters: IFilters;
}

const sortHandler = (a: string, b: string): 1 | -1 => (a > b ? 1 : -1);

const Filters: FC<FiltersProps> = ({ genres, countries, filters }) => {
  const { t } = useTranslation("filters");
  const router = useRouter();

  const defaultFilters = useRef(filters);

  const resetHandler = (): void => {
    setQueryParams(router, defaultFilters.current);
  };

  return (
    <div className={styles.filters}>
      <MultiSelector
        title={t("genre")}
        items={genres}
        filters={filters}
        filtersType="genres"
        getFilters={(result) =>
          setQueryParams(router, { ...filters, genres: result })
        }
        dropdownPosition="left"
      />
      <MultiSelector
        title={t("country")}
        items={countries.sort(sortHandler)}
        filters={filters}
        filtersType={"countries"}
        getFilters={(result) =>
          setQueryParams(router, { ...filters, countries: result })
        }
        dropdownPosition="center"
      />
      <SingleSelector
        title={t("year")}
        items={yearFilterItems}
        filters={filters}
        filtersType="year"
        getFilter={(result) =>
          setQueryParams(router, { ...filters, year: result })
        }
      />
      <RangeSelector
        title={t("rating")}
        max={9}
        step={0.1}
        filter={filters.rating}
        getFilter={(result) =>
          setQueryParams(router, {
            ...filters,
            rating: result,
          })
        }
      />
      <RangeSelector
        title={t("ratingCount")}
        max={1000000}
        step={10000}
        filter={filters.assessments}
        getFilter={(result) =>
          setQueryParams(router, {
            ...filters,
            assessments: result,
          })
        }
      />
      <div className={styles.filters__person}>
        <PersonSelector
          type="actor"
          getFilter={(result) =>
            setQueryParams(router, { ...filters, actor: result })
          }
        />
        <PersonSelector
          type="director"
          getFilter={(result) =>
            setQueryParams(router, { ...filters, director: result })
          }
        />
      </div>
      <ResetButton clickCallback={resetHandler} />
    </div>
  );
};

export default Filters;
