import { FC } from "react";
import styles from "./CinemaDetails.module.sass";
import TextDropDown from "/src/UI/TextDropDown/TextDropDown";
import CinemaDetailsList from "./CinemaDetailsList/CinemaDetailsList";
import CinemaDetailsParagraphs from "./CinemaDetailsParagraphs/CinemaDetailsParagraphs";
import CinemaDetailsParagraph from "./CinemaDetailsParagraph/CinemaDetailsParagraph";
import CinemaDetailsTitle from "./CinemaDetailsTitle/CinemaDetailsTitle";

const CinemaDetails: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <CinemaDetailsTitle />
        <TextDropDown
          dropDownClassName={styles.dropdown}
          toogleTitles={{ defaultTitle: "Развернуть", activeTitle: "Свернуть" }}
          toogleClassName={styles.dropdown__toggle}
        >
          <CinemaDetailsParagraphs />
          <CinemaDetailsList />
          <CinemaDetailsParagraph />
        </TextDropDown>
      </div>
    </section>
  );
};

export default CinemaDetails;
