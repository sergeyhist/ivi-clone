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

  Object.keys(activeFilters).forEach((key) => {
    const isArrayNotEmpty = (activeFilters[key] as IFilter[]).length > 0;
    const isFilterNotDefault = !["all", "0", ""].includes(
      (activeFilters[key] as IFilter).slug
    );

    if (!Array.isArray(activeFilters[key])) {
      if (isFilterNotDefault) {
        activeFiltersTextArray.push(
          t((activeFilters[key] as IFilter).text) +
            (["rating", "ratingCount"].includes(key)
              ? ` ${(activeFilters[key] as IFilter).slug}`
              : "")
        );
      } else {
        activeFiltersTextArray.push(t(`filters.all.${key}`));
      }
    } else {
      if (isArrayNotEmpty) {
        activeFiltersTextArray.push(
          (activeFilters[key] as IFilter[])
            .map((filter) => t(filter.text))
            .join(", ")
        );
      } else {
        activeFiltersTextArray.push(t(`filters.all.${key}`));
      }
    }
  });

  return <div className={styles.info}>{activeFiltersTextArray.join(", ")}</div>;
};

export default FiltersInfo;
