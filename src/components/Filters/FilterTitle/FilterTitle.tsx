import { Dispatch, FC, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import styles from "./FilterTitle.module.sass";
import { IFilter } from "/src/types/IFilter";

interface FilterTitleProps {
  text: string;
  isDropdownActive: boolean;
  setIsDropdownActive: Dispatch<SetStateAction<boolean>>;
  activeFilters?: IFilter[];
}

const FilterTitle: FC<FilterTitleProps> = ({
  text,
  isDropdownActive,
  setIsDropdownActive,
  activeFilters,
}) => {
  const { t } = useTranslation();

  const activeTitle = isDropdownActive ? ` ${styles.title_active}` : "";
  const activeArrow = isDropdownActive ? ` ${styles.title__arrow_active}` : "";

  return (
    <div
      onClick={() => {
        setIsDropdownActive((curr) => !curr);
      }}
      className={styles.title + activeTitle}
    >
      <div className={styles.title__text}>
        {text}
        {activeFilters && activeFilters.length > 0 && (
          <span className={styles.title__filters}>
            {activeFilters
              .map((filter) => (filter.text ? t(filter.text) : filter.slug))
              .join(", ")}
          </span>
        )}
      </div>
      <span className={styles.title__arrow + activeArrow} />
    </div>
  );
};

export default FilterTitle;
