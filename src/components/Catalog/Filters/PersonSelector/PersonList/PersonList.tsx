import Image from "next/image";
import { useRouter } from "next/router";
import { forwardRef } from "react";
import styles from "./PersonList.module.sass";
import { IPerson } from "/src/types/IPerson";
import { useTranslation } from "next-i18next";
import { getBackendImage } from "/src/utils/getBackendImg";

interface PersonListProps {
  type: string;
  isLoading: boolean;
  items: IPerson[];
  filter: string;
  getPerson: (person: string) => void;
}

const PersonList = forwardRef<HTMLUListElement, PersonListProps>(
  ({ type, isLoading, items, filter, getPerson }, ref) => {
    const router = useRouter();
    const { t } = useTranslation();

    const getPersonSlug = (person: IPerson): string =>
      `${person.first_name_en} ${person.last_name_en}`
        .replace(/ /g, "_")
        .toLowerCase();

    const personActive = (slug: string): string =>
      slug === filter ? ` ${styles.list__item_active}` : "";

    const isNotFound = !isLoading && items.length === 0;

    return (
      <ul data-testid="person-list" ref={ref} className={styles.list}>
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
              data-testid="list-item"
              onClick={() => {
                getPersonSlug(item) !== filter &&
                  getPerson(getPersonSlug(item));
              }}
              className={
                styles.list__item +
                personActive(getPersonSlug(item)) +
                " unselectable"
              }
              key={i}
            >
              <div className={styles.list__image}>
                <Image
                  fill
                  sizes="100%"
                  src={getBackendImage(item.img)}
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
