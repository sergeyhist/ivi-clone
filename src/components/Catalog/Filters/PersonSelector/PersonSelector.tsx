import { FC } from "react";
import { useTranslation } from "next-i18next";
import styles from "./PersonSelector.module.sass";

interface PersonSelectorProps {
  type: string;
  getFilter: (filter: string) => void;
}

const PersonSelector: FC<PersonSelectorProps> = ({
  type,
  getFilter,
}) => {
  const { t } = useTranslation("filters");

  return (
    <div className={styles.selector}>
      <input
        className={styles.selector__input}
        onChange={(e) => {}}
        type="text"
        placeholder={t(`person.${type}`) || ""}
      />
      <div className={styles.selector__dropdown}></div>
    </div>
  );
};

export default PersonSelector;
