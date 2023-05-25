import { FC } from "react";
import { useTranslation } from "next-i18next";
import { TfiClose } from "react-icons/tfi";
import styles from "./ResetButton.module.sass";

interface ResetButtonProps {
  clickCallback: () => void;
}

const ResetButton: FC<ResetButtonProps> = ({ clickCallback }) => {
  const { t } = useTranslation("filters");

  return (
    <button
      data-testid="reset-all-button"
      onClick={clickCallback}
      className={styles.reset + " unselectable"}
    >
      <span className={styles.reset__icon}>
        <TfiClose size={16} />
      </span>
      <span className={styles.reset__text}>{t("reset")}</span>
    </button>
  );
};

export default ResetButton;
