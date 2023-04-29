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
      <div className="container">
        <div className={styles.section__container}>
          <h2 className={styles.section__title}>{t("home.details.title")}</h2>
          <TextDropDown
            dropDownClassName={styles.dropdown}
            toggleTitles={{
              defaultTitle: t("home.details.toggle.default"),
              activeTitle: t("home.details.toggle.active"),
            }}
            toggleClassName={styles.dropdown__toggle}
          >
            <CinemaDetailsParagraphs />
            <CinemaDetailsList />
            <p className={styles.dropdown__paragraph}>
              {t("home.details.promo")}
            </p>
          </TextDropDown>
        </div>
      </div>
    </section>
  );
};

export default CinemaDetails;
