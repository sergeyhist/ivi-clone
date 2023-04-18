import { FC, useState } from "react";
import styles from "./CinemaDetails.module.sass";
import DropDown from "./DropDown/DropDown";

const IviOnlineCinema: FC = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const dropDownClassName = showDropDown ? `${styles.dropdown} ${styles.dropdown_active}` : `${styles.dropdown}`;

  const toggleDropDown = (event: React.MouseEvent) => {
    if (showDropDown) {
      (event.target as HTMLButtonElement).innerHTML = "Развернуть";
      setShowDropDown(!showDropDown);
      return;
    }
    (event.target as HTMLButtonElement).innerHTML = "Свернуть";
    setShowDropDown(!showDropDown);
  };

  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <h2 className={styles.section__title}>
          Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда приносят настоящее удовольствие
        </h2>
        <DropDown className={dropDownClassName} />
        <button onClick={toggleDropDown} className={styles.button_toggle}>
          Развернуть
        </button>
      </div>
    </section>
  );
};

export default IviOnlineCinema;
