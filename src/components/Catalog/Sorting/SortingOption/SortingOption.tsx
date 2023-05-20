import { FC, ReactNode } from "react";
import styles from "./SortingOption.module.sass";

interface SortingOptionProps {
  children: ReactNode;
  isActive: boolean;
  clickCallback: () => void;
}

const SortingOption: FC<SortingOptionProps> = ({
  children,
  isActive,
  clickCallback,
}) => {
  const activeOption = isActive ? ` ${styles.option_active}` : "";

  return (
    <div
      data-testid="sorting-option"
      className={styles.option + activeOption}
      onClick={clickCallback}
    >
      {children}
    </div>
  );
};

export default SortingOption;
