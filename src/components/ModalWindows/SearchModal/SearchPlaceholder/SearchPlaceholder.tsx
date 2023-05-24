import { FC } from "react";
import { ISearchStates } from "../SearchModal";
import styles from "./SearchPlaceholder.module.sass";

interface SearchPlaceholderProps {
  searchStates: ISearchStates;
}

const SearchPlaceholder: FC<SearchPlaceholderProps> = ({ searchStates }) => {
  const placeholderActiveClassName = searchStates.stringActive
    ? ` ${styles.placeholder_active}`
    : "";

  return (
    <div className={styles.placeholder + placeholderActiveClassName} data-testid="search-placeholder">
      Фильмы, персоны, жанры
    </div>
  );
};

export default SearchPlaceholder;
