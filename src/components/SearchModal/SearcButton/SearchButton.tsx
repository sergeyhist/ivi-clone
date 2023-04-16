import styles from "./SearchButton.module.sass";
import { FC } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import { ISearchStates } from "../SearchModal";

interface SearchButtonProps {
  searchQuery: string;
  searchStates: ISearchStates;
  clickCallback: () => void;
}

const SearchButton: FC<SearchButtonProps> = ({
  searchQuery,
  searchStates,
  clickCallback,
}) => {
  const buttonHoverClassName = searchStates.buttonHover
    ? ` ${styles.btn_hover}`
    : "";
  const buttonActiveClassName =
    searchQuery.length > 0 || searchStates.buttonActive
      ? ` ${styles.btn_active}`
      : "";

  return (
    <button
      onClick={() => {
        if (searchQuery.length > 0) {
          clickCallback();
        }
      }}
      className={styles.btn + buttonHoverClassName + buttonActiveClassName}
    >
      {searchQuery.length > 0 ? <IoClose size={25} /> : <IoSearch size={20} />}
    </button>
  );
};

export default SearchButton;
