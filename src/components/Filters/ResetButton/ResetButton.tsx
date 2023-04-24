import { FC } from "react";
import { useTranslation } from "react-i18next";
import { TfiClose } from "react-icons/tfi";
import styles from "./ResetButton.module.sass";

interface ResetButtonProps {
  clickCallback: () => void;
}

const ResetButton: FC<ResetButtonProps> = ({ clickCallback }) => {
  const { t } = useTranslation();

  return (
    <button onClick={clickCallback} className={styles.reset}>
      <span className={styles.reset__icon}>
        <TfiClose size={16} />
      </span>
      <span className={styles.reset__text}>{t("filters.reset")}</span>
    </button>
  );
};

export default ResetButton;
