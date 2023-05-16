import { Dispatch, FC, SetStateAction } from "react";
import { useTranslation } from "next-i18next";
import styles from "./FilterTitle.module.sass";

interface FilterTitleProps {
  text: string;
  isDropdownActive: boolean;
  setIsDropdownActive: Dispatch<SetStateAction<boolean>>;
  filters?: string[] | string;
  filtersType: string;
}

const FilterTitle: FC<FilterTitleProps> = ({
  text,
  isDropdownActive,
  setIsDropdownActive,
  filters,
  filtersType,
}) => {
  const { t } = useTranslation("filters");

  const activeTitle = isDropdownActive ? ` ${styles.title_active}` : "";
  const activeArrow = isDropdownActive ? ` ${styles.title__arrow_active}` : "";

  const isFilterActive =
    filters && filters.length > 0;

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
            {filters &&
              typeof filters === "string" &&
              t(`${filtersType}:${filters}`)}
            {filters &&
              typeof filters !== "string" &&
              filters.map((filter) => t(`${filtersType}:${filter}`)).join(", ")}
          </span>
        )}
      </div>
      <span className={styles.title__arrow + activeArrow} />
    </div>
  );
};

export default FilterTitle;
