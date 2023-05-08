import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./FiltersInfo.module.sass";
import { getPersonName, personFinder } from "./FiltersInfo.utils";
import { useAppSelector } from "/src/hooks/redux";
import { getFiltersText } from "/src/utils/filters/getFiltersText";

const FiltersInfo: FC = () => {
  const { locale } = useRouter();
  const { filters } = useAppSelector((state) => state.filters);
  const persons = useAppSelector((state) => state.persons);
  const actor = personFinder("actor", filters, persons.actors);
  const director = personFinder("director", filters, persons.directors);

  return (
    <div className={styles.page__info + " container"}>
      {getFiltersText(
        filters,
        actor ? getPersonName(actor, locale) : undefined,
        director ? getPersonName(director, locale) : undefined
      )}
    </div>
  );
};

export default FiltersInfo;
