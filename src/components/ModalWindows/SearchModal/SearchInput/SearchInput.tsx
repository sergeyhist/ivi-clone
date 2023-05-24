import { ChangeEvent, FC, useEffect, useRef } from "react";
import { ISearchStates } from "../SearchModal";
import styles from "./SearchInput.module.sass";

interface SearchInputProps {
  searchQuery: string;
  searchStates: ISearchStates;
  changeCallback: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<SearchInputProps> = ({
  searchQuery,
  searchStates,
  changeCallback,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchStates.inputActive && inputRef.current?.focus();
  }, [searchStates]);

  return (
    <input
      ref={inputRef}
      value={searchQuery}
      onChange={changeCallback}
      className={styles.input}
      type="text"
      data-testid="search-input"
    />
  );
};

export default SearchInput;
