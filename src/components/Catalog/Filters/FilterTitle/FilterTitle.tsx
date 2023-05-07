import { Dispatch, FC, SetStateAction } from "react";
import { useTranslation } from "next-i18next";
import styles from "./FilterTitle.module.sass";
import { IFilters } from "/src/types/IFilter";

interface FilterTitleProps {
  text: string;
  isDropdownActive: boolean;
  setIsDropdownActive: Dispatch<SetStateAction<boolean>>;
  filter?: string;
  filters?: IFilters;
  filtersType: string;
}

const FilterTitle: FC<FilterTitleProps> = ({
  text,
  isDropdownActive,
  setIsDropdownActive,
  filter,
  filters,
  filtersType,
}) => {
  const { t } = useTranslation("filters");

  const activeTitle = isDropdownActive ? ` ${styles.title_active}` : "";
  const activeArrow = isDropdownActive ? ` ${styles.title__arrow_active}` : "";

  const isFilterActive =
    (filter && filter.length !== 0) ||
    (filters && filters[filtersType].length > 0);

  return (
    <div
      onClick={() => {
        setIsDropdownActive((curr) => !curr);
      }}
      className={styles.title + activeTitle}
    >
      <div className={styles.title__text}>
        {text}
        {isFilterActive && (
          <span className={styles.title__filters}>
            {filter
              ? t(`${filtersType}:${filter}`)
              : filters &&
                (filters[filtersType] as string[])
                  .map((filter) => t(`${filtersType}:${filter}`))
                  .join(", ")}
          </span>
        )}
      </div>
      <span className={styles.title__arrow + activeArrow} />
    </div>
  );
};

export default FilterTitle;
