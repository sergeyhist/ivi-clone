import { Dispatch, FC, SetStateAction, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useThrottledCallback } from "use-debounce";
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
import { IActiveFilters, IFilter } from "/src/types/IFilter";

interface FiltersProps {
  activeFilters: IActiveFilters;
  setActiveFilters: Dispatch<SetStateAction<IActiveFilters>>;
}

const sortHandler = (a: IFilter, b: IFilter) => (a.slug > b.slug ? 1 : -1);

const Filters: FC<FiltersProps> = ({ activeFilters, setActiveFilters }) => {
  const { t } = useTranslation();

  const defaultFilters = useRef(activeFilters);
  const setThrottledFilters = useThrottledCallback((filters: IActiveFilters) => {
    setActiveFilters(filters);
  }, 50);

  const resetHandler = () => {
    setThrottledFilters(defaultFilters.current);
  };

  return (
    <section className={styles.filters}>
      <MultiSelector
        title={t("filters.genre")}
        items={genreFilterItems.sort(sortHandler)}
        sliderItems={genreFilterSlides}
        activeFilters={activeFilters.genre}
        getFilters={(filters) =>
          setThrottledFilters({ ...activeFilters, genre: filters })
        }
        dropdownPosition="left"
      />
      <MultiSelector
        title={t("filters.country")}
        items={countryFilterItems.sort(sortHandler)}
        sliderItems={[...countryFilterItems].slice(0, 10)}
        activeFilters={activeFilters.country}
        getFilters={(filters) =>
          setThrottledFilters({ ...activeFilters, country: filters })
        }
        dropdownPosition="center"
      />
      <SingleSelector
        title={t("filters.years.title")}
        items={yearFilterItems}
        activeFilter={activeFilters.year}
        getFilter={(filter) =>
          setThrottledFilters({ ...activeFilters, year: filter })
        }
      />
      <RangeSelector
        title={t("filters.rating")}
        max={9}
        step={0.1}
        activeFilter={activeFilters.rating}
        getFilter={(filter) =>
          setThrottledFilters({
            ...activeFilters,
            rating: {
              slug: filter,
              text: `filters.ratingFrom`,
            },
          })
        }
      />
      <RangeSelector
        title={t("filters.ratingCount")}
        max={500000}
        step={10000}
        activeFilter={activeFilters.ratingCount}
        getFilter={(filter) =>
          setThrottledFilters({
            ...activeFilters,
            ratingCount: {
              slug: filter,
              text: 'filters.ratingCountFrom',
            },
          })
        }
      />
      <div className={styles.filters__person}>
        <PersonSelector
          type="actor"
          activeFilter={activeFilters.actor}
          getFilter={(filter) =>
            setActiveFilters({ ...activeFilters, actor: filter })
          }
        />
        <PersonSelector
          type="director"
          activeFilter={activeFilters.director}
          getFilter={(filter) =>
            setThrottledFilters({ ...activeFilters, director: filter })
          }
        />
      </div>
      <ResetButton clickCallback={resetHandler} />
    </section>
  );
};

export default Filters;
