import { Dispatch, FC, SetStateAction } from "react";
import styles from "./SearchString.module.sass";
import SearchInput from "../SearchInput/SearchInput";
import { ISearchStates } from "../SearchModal";
import SearchPlaceholder from "../SearchPlaceholder/SearchPlaceholder";
import SearchButton from "../SearcButton/SearchButton";

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

  return (
    <div
      onMouseOver={() => {
        !searchStates.stringActive &&
          setSearchStates({ ...searchStates, buttonHover: true });
      }}
      onMouseOut={() => {
        !searchStates.stringActive &&
          setSearchStates({ ...searchStates, buttonHover: false });
      }}
      onClick={() => {
        setSearchStates({
          ...searchStates,
          stringActive: true,
          inputActive: true,
        });
      }}
      className={styles.string + stringActiveClassName}
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
