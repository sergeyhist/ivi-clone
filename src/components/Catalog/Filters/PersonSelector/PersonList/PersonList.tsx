import Image from "next/image";
import { useRouter } from "next/router";
import { forwardRef } from "react";
import styles from "./PersonList.module.sass";
import { IPerson } from "/src/types/IPerson";
import { useTranslation } from "next-i18next";

interface PersonListProps {
  type: string;
  inputValue: string;
  isLoading: boolean;
  items: IPerson[];
  getPerson: (person: string) => void;
}

const PersonList = forwardRef<HTMLUListElement, PersonListProps>(
  ({ type, inputValue, isLoading, items, getPerson }, ref) => {
    const router = useRouter();
    const { t } = useTranslation();

    const clickHandler = (person: IPerson): void => {
      getPerson(`${person.first_name_en} ${person.last_name_en}`);
    };

    const isNotFound =
      !isLoading && items.length === 0;

    return (
      <ul ref={ref} className={styles.list}>
        {isLoading && (
          <span className={styles.list__text}>{t("filters:search")}</span>
        )}
        {isNotFound && (
          <span className={styles.list__text}>
            {t(`filters:${type}notfound`)}
          </span>
        )}
        {!isLoading &&
          items.length > 0 &&
          items.map((item, i) => (
            <li
              onClick={() => {
                clickHandler(item);
              }}
              className={styles.list__item + " unselectable"}
              key={i}
            >
              <div className={styles.list__image}>
                <Image
                  fill
                  sizes="100%"
                  src={
                    item.img.includes("https") ? item.img : "https:" + item.img
                  }
                  alt="Person"
                />
              </div>
              <span className={styles.list__name}>
                {router.locale === "en"
                  ? `${item.first_name_en} ${item.last_name_en}`
                  : `${item.first_name_ru} ${item.last_name_ru}`}
              </span>
            </li>
          ))}
      </ul>
    );
  }
);

PersonList.displayName = "PersonList";

export default PersonList;
