import { ChangeEvent, FC, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "./PersonSelector.module.sass";
import { IPerson } from "/src/types/IPerson";
import { useDebouncedCallback } from "use-debounce";
import PersonList from "./PersonList/PersonList";
import { CSSTransition } from "react-transition-group";
import { IoClose } from "react-icons/io5";
import { getPersons } from "./PersonSelector.utils";
import useCloseEvents from "/src/hooks/useCloseEvents";

interface PersonSelectorProps {
  type: string;
  list: IPerson[];
  filter: string;
  getFilter: (filter: string) => void;
}

const PersonSelector: FC<PersonSelectorProps> = ({
  type,
  list,
  filter,
  getFilter,
}) => {
  const { t } = useTranslation("filters");

  const [results, setResults] = useState<IPerson[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedSearch = useDebouncedCallback((query: string) => {
    setResults(getPersons(list, query));
    setIsLoading(false);
  }, 500);

  const getPerson = (result: string): void => {
    const resultSlug = result.replace(/ /g, "_").toLowerCase();

    if (filter !== resultSlug) {
      inputRef.current && (inputRef.current.value = result);
      getFilter(resultSlug);
      setResults([]);
    }
  };

  const resetHandler = (): void => {
    inputRef.current && (inputRef.current.value = "");
    setResults([]);
    getFilter("");
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    e.target.value.length > 1 && setIsLoading(true);
    debouncedSearch(e.target.value);
  };

  useCloseEvents([dropdownRef, inputRef], () => setResults([]));

  return (
    <div className={styles.selector}>
      <div className={styles.selector__input}>
        <input
          ref={inputRef}
          onChange={inputChangeHandler}
          type="text"
          placeholder={t(`person.${type}`) || ""}
        />
        <button onClick={resetHandler} className={styles.selector__reset}>
          <IoClose size={24} />
        </button>
      </div>
      <CSSTransition
        in={inputRef.current ? inputRef.current.value.length > 1 : false}
        nodeRef={dropdownRef}
        unmountOnExit
        timeout={300}
        classNames={{
          enter: styles["dropdown-enter"],
          enterActive: styles["dropdown-enter-active"],
          exit: styles["dropdown-exit"],
          exitActive: styles["dropdown-exit-active"],
        }}
      >
        <PersonList
          type={type}
          inputValue={inputRef.current?.value || ""}
          isLoading={isLoading}
          ref={dropdownRef}
          items={results}
          getPerson={getPerson}
        />
      </CSSTransition>
    </div>
  );
};

export default PersonSelector;
