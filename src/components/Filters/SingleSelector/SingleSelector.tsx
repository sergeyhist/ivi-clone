import { FC, useRef, useState } from "react";
import FilterTitle from "../FilterTitle/FilterTitle";
import ListItem from "./ListItem/ListItem";
import styles from "./SingleSelector.module.sass";
import useCloseEvents from "/src/hooks/useCloseEvents";
import { IFilter } from "/src/types/IFilter";

interface SingleSelectorProps {
  title: string;
  items: IFilter[];
  activeFilter: IFilter;
  getFilter: (filter: IFilter) => void;
}

const SingleSelector: FC<SingleSelectorProps> = ({
  title,
  items,
  activeFilter,
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
          activeFilters={activeFilter.slug !== 'all' ? [activeFilter] : undefined}
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
              slug={item.slug}
              text={item.text}
              isActive={activeFilter.slug === item.slug}
              clickCallback={() => getFilter(item)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleSelector;
