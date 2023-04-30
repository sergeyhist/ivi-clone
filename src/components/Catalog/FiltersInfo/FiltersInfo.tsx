import { FC } from "react";
import styles from "./FiltersInfo.module.sass";
import { updateTextArray } from "./FiltersInfo.utils";
import { IActiveFilters } from "/src/types/IFilter";
import { useTranslation } from "next-i18next";

interface FiltersInfoProps {
  activeFilters: IActiveFilters;
}

const FiltersInfo: FC<FiltersInfoProps> = ({ activeFilters }) => {
  const { t } = useTranslation("filters");
  const activeFiltersTextArray: string[] = [];

  for (const key in activeFilters) {
    activeFiltersTextArray.push(updateTextArray(activeFilters, key));
  }

  return (
    <div className="container">
      <div className={styles.info}>
        {activeFiltersTextArray.map((filter, index) => (
          <span key={index}>{t(`${filter}`)}, </span>
        ))}
      </div>
    </div>
  );
};

export default FiltersInfo;
