import { Dispatch, FC, SetStateAction } from "react";
import styles from "./FilterTitle.module.sass";

interface FilterTitleProps {
  text: string;
  isDropdownActive: boolean;
  setIsDropdownActive: Dispatch<SetStateAction<boolean>>;
  activeFilters?: string[];
}

const FilterTitle: FC<FilterTitleProps> = ({
  text,
  isDropdownActive,
  setIsDropdownActive,
  activeFilters,
}) => {
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
            {activeFilters.join(", ")}
          </span>
        )}
      </div>
      <span className={styles.title__arrow + activeArrow} />
    </div>
  );
};

export default FilterTitle;
