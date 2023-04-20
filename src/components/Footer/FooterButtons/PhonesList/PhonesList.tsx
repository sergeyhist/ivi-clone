import Link from "next/link";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import styles from "./PhonesList.module.sass";

const PhonesList: FC = () => {
  const { t } = useTranslation();

  return (
    <ul className={styles.list}>
      <li>
        <Link className={styles.list__phone} href="tel:88002344923">
          <span className={styles.list__number}>
            {t("footer.phone.number")}
          </span>
          <span className={styles.list__description}>
            {t("footer.phone.info")}
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default PhonesList;
