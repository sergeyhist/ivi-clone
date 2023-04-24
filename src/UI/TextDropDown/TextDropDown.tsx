import { FC, useState } from "react";
import styles from "./TextDropDown.module.sass";

interface IToogleTitles {
  defaultTitle: string;
  activeTitle: string;
}

interface DropDownProps {
  children: React.ReactNode;
  dropDownClassName?: string;
  toogleClassName?: string;
  toogleTitles?: IToogleTitles;
}

const TextDropDown: FC<DropDownProps> = ({
  children,
  dropDownClassName = "",
  toogleClassName = "",
  toogleTitles = {
    defaultTitle: "Показать детали",
    activeTitle: "Свернуть детали",
  },
}) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const dropDownClass = showDropDown
    ? `${styles.dropdown} ${styles.dropdown_active}`
    : `${styles.dropdown}`;

  const toggleDropDown = (event: React.MouseEvent) => {
    if (showDropDown) {
      (event.target as HTMLButtonElement).textContent =
        toogleTitles.defaultTitle;
      setShowDropDown(!showDropDown);
      return;
    }
    (event.target as HTMLButtonElement).textContent = toogleTitles.activeTitle;
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
          {toogleTitles.defaultTitle}
        </button>
      </div>
    </div>
  );
};

export default TextDropDown;
