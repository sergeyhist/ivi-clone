import { FC } from "react";
import styles from "./CinemaDetails.module.sass";
import TextDropDown from "/src/UI/TextDropDown/TextDropDown";
import { paragrafs, list, bottomParagraf } from "./DropDown/DropDown.utils";

const CinemaDetails: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <h2 className={styles.section__title}>
          Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда приносят
          настоящее удовольствие
        </h2>
        <TextDropDown
          dropDownClassName={styles.dropdown}
          toogleTitles={{ defaultTitle: "Развернуть", activeTitle: "Свернуть" }}
          toogleClassName={styles.dropdown__toggle}
        >
          {paragrafs.map((paragraf, index) => (
            <p key={index} className={styles.dropdown__paragraf}>
              {paragraf}
            </p>
          ))}
          <ul className={styles.list}>
            {list.map((item, index) => (
              <li key={index} className={styles.list__item}>
                {item}
              </li>
            ))}
          </ul>

          <p className={styles.dropdown__paragraf}>{bottomParagraf}</p>
        </TextDropDown>
      </div>
    </section>
  );
};

export default CinemaDetails;
