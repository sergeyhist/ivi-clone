import { Dispatch, FC, SetStateAction } from "react";
import { useTranslation } from "next-i18next";
import styles from "./MoreButton.module.sass";

interface MoreButtonProps {
  limit: number;
  setLimit: Dispatch<SetStateAction<number>>;
}

const MoreButton: FC<MoreButtonProps> = ({ limit, setLimit }) => {
  const { t } = useTranslation();
  return (
    <button onClick={() => setLimit(limit + 14)} className={styles.button}>
      {t("common:more")}
    </button>
  );
};

export default MoreButton;
