import { FC, useRef, useState } from "react";
import styles from "./MultiSelector.module.sass";
import ListItem from "./ListItem/ListItem";
import { IFilterType } from "/src/types/IFilter";
import FilterTitle from "../FilterTitle/FilterTitle";
import FilterSlider from "./FilterSlider/FilterSlider";
import useCloseEvents from "/src/hooks/useCloseEvents";
import { isFilterActive } from "/src/utils/filters/isFilterActive";
import { useTranslation } from "next-i18next";
import { setQueryParams } from "/src/utils/query";
import { changeHandler } from "/src/utils/filters/changeHandler";
import { useRouter } from "next/router";

interface MultiSelectorProps {
  title: string;
  items: string[];
  filters: string[];
  filtersType: IFilterType;
  dropdownPosition?: "center" | "left" | "right";
}

const MultiSelector: FC<MultiSelectorProps> = ({
  title,
  items,
  filters,
  filtersType,
  dropdownPosition = "left",
}) => {
  const { t } = useTranslation(filtersType);
  const router = useRouter();

  const titleRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const clickHandler = (slug: string): void => {
    setQueryParams(router, {
      [filtersType]: changeHandler(filters, slug),
    });
  };

  const activeDropdown = isDropdownActive
    ? ` ${styles.filter__dropdown_active}`
    : "";

  useCloseEvents([titleRef, dropdownRef], () => setIsDropdownActive(false));

  return (
    <div
      data-testid="multi-selector"
      className={styles.filter + " unselectable"}
    >
      <div ref={titleRef}>
        <FilterTitle
          text={t(`filters:${title}`)}
          isActive={isDropdownActive}
          clickCallback={() => setIsDropdownActive((curr) => !curr)}
          filters={filters}
          filtersType={filtersType}
        />
      </div>
      <div
        data-testid="multi-selector-dropdown"
        ref={dropdownRef}
        className={
          styles.filter__dropdown +
          activeDropdown +
          ` ${styles[`filter__dropdown_${dropdownPosition}`]}`
        }
      >
        <FilterSlider
          items={items.slice(0, 8)}
          filters={filters}
          filtersType={filtersType}
          clickCallback={(result) => {
            clickHandler(result);
          }}
        />
        <ul className={styles.filter__list}>
          {items.map((item, i) => (
            <ListItem
              key={i}
              text={t(item)}
              isActive={isFilterActive(filters, item)}
              clickCallback={() => {
                clickHandler(item);
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MultiSelector;
