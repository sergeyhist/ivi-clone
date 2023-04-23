import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./MultiSelector.module.sass";
import ListItem from "./ListItem/ListItem";
import { IFilter, IFilterSlide } from "/src/types/IFilter";
import FilterTitle from "../FilterTitle/FilterTitle";
import FilterSlider from "./FilterSlider/FilterSlider";
import { useTranslation } from "react-i18next";

interface MultiSelectorProps {
  title: string;
  items: IFilter[];
  sliderItems: IFilterSlide[];
  activeFilters: string[];
  setActiveFilters: Dispatch<SetStateAction<string[]>>;
  dropdownPosition: "center" | "left" | "right";
}

const MultiSelector: FC<MultiSelectorProps> = ({
  title,
  items,
  sliderItems,
  activeFilters,
  setActiveFilters,
  dropdownPosition,
}) => {
  const { t } = useTranslation();

  const titleRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const clickHandler = (slug: string) => {
    if (activeFilters.includes(slug)) {
      setActiveFilters(activeFilters.filter((el) => el !== slug));
    } else {
      setActiveFilters([...activeFilters, slug]);
    }
  };

  const activeDropdown = isDropdownActive
    ? ` ${styles.filter__dropdown_active}`
    : "";

  const activeFiltersText = items.reduce((result: string[], item) => {
    return activeFilters.includes(item.slug)
      ? [...result, t(item.text)]
      : result;
  }, []);

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
    <div className={styles.filter + " unselectable"}>
      <div ref={titleRef}>
        <FilterTitle
          text={title}
          isDropdownActive={isDropdownActive}
          setIsDropdownActive={setIsDropdownActive}
          activeFilters={activeFiltersText}
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
              isActive={activeFilters.includes(item.slug)}
              clickCallback={() => {
                clickHandler(item.slug);
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MultiSelector;
