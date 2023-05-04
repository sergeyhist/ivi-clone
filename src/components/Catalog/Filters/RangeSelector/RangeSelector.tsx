import { FC, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "./RangeSelector.module.sass";
import { IFilter } from "/src/types/IFilter";
import { useDebouncedCallback } from "use-debounce";

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

  const debouncedGetFilter = useDebouncedCallback((value: string) => {
    getFilter(value);
  }, 200);

  const [rangeValue, setRangeValue] = useState("");

  useEffect(() => {
    activeFilter.slug === "0" && setRangeValue(activeFilter.slug);
  }, [activeFilter, setRangeValue]);

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
