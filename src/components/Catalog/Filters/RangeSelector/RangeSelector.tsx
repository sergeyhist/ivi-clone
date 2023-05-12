import { FC, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "./RangeSelector.module.sass";
import { useDebouncedCallback } from "use-debounce";
import { useRouter } from "next/router";

interface RangeSelectorProps {
  title: string;
  max: number;
  step: number;
  filter: string;
  filterType: string;
  getFilter: (filter: string) => void;
}

const RangeSelector: FC<RangeSelectorProps> = ({
  title,
  max,
  step,
  filter,
  filterType,
  getFilter,
}) => {
  const { t } = useTranslation("filters");
  const {query} = useRouter();

  const debouncedGetFilter = useDebouncedCallback((value: string) => {
    getFilter(value);
  }, 100);

  const [rangeValue, setRangeValue] = useState<string>("0");

  useEffect(() => {
    !query[filterType] ? setRangeValue("0") : setRangeValue(filter);
  }, [query, filter, filterType, setRangeValue])

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
