import { FC } from "react";
import { useTranslation } from "next-i18next";
import styles from "./MoreButton.module.sass";

interface MoreButtonProps {
  clickCallback: () => void;
}

const MoreButton: FC<MoreButtonProps> = ({ clickCallback }) => {
  const { t } = useTranslation();
  return (
    <button onClick={() => clickCallback()} className={styles.button}>
      {t("common:more")}
    </button>
  );
};

export default MoreButton;
