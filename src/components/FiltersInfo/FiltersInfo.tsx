import { FC } from "react";
import { useTranslation } from "react-i18next";
import styles from "./FiltersInfo.module.sass";
import { IActiveFilters, IFilter } from "/src/types/IFilter";

interface FiltersInfoProps {
  activeFilters: IActiveFilters;
}

const FiltersInfo: FC<FiltersInfoProps> = ({ activeFilters }) => {
  const { t } = useTranslation();

  const activeFiltersTextArray: string[] = [];

  const getRatingSlug = (key: string) =>
    ["rating", "ratingCount"].includes(key)
      ? ` ${(activeFilters[key] as IFilter).slug}`
      : "";

  const isArrayNotEmpty = (key: string) =>
    (activeFilters[key] as IFilter[]).length > 0;

  const isFilterNotDefault = (key: string) =>
    !["all", "0", ""].includes((activeFilters[key] as IFilter).slug);

  const textSelector = (key: string) =>
    (activeFilters[key] as IFilter).text
      ? t((activeFilters[key] as IFilter).text)
      : (activeFilters[key] as IFilter).slug;

  const arrayToString = (key: string) =>
    (activeFilters[key] as IFilter[])
      .map((filter) => t(filter.text))
      .join(", ");

  const updateTextArray = (key: string) => {
    if (!Array.isArray(activeFilters[key]) && isFilterNotDefault(key)) {
      return activeFiltersTextArray.push(textSelector(key) + getRatingSlug(key));
    }

    if (Array.isArray(activeFilters[key]) && isArrayNotEmpty(key)) {
      return activeFiltersTextArray.push(arrayToString(key));
    }

    return activeFiltersTextArray.push(t(`filters.all.${key}`));
  };

  Object.keys(activeFilters).forEach((key) => {
    updateTextArray(key);
  });

  return <div className={styles.info}>{activeFiltersTextArray.join(", ")}</div>;
};

export default FiltersInfo;
