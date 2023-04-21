import { FC, useState } from "react";
import styles from "./DropDown.module.sass";
import Description from "./Description/Description";
import Options from "./Options/Options";

const DropDown: FC = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const dropDownClassName = showDropDown ? `${styles.dropdown} ${styles.dropdown_active}` : `${styles.dropdown}`;

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
    <>
      <div className={`${dropDownClassName}`}>
        <Description />
        <Options />
      </div>
      <div className={styles.toogle}>
        <button onClick={toggleDropDown} className={styles.toogle__button}>
          Свернуть детали
        </button>
      </div>
    </>
  );
};

export default DropDown;
