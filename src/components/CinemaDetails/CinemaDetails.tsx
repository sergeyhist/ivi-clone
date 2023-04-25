import { FC } from "react";
import styles from "./CinemaDetails.module.sass";
import TextDropDown from "/src/UI/TextDropDown/TextDropDown";
import CinemaDetailsList from "./CinemaDetailsList/CinemaDetailsList";
import CinemaDetailsParagraphs from "./CinemaDetailsParagraphs/CinemaDetailsParagraphs";
import { useTranslation } from "react-i18next";

const CinemaDetails: FC = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <h2 className={styles.section__title}>{t("details.title")}</h2>
        <TextDropDown
          dropDownClassName={styles.dropdown}
          toogleTitles={{
            defaultTitle: t("details.toggle.default"),
            activeTitle: t("details.toggle.active"),
          }}
          toogleClassName={styles.dropdown__toggle}
        >
          <CinemaDetailsParagraphs />
          <CinemaDetailsList />
          <p className={styles.dropdown__paragraph}>{t("details.promo")}</p>
        </TextDropDown>
      </div>
    </section>
  );
};

export default CinemaDetails;
