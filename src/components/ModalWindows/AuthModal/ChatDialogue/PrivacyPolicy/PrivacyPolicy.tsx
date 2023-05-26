import { FC } from "react";
import styles from "./PrivacyPolicy.module.sass";
import { useTranslation } from "next-i18next";

const PrivacyPolicy: FC = () => {
  const { t } = useTranslation("registration");

  return (
    <div className={styles.privacy_policy} data-testid="privacy-policy">
      <p>
        {t("privacy.firstTitle")}
        <br />
        {`${t("privacy.firstArticle")} `}
        <a
          className={styles.privacy_policy__link}
          href="https://www.ivi.ru/info/confidential"
          target="_blank"
        >
          {t("privacy.secondTitle")}
        </a>
        <br />
        {`${t("privacy.secondArticle")} `}
        <a
          className={styles.privacy_policy__link}
          href="https://www.ivi.ru/info/agreement"
          target="_blank"
        >
          {t("privacy.thirdTitle")}
        </a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
