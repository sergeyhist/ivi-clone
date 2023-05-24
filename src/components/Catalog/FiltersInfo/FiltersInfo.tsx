import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./FiltersInfo.module.sass";
import { getPersonName, personFinder } from "./FiltersInfo.utils";
import { useAppSelector } from "/src/hooks/redux";
import { getFiltersText } from "/src/utils/filters/getFiltersText";
import { useGetActors, useGetDirectors } from "/src/api/persons";

const FiltersInfo: FC = () => {
  const { locale } = useRouter();
  const { filters } = useAppSelector((state) => state.filters);
  const actors = useGetActors();
  const directors = useGetDirectors();
  const actor = actors.data && personFinder("actor", filters, actors.data);
  const director = directors.data && personFinder("director", filters, directors.data);

  return (
    <div data-testid="filters-info" className={styles.info}>
      {getFiltersText(
        filters,
        actor ? getPersonName(actor, locale) : undefined,
        director ? getPersonName(director, locale) : undefined
      )}
    </div>
  );
};

export default FiltersInfo;
