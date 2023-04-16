import { FC, useRef, useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import styles from "./SearchModal.module.sass";

interface SearchModalProps {
  closeCallback: () => void;
}

const SearchModal: FC<SearchModalProps> = ({ closeCallback }) => {
  const placeholderRef = useRef<HTMLDivElement>(null);
  const stringRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [isStringActive, setIsStringActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const buttonHoverClassName = isStringActive
    ? ` ${styles.search__button_hover}`
    : "";
  const buttonActiveClassName =
    searchQuery.length > 0 ? ` ${styles.search__button_active}` : "";

  return (
    <div
      onClick={(e) => {
        if (!stringRef.current?.contains(e.target as Node)) {
          searchQuery.length === 0 && setIsStringActive(false);
          buttonRef.current?.classList.remove(styles.search__button_hover);
        }
      }}
      className={styles.search}
    >
      <button
        onClick={() => {
          closeCallback();
        }}
        className={styles.search__close}
      >
        Закрыть окно
      </button>
      <div className={styles.search__container}>
        <h1 className={styles.search__title}>Поиск</h1>
        <div
          onMouseOver={() => {
            !isStringActive &&
              buttonRef.current?.classList.add(styles.search__button_hover);
          }}
          onMouseOut={() => {
            !isStringActive &&
              buttonRef.current?.classList.remove(styles.search__button_hover);
          }}
          onClick={() => {
            setIsStringActive(true);
          }}
          ref={stringRef}
          className={
            isStringActive
              ? styles.search__string + " " + styles.search__string_active
              : styles.search__string
          }
        >
          <input
            ref={inputRef}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            className={styles.search__input}
            type="text"
          ></input>
          <div
            ref={placeholderRef}
            className={
              isStringActive
                ? styles.search__placeholder +
                  " " +
                  styles.search__placeholder_active
                : styles.search__placeholder
            }
          >
            Фильмы, персоны, жанры
          </div>
          <button
            onClick={() => {
              if (searchQuery.length > 0) {
                setSearchQuery("");
                inputRef.current?.focus();
              }
            }}
            ref={buttonRef}
            className={
              styles.search__button +
              buttonHoverClassName +
              buttonActiveClassName
            }
          >
            {searchQuery.length > 0 ? (
              <IoClose size={25} />
            ) : (
              <IoSearch size={20} />
            )}
          </button>
        </div>
        <div className={styles.search__results}></div>
      </div>
    </div>
  );
};

export default SearchModal;
