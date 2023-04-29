import { FC, useRef, useState } from "react";
import styles from "./MultiSelector.module.sass";
import ListItem from "./ListItem/ListItem";
import { IFilter, IFilterSlide } from "/src/types/IFilter";
import FilterTitle from "../FilterTitle/FilterTitle";
import FilterSlider from "./FilterSlider/FilterSlider";
import useCloseEvents from "/src/hooks/useCloseEvents";

interface MultiSelectorProps {
  title: string;
  items: IFilter[];
  sliderItems: IFilterSlide[];
  activeFilters: IFilter[];
  getFilters: (filters: IFilter[]) => void;
  dropdownPosition: "center" | "left" | "right";
}

const MultiSelector: FC<MultiSelectorProps> = ({
  title,
  items,
  sliderItems,
  activeFilters,
  getFilters,
  dropdownPosition,
}) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const clickHandler = (item: IFilter): void => {
    if (activeFilters.some((filter) => filter.slug === item.slug)) {
      getFilters(activeFilters.filter((filter) => filter.slug !== item.slug));
    } else {
      getFilters([...activeFilters, { slug: item.slug, text: item.text }]);
    }
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
          activeFilters={activeFilters}
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
          items={sliderItems}
          activeFilters={activeFilters}
          clickCallback={(result) => {
            clickHandler(result);
          }}
        />
        <ul className={styles.filter__list}>
          {items.map((item, i) => (
            <ListItem
              key={i}
              text={item.text}
              isActive={activeFilters.some(
                (filter) => filter.slug === item.slug
              )}
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
