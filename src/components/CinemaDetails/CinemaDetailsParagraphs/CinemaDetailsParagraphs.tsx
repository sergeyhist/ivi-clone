import { FC } from "react";
import styles from "../CinemaDetails.module.sass";
import { useTranslation } from "react-i18next";
import { paragraphs } from "../CinemaDetails.utils";

const CinemaDetailsParagraphs: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={styles.dropdown__paragraph}>
          {t(paragraph)}
        </p>
      ))}
    </>
  );
};

export default CinemaDetailsParagraphs;
