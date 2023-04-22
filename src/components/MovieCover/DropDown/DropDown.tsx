import { FC, useState } from "react";
import styles from "./DropDown.module.sass";

interface DropDownProps {
  children: React.ReactNode;
  dropDownClassName?: string;
  toogleClassName?: string;
}

const DropDown: FC<DropDownProps> = ({
  children,
  dropDownClassName = "",
  toogleClassName = "",
}) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const dropDownClass = showDropDown
    ? `${styles.dropdown} ${styles.dropdown_active}`
    : `${styles.dropdown}`;

  const toggleDropDown = (event: React.MouseEvent) => {
    if (showDropDown) {
      (event.target as HTMLButtonElement).innerHTML = "Показать детали";
      setShowDropDown(!showDropDown);
      return;
    }
    (event.target as HTMLButtonElement).innerHTML = "Свернуть детали";
    setShowDropDown(!showDropDown);
  };

  return (
    <div className={styles.content}>
      <div className={`${dropDownClass} ${dropDownClassName}`}>{children}</div>
      <div className={styles.toogle}>
        <button
          onClick={toggleDropDown}
          className={`${styles.toogle__button} ${toogleClassName}`}
        >
          Показать детали
        </button>
      </div>
    </div>
  );
};

export default DropDown;
