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
import { useRouter } from "next/router";

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
  const { query } = useRouter();

  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState<IPerson[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const dropdownRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  const debouncedSearch = useDebouncedCallback((query: string) => {
    setResults(getPersons(list, query));
    setIsLoading(false);
  }, 500);

  const getPerson = (result: string): void => {
    const resultSlug = result.replace(/ /g, "_").toLowerCase();

    if (filter !== resultSlug) {
      setInputValue(result);
      getFilter(resultSlug);
    }
  };

  const resetHandler = (): void => {
    inputValue && setInputValue("");
    inputValue && query[type] && getFilter("");
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
    e.target.value.length > 1 && setIsLoading(true);
    debouncedSearch(e.target.value);
  };

  useCloseEvents([dropdownRef, inputRef], resetHandler);

  return (
    <div className={styles.selector}>
      <div ref={inputRef} className={styles.selector__input}>
        <input
          value={inputValue}
          onChange={inputChangeHandler}
          type="text"
          placeholder={t(`person.${type}`) || ""}
        />
        <button onClick={resetHandler} className={styles.selector__reset}>
          <IoClose size={24} />
        </button>
      </div>
      <CSSTransition
        in={inputValue.length > 1}
        nodeRef={dropdownRef}
        unmountOnExit
        timeout={400}
        classNames={{
          enter: styles["dropdown-enter"],
          enterActive: styles["dropdown-enter-active"],
          exit: styles["dropdown-exit"],
          exitActive: styles["dropdown-exit-active"],
        }}
      >
        <PersonList
          type={type}
          inputValue={inputValue}
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
