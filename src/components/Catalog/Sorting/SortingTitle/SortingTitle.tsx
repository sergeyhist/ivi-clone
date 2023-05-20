import { Dispatch, FC, SetStateAction } from "react";
import { MdOutlineSort } from "react-icons/md";
import styles from "./SortingTitle.module.sass";

interface SortingTitleProps {
  value: string;
  isDropdownActive: boolean;
  setIsDropdownActive: Dispatch<SetStateAction<boolean>>;
}

const SortingTitle: FC<SortingTitleProps> = ({
  value,
  isDropdownActive,
  setIsDropdownActive,
}) => {
  const activeArrow = isDropdownActive ? ` ${styles.title__arrow_active}` : "";

  return (
    <div
      onClick={() => setIsDropdownActive((curr) => !curr)}
      className={styles.title}
    >
      <MdOutlineSort size={16} className={styles.title__icon} />
      <span data-testid="sorting-title">{value}</span>
      <span className={styles.title__arrow + activeArrow} />
    </div>
  );
};

export default SortingTitle;
