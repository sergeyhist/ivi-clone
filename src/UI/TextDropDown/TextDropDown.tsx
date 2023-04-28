import { FC, ReactNode, useState, MouseEvent } from "react";
import styles from "./TextDropDown.module.sass";

interface IToggleTitles {
  defaultTitle: string;
  activeTitle: string;
}

interface DropDownProps {
  children: ReactNode;
  dropDownClassName?: string;
  toggleClassName?: string;
  toggleTitles?: IToggleTitles;
}

const TextDropDown: FC<DropDownProps> = ({
  children,
  dropDownClassName = "",
  toggleClassName = "",
  toggleTitles = {
    defaultTitle: "Показать детали",
    activeTitle: "Свернуть детали",
  },
}) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const dropDownClass = showDropDown
    ? `${styles.dropdown} ${styles.dropdown_active}`
    : `${styles.dropdown}`;

  const toggleDropDown = (event: MouseEvent): void => {
    if (showDropDown) {
      (event.target as HTMLButtonElement).textContent =
        toggleTitles.defaultTitle;
      setShowDropDown(!showDropDown);
      return;
    }
    (event.target as HTMLButtonElement).textContent = toggleTitles.activeTitle;
    setShowDropDown(!showDropDown);
  };

  return (
    <div className={styles.content}>
      <div className={`${dropDownClass} ${dropDownClassName}`}>{children}</div>
      <div className={styles.toggle}>
        <button
          onClick={toggleDropDown}
          className={`${styles.toggle__button} ${toggleClassName}`}
        >
          {toggleTitles.defaultTitle}
        </button>
      </div>
    </div>
  );
};

export default TextDropDown;
