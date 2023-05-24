import { FC } from "react";
import { useTranslation } from "next-i18next";
import styles from "./MoreButton.module.sass";

interface MoreButtonProps {
  clickCallback: () => void;
}

const MoreButton: FC<MoreButtonProps> = ({ clickCallback }) => {
  const { t } = useTranslation();
  return (
    <button
      data-testid="more-button"
      onClick={() => clickCallback()}
      className={styles.button + " container"}
    >
      {t("common:more")}
    </button>
  );
};

export default MoreButton;
