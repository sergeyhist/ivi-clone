import { FC } from "react";
import styles from "./FiltersInfo.module.sass";
import { useAppSelector } from "/src/hooks/redux";
import { getFiltersText } from "/src/utils/filters/getFiltersText";

const FiltersInfo: FC = () => {
  const { filters } = useAppSelector((state) => state.filters);
  

  return (
    <div className={styles.page__info + " container"}>
      {getFiltersText(filters)}
    </div>
  );
};

export default FiltersInfo;
