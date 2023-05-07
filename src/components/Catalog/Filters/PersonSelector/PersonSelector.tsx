import { FC, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "./PersonSelector.module.sass";
import { IPerson } from "/src/types/IPerson";
import { useDebouncedCallback } from "use-debounce";
import PersonList from "./PersonList/PersonList";
import { CSSTransition } from "react-transition-group";
import { IoClose } from "react-icons/io5";

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
  const dropdownRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const searchHandler = useDebouncedCallback((input: string) => {
    if (input.includes(" ")) {
      setResults(
        list.filter((element) =>
          input.split(" ").reduce((result, text) => {
            return text.length > 1 &&
              (element.first_name_en
                .toLowerCase()
                .includes(text.toLowerCase()) ||
                element.first_name_ru
                  .toLowerCase()
                  .includes(text.toLowerCase()) ||
                element.last_name_ru
                  .toLowerCase()
                  .includes(text.toLowerCase()) ||
                element.last_name_ru.toLowerCase().includes(text.toLowerCase()))
              ? (result = true)
              : result;
          }, false)
        )
      );
    } else {
      setResults(
        list.filter(
          (element) =>
            input.length > 1 &&
            (element.first_name_en
              .toLowerCase()
              .includes(input.toLowerCase()) ||
              element.first_name_ru
                .toLowerCase()
                .includes(input.toLowerCase()) ||
              element.last_name_ru
                .toLowerCase()
                .includes(input.toLowerCase()) ||
              element.last_name_ru.toLowerCase().includes(input.toLowerCase()))
        )
      );
    }
  }, 300);

  return (
    <div className={styles.selector}>
      <div className={styles.selector__input}>
        <input
          ref={inputRef}
          onChange={(e) => {
            searchHandler(e.target.value);
          }}
          type="text"
          placeholder={t(`person.${type}`) || ""}
        />
        <button
          onClick={() => {
            inputRef.current && (inputRef.current.value = "");
            setResults([]);
            getFilter("");
          }}
          className={styles.selector__reset}
        >
          <IoClose size={24} />
        </button>
      </div>
      <CSSTransition
        in={results.length > 0}
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
          ref={dropdownRef}
          items={results}
          getPerson={(result) => {
            const resultSlug = result.replace(/ /g, "_").toLowerCase();

            if (filter !== resultSlug) {
              inputRef.current && (inputRef.current.value = result);
              getFilter(resultSlug);
              setResults([]);
            }
          }}
        />
      </CSSTransition>
    </div>
  );
};

export default PersonSelector;
