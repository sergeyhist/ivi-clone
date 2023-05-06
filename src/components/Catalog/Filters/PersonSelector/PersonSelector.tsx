import { FC, forwardRef, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "./PersonSelector.module.sass";
import { IPerson } from "/src/types/IPerson";
import { useDebouncedCallback } from "use-debounce";
import PersonList from "./PersonList/PersonList";
import { CSSTransition } from "react-transition-group";

interface PersonSelectorProps {
  type: string;
  list: IPerson[];
  getFilter: (filter: string) => void;
}

const PersonSelector: FC<PersonSelectorProps> = ({ type, list, getFilter }) => {
  const { t } = useTranslation("filters");

  const [results, setResults] = useState<IPerson[]>([]);
  const dropdownRef = useRef<HTMLUListElement>(null);

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
      <input
        className={styles.selector__input}
        onChange={(e) => {
          searchHandler(e.target.value);
        }}
        type="text"
        placeholder={t(`person.${type}`) || ""}
      />
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
        <PersonList ref={dropdownRef} items={results} getPerson={(result) => {console.log(result)}}/>
      </CSSTransition>
    </div>
  );
};

export default PersonSelector;
