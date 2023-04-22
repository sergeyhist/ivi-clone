import { Dispatch, FC, SetStateAction } from "react";
import styles from "./FilterTitle.module.sass";

interface FilterTitleProps {
  text: string;
  isDropdownActive: boolean;
  setIsDropdownActive: Dispatch<SetStateAction<boolean>>;
}

const FilterTitle: FC<FilterTitleProps> = ({
  text,
  isDropdownActive,
  setIsDropdownActive,
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
      {text}
      <span className={styles.title__arrow + activeArrow} />
    </div>
  );
};

export default FilterTitle;
