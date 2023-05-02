import { FC } from "react";
import { useTranslation } from "next-i18next";
import styles from "./RangeSelector.module.sass";
import { IFilter } from "/src/types/IFilter";

interface RangeSelectorProps {
  title: string;
  max: number;
  step: number;
  activeFilter: IFilter;
  getFilter: (filter: string) => void;
}

const RangeSelector: FC<RangeSelectorProps> = ({
  title,
  max,
  step,
  activeFilter,
  getFilter,
}) => {
  const { t } = useTranslation("filters");

  return (
    <div className={styles.selector + " unselectable"}>
      <span className={styles.selector__title}>{title}</span>
      <span className={styles.selector__value}>
        {t("from")}
        <span>{` ${activeFilter.slug}`}</span>
      </span>
      <input
        className={styles.selector__input}
        type="range"
        value={activeFilter.slug}
        onChange={(e) => getFilter(e.target.value)}
        max={max}
        step={step}
      />
    </div>
  );
};

export default RangeSelector;
