import { Dispatch, FC, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import styles from "./PersonSelector.module.sass";

interface PersonSelectorProps {
  type: string;
  activeFilter: string;
  setActiveFilter: Dispatch<SetStateAction<string>>;
}

const PersonSelector: FC<PersonSelectorProps> = ({
  type,
  activeFilter,
  setActiveFilter,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.selector}>
      <input
        className={styles.selector__input}
        value={activeFilter}
        onChange={(e) => setActiveFilter(e.target.value)}
        type="text"
        placeholder={t(`filters.person.${type}`) || ""}
      />
      <div className={styles.selector__dropdown}></div>
    </div>
  );
};

export default PersonSelector;
