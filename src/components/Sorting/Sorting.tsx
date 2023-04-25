import { Dispatch, FC, SetStateAction, useRef, useState } from "react";
import styles from "./Sorting.module.sass";
import { ISortingOption } from "/src/types/ISorting";
import useCloseEvents from "/src/hooks/useCloseEvents";
import SortingTitle from "./SortingTitle/SortingTitle";
import SortingOption from "./SortingOption/SortingOption";
import { useTranslation } from "react-i18next";

interface SortingProps {
  activeSorting: string;
  setActiveSorting: Dispatch<SetStateAction<string>>;
  sortOptions: ISortingOption[];
}

const Sorting: FC<SortingProps> = ({
  activeSorting,
  setActiveSorting,
  sortOptions,
}) => {
  const { t } = useTranslation();

  const titleRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const activeDropdown = isDropdownActive
    ? ` ${styles.sorting__dropdown_active}`
    : "";

  const titleValue =
    sortOptions.find((option) => option.slug === activeSorting)?.text || "";

  const optionClickHandler = (slug: string) => {
    setActiveSorting(slug);
    setIsDropdownActive(false);
  };

  useCloseEvents([titleRef, dropdownRef], setIsDropdownActive);

  return (
    <div className={styles.sorting + " unselectable"}>
      <div ref={titleRef}>
        <SortingTitle
          value={titleValue}
          isDropdownActive={isDropdownActive}
          setIsDropdownActive={setIsDropdownActive}
        />
      </div>
      <div
        ref={dropdownRef}
        className={styles.sorting__dropdown + activeDropdown}
      >
        <div className={styles.sorting__description}>{t("sorting.desc")}</div>
        {sortOptions.map((option, i) => (
          <SortingOption
            key={i}
            isActive={activeSorting === option.slug}
            clickCallback={() => optionClickHandler(option.slug)}
          >
            {option.text}
          </SortingOption>
        ))}
      </div>
    </div>
  );
};

export default Sorting;
