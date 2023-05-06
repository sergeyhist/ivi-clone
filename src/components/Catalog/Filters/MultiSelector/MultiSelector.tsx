import { FC, useRef, useState } from "react";
import styles from "./MultiSelector.module.sass";
import ListItem from "./ListItem/ListItem";
import { IFilters } from "/src/types/IFilter";
import FilterTitle from "../FilterTitle/FilterTitle";
import FilterSlider from "./FilterSlider/FilterSlider";
import useCloseEvents from "/src/hooks/useCloseEvents";
import { isFilterActive } from "../Filters.utils";

interface MultiSelectorProps {
  title: string;
  items: string[];
  filters: IFilters;
  filtersType: string;
  getFilter: (filter: string) => void;
  dropdownPosition: "center" | "left" | "right";
}

const MultiSelector: FC<MultiSelectorProps> = ({
  title,
  items,
  filters,
  filtersType,
  getFilter,
  dropdownPosition,
}) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const clickHandler = (slug: string): void => {
    getFilter(slug)
  };

  const activeDropdown = isDropdownActive
    ? ` ${styles.filter__dropdown_active}`
    : "";

  useCloseEvents([titleRef, dropdownRef], setIsDropdownActive);

  return (
    <div className={styles.filter + " unselectable"}>
      <div ref={titleRef}>
        <FilterTitle
          text={title}
          isDropdownActive={isDropdownActive}
          setIsDropdownActive={setIsDropdownActive}
          filter={
            !Array.isArray(filters[filtersType])
              ? (filters[filtersType] as string)
              : undefined
          }
          filters={Array.isArray(filters[filtersType]) ? filters : undefined}
          filtersType={filtersType}
        />
      </div>
      <div
        ref={dropdownRef}
        className={
          styles.filter__dropdown +
          activeDropdown +
          ` ${styles[`filter__dropdown_${dropdownPosition}`]}`
        }
      >
        <FilterSlider
          items={items.slice(0, 10)}
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
              text={`${filtersType}:${item}`}
              isActive={isFilterActive(filters[filtersType], item)}
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
