import { FC, useEffect, useRef, useState } from "react";
import styles from "./Sorting.module.sass";
import useCloseEvents from "/src/hooks/useCloseEvents";
import SortingTitle from "./SortingTitle/SortingTitle";
import SortingOption from "./SortingOption/SortingOption";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "/src/hooks/redux";
import { setSortingMethod } from "/src/store/slices/filtersSlice";
import { getSortOptions } from "./Sorting.utils";

const Sorting: FC = () => {
  const { t } = useTranslation("sorting");
  const router = useRouter();

  const sortOptions = getSortOptions(router);

  const { sortingMethod } = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  const titleRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const activeDropdown = isDropdownActive
    ? ` ${styles.sorting__dropdown_active}`
    : "";

  const titleValue =
    sortOptions.find((option) => option.slug === sortingMethod)?.text || "";

  const optionClickHandler = (slug: string): void => {
    dispatch(setSortingMethod(slug));
    setIsDropdownActive(false);
  };

  // useCloseEvents([titleRef, dropdownRef], () => setIsDropdownActive(false));

  useEffect(() => {
    sortingMethod.includes("name_") &&
      dispatch(setSortingMethod(`name_${router.locale as string}`));
  }, [dispatch, router.locale, sortingMethod]);

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
        <div className={styles.sorting__description}>{t("desc")}</div>
        {sortOptions.map((option, i) => (
          <SortingOption
            key={i}
            isActive={sortingMethod === option.slug}
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
