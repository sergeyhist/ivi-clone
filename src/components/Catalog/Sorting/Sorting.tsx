import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./Sorting.module.sass";
import { ISortingOption } from "/src/types/ISorting";
import useCloseEvents from "/src/hooks/useCloseEvents";
import SortingTitle from "./SortingTitle/SortingTitle";
import SortingOption from "./SortingOption/SortingOption";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

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
  const { t } = useTranslation("sorting");
  const router = useRouter();

  const titleRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const activeDropdown = isDropdownActive
    ? ` ${styles.sorting__dropdown_active}`
    : "";

  const titleValue =
    sortOptions.find((option) => option.slug === activeSorting)?.text || "";

  const optionClickHandler = (slug: string): void => {
    setActiveSorting(slug);
    setIsDropdownActive(false);
  };

  useCloseEvents([titleRef, dropdownRef], setIsDropdownActive);

  useEffect(() => {
    activeSorting.includes("name_") &&
      setActiveSorting(`name_${router.locale}`);
  }, [router.locale]);

  return (
    <div className="container">
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
          <div className={styles.sorting__description}>{t("desc")}</div>
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
    </div>
  );
};

export default Sorting;
