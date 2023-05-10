import { FC, useRef, useState } from "react";
import FilterTitle from "../FilterTitle/FilterTitle";
import ListItem from "./ListItem/ListItem";
import styles from "./SingleSelector.module.sass";
import useCloseEvents from "/src/hooks/useCloseEvents";

interface SingleSelectorProps {
  title: string;
  items: string[];
  filter: string;
  filtersType: string;
  getFilter: (filter: string) => void;
}

const SingleSelector: FC<SingleSelectorProps> = ({
  title,
  items,
  filter,
  filtersType,
  getFilter,
}) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const activeDropdown = isDropdownActive
    ? ` ${styles.selector__dropdown_active}`
    : "";

  useCloseEvents([titleRef, dropdownRef], () => setIsDropdownActive(false));

  return (
    <div className={styles.selector + " unselectable"}>
      <div ref={titleRef}>
        <FilterTitle
          text={title}
          isDropdownActive={isDropdownActive}
          setIsDropdownActive={setIsDropdownActive}
          filter={filter}
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
              isActive={filter === item || (i === 0 && filter.length === 0)}
              clickCallback={() => getFilter(item)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleSelector;
