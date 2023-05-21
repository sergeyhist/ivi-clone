import { FC, ReactNode, useState, useRef, useEffect, Children } from "react";
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
  textHeight?: number;
}

const TextDropDown: FC<DropDownProps> = ({
  children,
  dropDownClassName = "",
  toggleClassName = "",
  toggleTitles = {
    defaultTitle: "Показать детали",
    activeTitle: "Свернуть детали",
  },
  textHeight,
}) => {
  const dropDown = useRef<HTMLDivElement>(null);
  const [showDropDown, setShowDropDown] = useState(false);
  const [toggle, setToggle] = useState(false);
  const dropDownClass = showDropDown
    ? `${styles.dropdown} ${styles.dropdown_active}`
    : `${styles.dropdown}`;
  const dropDownContent = showDropDown
    ? toggleTitles.activeTitle
    : toggleTitles.defaultTitle;

  const toggleDropDown = (): void => {
    setShowDropDown(!showDropDown);
  };

  useEffect(() => {
    if (Children.count(children) > 1) {
      setToggle(true);
      return;
    }
    if (textHeight && textHeight > 100) {
      setToggle(true);
      return;
    }
    setToggle(false);
  }, [children, textHeight]);

  return (
    <div className={styles.content}>
      <div
        data-testid="text-dropdown"
        ref={dropDown}
        className={`${dropDownClass} ${dropDownClassName}`}
      >
        {children}
      </div>
      <div className={styles.toggle}>
        {toggle && (
          <button
            data-testid="toggle-dropdown"
            type="button"
            onClick={toggleDropDown}
            className={`${styles.toggle__button} ${toggleClassName}`}
          >
            {dropDownContent}
          </button>
        )}
      </div>
    </div>
  );
};

export default TextDropDown;
