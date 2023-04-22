import { Dispatch, FC, SetStateAction, useState } from "react";
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
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const activeDropdown = isDropdownActive
    ? ` ${styles.selector__dropdown_active}`
    : "";

  return (
    <div className={styles.selector + " unselectable"}>
      <FilterTitle
        text={title}
        isDropdownActive={isDropdownActive}
        setIsDropdownActive={setIsDropdownActive}
      />
      <div className={styles.selector__dropdown + activeDropdown}>
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
