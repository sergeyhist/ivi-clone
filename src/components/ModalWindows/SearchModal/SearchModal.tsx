import { FC, KeyboardEvent, MouseEvent, useRef, useState } from "react";
import SearchCloseButton from "./SearchCloseButton/SearchCloseButton";
import styles from "./SearchModal.module.sass";
import SearchString from "./SearchString/SearchString";
import useOverflowHidden from "/src/hooks/useOverflowHidden";
import { useAppSelector } from "/src/hooks/redux";
import useCloseEvents from "/src/hooks/useCloseEvents";
import { iviSans, iviIcons, iconFont } from "/src/utils/fonts";

interface SearchModalProps {
  closeCallback: () => void;
}

export interface ISearchStates {
  stringActive: boolean;
  buttonActive: boolean;
  buttonHover: boolean;
  inputActive: boolean;
}

const SearchModal: FC<SearchModalProps> = ({ closeCallback }) => {
  const { showSearchModal } = useAppSelector((state) => state.showModal);

  const stringRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchStates, setSearchStates] = useState<ISearchStates>({
    stringActive: true,
    buttonActive: false,
    buttonHover: true,
    inputActive: true,
  });

  const keydownHandler = (e: KeyboardEvent): void => {
    e.key === "Enter" &&
      window.open(
        `https://www.ivi.ru/?ivi_search=${encodeURIComponent(searchQuery)}`
      );
  };

  const clickHandler = (e: MouseEvent): void => {
    if (!stringRef.current?.contains(e.target as Node) && searchQuery.length === 0) {
      setSearchStates({
        ...searchStates,
        stringActive: false,
        buttonHover: false,
        inputActive: false,
      });
    }
  };

  useCloseEvents([modalRef], () => {
    closeCallback();
  });
  useOverflowHidden(showSearchModal);

  return (
    <div
      ref={modalRef}
      onKeyDown={keydownHandler}
      onClick={clickHandler}
      className={`${styles.search} ${iviSans.className} ${iviIcons.variable} ${iconFont.variable}`}
      data-testid="search-modal"
    >
      <SearchCloseButton clickCallback={closeCallback} />
      <div className={styles.search__container}>
        <h1 className={styles.search__title}>Поиск</h1>
        <div ref={stringRef}>
          <SearchString
            searchQuery={searchQuery}
            searchStates={searchStates}
            setSearchQuery={setSearchQuery}
            setSearchStates={setSearchStates}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
