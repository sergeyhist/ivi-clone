import { FC } from "react";
import styles from "../CinemaDetails.module.sass";
import { useTranslation } from "react-i18next";
import { listItems } from "../CinemaDetails.utils";

const CinemaDetailsList: FC = () => {
  const { t } = useTranslation();

  console.log(t("details.list.0"));

  return (
    <ul className={styles.list}>
      {listItems.map((item, index) => (
        <li key={index} className={styles.list__item}>
          {t(item)}
        </li>
      ))}
    </ul>
  );
};

export default CinemaDetailsList;
