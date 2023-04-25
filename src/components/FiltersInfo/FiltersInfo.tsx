import { FC } from "react";
import styles from "./FiltersInfo.module.sass";
import { updateTextArray } from "./FiltersInfo.utils";
import { IActiveFilters } from "/src/types/IFilter";

interface FiltersInfoProps {
  activeFilters: IActiveFilters;
}

const FiltersInfo: FC<FiltersInfoProps> = ({ activeFilters }) => {
  const activeFiltersTextArray: string[] = [];

  Object.keys(activeFilters).forEach((key) => {
    activeFiltersTextArray.push(updateTextArray(activeFilters, key));
  });

  return <div className={styles.info}>{activeFiltersTextArray.join(", ")}</div>;
};

export default FiltersInfo;
