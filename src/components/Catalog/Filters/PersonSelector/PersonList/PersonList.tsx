import Image from "next/image";
import { useRouter } from "next/router";
import { forwardRef } from "react";
import styles from "./PersonList.module.sass";
import { IPerson } from "/src/types/IPerson";

interface PersonListProps {
  items: IPerson[];
  getPerson: (person: string) => void;
}

const PersonList = forwardRef<HTMLUListElement, PersonListProps>(
  ({ items, getPerson }, ref) => {
    const router = useRouter();

    const clickHandler = (person: IPerson): void => {
      getPerson(`${person.first_name_en} ${person.last_name_en}`);
    };

    return (
      <ul ref={ref} className={styles.list}>
        {items.map((item, i) => (
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
