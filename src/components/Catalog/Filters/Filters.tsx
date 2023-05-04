import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTranslation } from "next-i18next";
import styles from "./Filters.module.sass";
import { genreFilterSlides, yearFilterItems } from "./Filters.utils";
import MultiSelector from "./MultiSelector/MultiSelector";
import PersonSelector from "./PersonSelector/PersonSelector";
import RangeSelector from "./RangeSelector/RangeSelector";
import ResetButton from "./ResetButton/ResetButton";
import SingleSelector from "./SingleSelector/SingleSelector";
import { IActiveFilters, IFilter } from "/src/types/IFilter";
import { IGenre } from "/src/types/IGenre";
import {getAllCountries, getAllGenres} from "/src/api/getData";

interface FiltersProps {
  activeFilters: IActiveFilters;
  setActiveFilters: Dispatch<SetStateAction<IActiveFilters>>;
}

const sortHandler = (a: IFilter, b: IFilter): 1 | -1 =>
  a.slug > b.slug ? 1 : -1;

const Filters: FC<FiltersProps> = ({ activeFilters, setActiveFilters }) => {
  const { t } = useTranslation("filters");

  const [genresList, setGenresList] = useState<IFilter[]>([]);
  const [countriesList, setCountriesList] = useState<IFilter[]>([]);

  useEffect(() => {
    getAllGenres().then((genres) =>
      setGenresList(
        genres.data.map((genre: IGenre) => {
          return { slug: genre.slug, text: `genres:${genre.slug}` };
        })
      )
    );
    getAllCountries().then((countries) =>
      setCountriesList(
        countries.data.map((country: any) => {
          return { slug: country.country, text: country.country };
        })
      )
    );
  }, [setGenresList]);

  const defaultFilters = useRef(activeFilters);

  const resetHandler = (): void => {
    setActiveFilters(defaultFilters.current);
  };

  return (
    <div className={styles.filters}>
      <MultiSelector
        title={t("genre")}
        items={genresList.sort(sortHandler)}
        sliderItems={genreFilterSlides}
        activeFilters={activeFilters.genre}
        getFilters={(filters) =>
          setActiveFilters({ ...activeFilters, genre: filters })
        }
        dropdownPosition="left"
      />
      <MultiSelector
        title={t("country")}
        items={countriesList.sort(sortHandler)}
        sliderItems={[...countriesList].slice(0, 10)}
        activeFilters={activeFilters.country}
        getFilters={(filters) =>
          setActiveFilters({ ...activeFilters, country: filters })
        }
        dropdownPosition="center"
      />
      <SingleSelector
        title={t("years.title")}
        items={yearFilterItems}
        activeFilter={activeFilters.year}
        getFilter={(filter) =>
          setActiveFilters({ ...activeFilters, year: filter })
        }
      />
      <RangeSelector
        title={t("rating")}
        max={9}
        step={0.1}
        activeFilter={activeFilters.rating}
        getFilter={(filter) =>
          setActiveFilters({
            ...activeFilters,
            rating: {
              slug: filter,
              text: t("ratingFrom"),
            },
          })
        }
      />
      <RangeSelector
        title={t("ratingCount")}
        max={500000}
        step={10000}
        activeFilter={activeFilters.ratingCount}
        getFilter={(filter) =>
          setActiveFilters({
            ...activeFilters,
            ratingCount: {
              slug: filter,
              text: t("ratingCountFrom"),
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
            setActiveFilters({ ...activeFilters, director: filter })
          }
        />
      </div>
      <ResetButton clickCallback={resetHandler} />
    </div>
  );
};

export default Filters;
