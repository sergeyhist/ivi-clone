import { FC } from "react";
import { useTranslation } from "next-i18next";
import styles from "./PersonSelector.module.sass";
import { IFilter } from "/src/types/IFilter";

interface PersonSelectorProps {
  type: string;
  activeFilter: IFilter;
  getFilter: (filter: IFilter) => void;
}

const PersonSelector: FC<PersonSelectorProps> = ({
  type,
  activeFilter,
  getFilter,
}) => {
  const { t } = useTranslation("filters");

  return (
    <div className={styles.selector}>
      <input
        className={styles.selector__input}
        value={activeFilter.slug}
        onChange={(e) =>
          getFilter({ slug: e.target.value, text: e.target.value })
        }
        type="text"
        placeholder={t(`person.${type}`) || ""}
      />
      <div className={styles.selector__dropdown}></div>
    </div>
  );
};

export default PersonSelector;
