import { Dispatch, FC, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import styles from "./RangeSelector.module.sass";

interface RangeSelectorProps {
  title: string;
  max: number;
  step: number;
  activeFilter: string;
  setActiveFilter: Dispatch<SetStateAction<string>>;
}

const RangeSelector: FC<RangeSelectorProps> = ({
  title,
  max,
  step,
  activeFilter,
  setActiveFilter,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.selector + ' unselectable'}>
      <span className={styles.selector__title}>{title}</span>
      <span className={styles.selector__value}>
        {t("filters.from")}
        <span>{` ${activeFilter}`}</span>
      </span>
      <input
        className={styles.selector__input}
        type="range"
        value={activeFilter}
        onChange={(e) => setActiveFilter(e.target.value)}
        max={max}
        step={step}
      />
    </div>
  );
};

export default RangeSelector;
