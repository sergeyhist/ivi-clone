import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "./PersonSelector.module.sass";
import { IPerson } from "/src/types/IPerson";
import { useDebouncedCallback } from "use-debounce";
import PersonList from "./PersonList/PersonList";
import { CSSTransition } from "react-transition-group";
import { IoClose } from "react-icons/io5";
import { getPersonNameBySlug, getPersons } from "./PersonSelector.utils";
import useCloseEvents from "/src/hooks/useCloseEvents";
import { useRouter } from "next/router";
import { setQueryParams } from "/src/utils/query";
import { changeHandler } from "/src/utils/filters/changeHandler";
import { IFilterType } from "/src/types/IFilter";

interface PersonSelectorProps {
  type: IFilterType;
  list: IPerson[];
  filter: string;
}

const PersonSelector: FC<PersonSelectorProps> = ({ type, list, filter }) => {
  const { t } = useTranslation("filters");
  const router = useRouter();
  const { locale } = router;

  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState<IPerson[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const dropdownRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  const debouncedSearch = useDebouncedCallback((query: string) => {
    setResults(getPersons(list, query));
    setIsLoading(false);
  }, 500);

  const getFilter = (slug: string): void => {
    setQueryParams(router, {
      [type]: changeHandler(filter, slug, true),
    });
  };

  const getPerson = (result: string): void => {
    getFilter(result);
    setIsDropdownActive(false);
  };

  const resetHandler = (): void => {
    if (inputValue) {
      setIsDropdownActive(false);
      setInputValue("");
    }
    filter.length > 0 && getFilter("");
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
    e.target.value.length > 1 && setIsLoading(true);
    setIsDropdownActive(e.target.value.length > 1);
    debouncedSearch(e.target.value);
  };

  useEffect(() => {
    filter.length > 0
      ? setInputValue(getPersonNameBySlug(list, filter, locale || "ru"))
      : setInputValue("");
  }, [filter, list, locale]);

  useCloseEvents([dropdownRef, inputRef], () => setIsDropdownActive(false));

  return (
    <div data-testid="person-selector" className={styles.selector}>
      <div ref={inputRef} className={styles.selector__input}>
        <input
          data-testid="selector-input"
          value={inputValue}
          onChange={inputChangeHandler}
          type="text"
          placeholder={String(t(`person.${type}`))}
        />
        <button
          data-testid="reset-button"
          onClick={resetHandler}
          className={styles.selector__reset}
        >
          <IoClose size={24} />
        </button>
      </div>
      <CSSTransition
        in={isDropdownActive}
        nodeRef={dropdownRef}
        unmountOnExit
        timeout={200}
        classNames={{
          enter: styles["dropdown-enter"],
          enterActive: styles["dropdown-enter-active"],
          exit: styles["dropdown-exit"],
          exitActive: styles["dropdown-exit-active"],
        }}
      >
        <PersonList
          type={type}
          isLoading={isLoading}
          items={results}
          filter={filter}
          getPerson={getPerson}
          ref={dropdownRef}
        />
      </CSSTransition>
    </div>
  );
};

export default PersonSelector;
