import { FC } from "react";
import styles from "./BackButton.module.sass";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const BackButton: FC = () => {
  const { t } = useTranslation("person");
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.back();
      }}
      data-testid="back-button"
    >
      <div className={styles.button}>{t("backLink")}</div>
    </button>
  );
};

export default BackButton;
