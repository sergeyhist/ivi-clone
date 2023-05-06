import { FC, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "./RangeSelector.module.sass";
import { useDebouncedCallback } from "use-debounce";

interface RangeSelectorProps {
  title: string;
  max: number;
  step: number;
  filter: string;
  getFilter: (filter: string) => void;
}

const RangeSelector: FC<RangeSelectorProps> = ({
  title,
  max,
  step,
  filter,
  getFilter,
}) => {
  const { t } = useTranslation("filters");

  const debouncedGetFilter = useDebouncedCallback((value: string) => {
    getFilter(value);
  }, 200);

  const [rangeValue, setRangeValue] = useState("");

  useEffect(() => {
    filter.length === 0 && setRangeValue("0");
  }, [filter, setRangeValue]);

  return (
    <div className={styles.selector + " unselectable"}>
      <span className={styles.selector__title}>{title}</span>
      <span className={styles.selector__value}>
        {t("from")}
        <span>{` ${rangeValue}`}</span>
      </span>
      <input
        className={styles.selector__input}
        type="range"
        value={rangeValue}
        onChange={(e) => {
          setRangeValue(e.target.value);
          debouncedGetFilter(e.target.value);
        }}
        max={max}
        step={step}
      />
    </div>
  );
};

export default RangeSelector;
