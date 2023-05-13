import { FC } from "react";
import styles from "./MovieTrailer.module.sass";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import { useTranslation } from "next-i18next";

const MovieTrailer: FC = () => {
  const { t } = useTranslation("movie");

  return (
    <>
      <CustomButton className={styles.button} type="red">
        <div className={styles.button__content}>
          <p className={styles.button__title}>{t("trailer.watch")}</p>
          <p className={styles.button__subtitle}>{t("trailer.subscription")}</p>
        </div>
      </CustomButton>
      <p className={styles.trailer__text}>{t("trailer.promo")}</p>
    </>
  );
};

export default MovieTrailer;
