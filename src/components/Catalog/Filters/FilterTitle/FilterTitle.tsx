import { FC } from "react";
import { useTranslation } from "next-i18next";
import styles from "./FilterTitle.module.sass";

interface FilterTitleProps {
  text: string;
  isActive: boolean;
  filters?: string[] | string;
  filtersType: string;
  clickCallback: () => void;
}

const FilterTitle: FC<FilterTitleProps> = ({
  text,
  isActive,
  filters,
  filtersType,
  clickCallback,
}) => {
  const { t } = useTranslation("filters");

  const activeTitle = isActive ? ` ${styles.title_active}` : "";
  const activeArrow = isActive ? ` ${styles.title__arrow_active}` : "";

  const isFilterActive = filters && filters.length > 0;

  return (
    <div
      data-testid="filter-title"
      onClick={() => clickCallback()}
      className={styles.title + activeTitle}
    >
      <div className={styles.title__text}>
        {text}
        {isFilterActive && (
          <span
            data-testid="filter-title-active"
            className={styles.title__filters}
          >
            {filters &&
              typeof filters === "string" &&
              t(`${filtersType}:${filters}`)}
            {filters &&
              typeof filters !== "string" &&
              filters.map((filter) => t(`${filtersType}:${filter}`)).join(", ")}
          </span>
        )}
      </div>
      <span
        data-testid="filter-title-arrow"
        className={styles.title__arrow + activeArrow}
      />
    </div>
  );
};

export default FilterTitle;
