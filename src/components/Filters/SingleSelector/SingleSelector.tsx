import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import FilterTitle from "../FilterTitle/FilterTitle";
import ListItem from "./ListItem/ListItem";
import styles from "./SingleSelector.module.sass";
import { IFilter } from "/src/types/IFilter";

interface SingleSelectorProps {
  title: string;
  items: IFilter[];
  activeFilter: string;
  setActiveFilter: Dispatch<SetStateAction<string>>;
}

const SingleSelector: FC<SingleSelectorProps> = ({
  title,
  items,
  activeFilter,
  setActiveFilter,
}) => {
  const { t } = useTranslation();

  const titleRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const activeDropdown = isDropdownActive
    ? ` ${styles.selector__dropdown_active}`
    : "";

  const activeFilterText = items.reduce(
    (result: string[], item) =>
      activeFilter !== "all" && item.slug === activeFilter
        ? [...result, item.text ? t(item.text) : item.slug]
        : result,
    []
  );

  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      !dropdownRef.current?.contains(e.target as Node) &&
        !titleRef.current?.contains(e.target as Node) &&
        setIsDropdownActive(false);
    };

    const keydownHandler = (e: KeyboardEvent) => {
      e.key === "Escape" && setIsDropdownActive(false);
    };

    document.addEventListener("mousedown", clickHandler);
    document.addEventListener("keydown", keydownHandler);

    return () => {
      document.removeEventListener("mousedown", clickHandler);
      document.removeEventListener("keydown", keydownHandler);
    };
  }, [setIsDropdownActive]);

  return (
    <div className={styles.selector + " unselectable"}>
      <div ref={titleRef}>
        <FilterTitle
          text={title}
          isDropdownActive={isDropdownActive}
          setIsDropdownActive={setIsDropdownActive}
          activeFilters={activeFilterText}
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
              isActive={activeFilter === item.slug}
              clickCallback={() => setActiveFilter(item.slug)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleSelector;
