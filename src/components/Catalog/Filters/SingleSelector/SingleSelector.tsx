import { FC, useRef, useState } from "react";
import FilterTitle from "../FilterTitle/FilterTitle";
import ListItem from "./ListItem/ListItem";
import styles from "./SingleSelector.module.sass";
import useCloseEvents from "/src/hooks/useCloseEvents";
import { useTranslation } from "next-i18next";
import { setQueryParams } from "/src/utils/query";
import { changeHandler } from "/src/utils/filters/changeHandler";
import { useRouter } from "next/router";
import { IFilterType } from "/src/types/IFilter";

interface SingleSelectorProps {
  title: string;
  items: string[];
  filter: string;
  filterType: IFilterType;
}

const SingleSelector: FC<SingleSelectorProps> = ({
  title,
  items,
  filter,
  filterType,
}) => {
  const { t } = useTranslation(filterType);
  const router = useRouter();

  const titleRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const activeDropdown = isDropdownActive
    ? ` ${styles.selector__dropdown_active}`
    : "";

  const clickHandler = (slug: string): void => {
    setQueryParams(router, {
      [filterType]: changeHandler(filter, slug, true),
    });
  };

  useCloseEvents([titleRef, dropdownRef], () => setIsDropdownActive(false));

  return (
    <div
      data-testid="single-selector"
      className={styles.selector + " unselectable"}
    >
      <div ref={titleRef}>
        <FilterTitle
          text={t(`filters:${title}`)}
          isActive={isDropdownActive}
          clickCallback={() => setIsDropdownActive((curr) => !curr)}
          filters={filter}
          filtersType={filterType}
        />
      </div>
      <div
        data-testid="single-selector-dropdown"
        ref={dropdownRef}
        className={styles.selector__dropdown + activeDropdown}
      >
        <ul className={styles.selector__list}>
          {items.map((item, i) => (
            <ListItem
              key={i}
              slug={item}
              text={t(item)}
              isActive={filter === item || (i === 0 && filter.length === 0)}
              clickCallback={() => clickHandler(item)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleSelector;
