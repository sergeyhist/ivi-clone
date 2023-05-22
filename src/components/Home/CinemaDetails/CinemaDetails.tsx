import { FC } from "react";
import styles from "./CinemaDetails.module.sass";
import TextDropDown from "/src/UI/TextDropDown/TextDropDown";
import CinemaDetailsList from "./CinemaDetailsList/CinemaDetailsList";
import CinemaDetailsParagraphs from "./CinemaDetailsParagraphs/CinemaDetailsParagraphs";
import { useTranslation } from "next-i18next";
import Container from "/src/UI/Container/Container";

const CinemaDetails: FC = () => {
  const { t } = useTranslation("home");
  return (
    <section data-testid="cinema-details" className={styles.section}>
      <Container>
        <div className={styles.section__container}>
          <h2 className={styles.section__title}>{t("details.title")}</h2>
          <TextDropDown
            dropDownClassName={styles.dropdown}
            toggleTitles={{
              defaultTitle: t("details.toggle.default"),
              activeTitle: t("details.toggle.active"),
            }}
            toggleClassName={styles.dropdown__toggle}
          >
            <CinemaDetailsParagraphs />
            <CinemaDetailsList />
            <p className={styles.dropdown__paragraph}>{t("details.promo")}</p>
          </TextDropDown>
        </div>
      </Container>
    </section>
  );
};

export default CinemaDetails;
