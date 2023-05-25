import { FC, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "./RangeSelector.module.sass";
import { useDebouncedCallback } from "use-debounce";
import { useRouter } from "next/router";
import { setQueryParams } from "/src/utils/query";
import { changeHandler } from "/src/utils/filters/changeHandler";
import { IFilterType } from "/src/types/IFilter";

interface RangeSelectorProps {
  title: string;
  max: number;
  step: number;
  filter: string;
  filterType: IFilterType;
}

const RangeSelector: FC<RangeSelectorProps> = ({
  title,
  max,
  step,
  filter,
  filterType,
}) => {
  const { t } = useTranslation("filters");
  const router = useRouter();

  const debouncedGetFilter = useDebouncedCallback((value: string) => {
    setQueryParams(router, {
      [filterType]: changeHandler(filter, value, true),
    });
  }, 300);

  const [rangeValue, setRangeValue] = useState<string>("0");

  useEffect(() => {
    filter.length > 0 ? setRangeValue(filter) : setRangeValue("0");
  }, [filter, filterType, setRangeValue]);

  return (
    <div
      data-testid="range-selector"
      className={styles.selector + " unselectable"}
    >
      <span className={styles.selector__title}>{t(title)}</span>
      <span className={styles.selector__value}>
        {t("from")}
        <span>{` ${rangeValue}`}</span>
      </span>
      <input
        data-testid="range-input"
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
