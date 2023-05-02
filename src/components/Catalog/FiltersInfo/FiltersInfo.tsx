import { FC } from "react";
import styles from "./FiltersInfo.module.sass";
import { getRatingSlug, isArrayNotEmpty, isFilterNotDefault } from "./FiltersInfo.utils";
import { IActiveFilters, IFilter } from "/src/types/IFilter";
import { useTranslation } from "next-i18next";

interface FiltersInfoProps {
  activeFilters: IActiveFilters;
}

const FiltersInfo: FC<FiltersInfoProps> = ({ activeFilters }) => {
  const { t } = useTranslation(["filters", "genres"]);
  const activeFiltersTextArray: string[] = [];

  const getTextSelector = (activeFilters: IActiveFilters, key: string): string =>
    (activeFilters[key] as IFilter).text
      ? t((activeFilters[key] as IFilter).text)
      : (activeFilters[key] as IFilter).slug;

  const arrayToString = (activeFilters: IActiveFilters, key: string): string =>
    (activeFilters[key] as IFilter[]).map((filter) => t(filter.text)).join(", ");

  const updateTextArray = (activeFilters: IActiveFilters, key: string): string => {
    if (!Array.isArray(activeFilters[key]) && isFilterNotDefault(activeFilters, key)) {
      return getTextSelector(activeFilters, key) + getRatingSlug(activeFilters, key);
    }
    if (Array.isArray(activeFilters[key]) && isArrayNotEmpty(activeFilters, key)) {
      return arrayToString(activeFilters, key);
    }
    return t(`filters:all.${key}`);
  };

  for (const key in activeFilters) {
    activeFiltersTextArray.push(updateTextArray(activeFilters, key));
  }

  return (
    <div className="container">
      <div className={styles.info}>{activeFiltersTextArray.join(", ")}</div>
    </div>
  );
};

export default FiltersInfo;
