import { FC, useRef, useState } from "react";
import FilterTitle from "../FilterTitle/FilterTitle";
import ListItem from "./ListItem/ListItem";
import styles from "./SingleSelector.module.sass";
import useCloseEvents from "/src/hooks/useCloseEvents";
import { IFilters } from "/src/types/IFilter";

interface SingleSelectorProps {
  title: string;
  items: string[];
  filters: IFilters;
  filtersType: string;
  getFilter: (filter: string) => void;
}

const SingleSelector: FC<SingleSelectorProps> = ({
  title,
  items,
  filters,
  filtersType,
  getFilter,
}) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const activeDropdown = isDropdownActive
    ? ` ${styles.selector__dropdown_active}`
    : "";

  useCloseEvents([titleRef, dropdownRef], setIsDropdownActive);

  return (
    <div className={styles.selector + " unselectable"}>
      <div ref={titleRef}>
        <FilterTitle
          text={title}
          isDropdownActive={isDropdownActive}
          setIsDropdownActive={setIsDropdownActive}
          filters={filters}
          filtersType={filtersType}
        />
      </div>
      <div
        ref={dropdownRef}
        className={styles.selector__dropdown + activeDropdown}
      >
        <ul className={styles.selector__list}>
          {items.map((item, i) => (
            <ListItem
              key={i}
              slug={item}
              text={`${filtersType}:${item}`}
              isActive={filters[filtersType] === item}
              clickCallback={() => getFilter(item)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleSelector;
