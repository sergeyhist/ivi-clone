import { Dispatch, FC, SetStateAction } from "react";
import styles from "./SearchString.module.sass";
import SearchInput from "../SearchInput/SearchInput";
import { ISearchStates } from "../SearchModal";
import SearchPlaceholder from "../SearchPlaceholder/SearchPlaceholder";
import SearchButton from "../SearchButton/SearchButton";

interface SearchStringProps {
  searchQuery: string;
  searchStates: ISearchStates;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  setSearchStates: Dispatch<SetStateAction<ISearchStates>>;
}

const SearchString: FC<SearchStringProps> = ({
  searchQuery,
  searchStates,
  setSearchQuery,
  setSearchStates,
}) => {
  const stringActiveClassName = searchStates.stringActive
    ? ` ${styles.string_active}`
    : "";
  const mouseOverButtonHover = (state: boolean): void => {
    !searchStates.stringActive &&
      setSearchStates({ ...searchStates, buttonHover: state });
  };
  const setStringAndInputActive = (): void => {
    setSearchStates({
      ...searchStates,
      stringActive: true,
      inputActive: true,
    });
  };

  return (
    <div
      onMouseOver={() => {
        mouseOverButtonHover(true);
      }}
      onMouseOut={() => {
        mouseOverButtonHover(false);
      }}
      onClick={setStringAndInputActive}
      className={styles.string + stringActiveClassName}
      data-testid="search-string"
    >
      <SearchInput
        searchQuery={searchQuery}
        searchStates={searchStates}
        changeCallback={(e) => setSearchQuery(e.target.value)}
      />
      <SearchPlaceholder searchStates={searchStates} />
      <SearchButton
        searchQuery={searchQuery}
        searchStates={searchStates}
        clickCallback={() => {
          setSearchQuery("");
          setSearchStates({ ...searchStates, inputActive: true });
        }}
      />
    </div>
  );
};

export default SearchString;
