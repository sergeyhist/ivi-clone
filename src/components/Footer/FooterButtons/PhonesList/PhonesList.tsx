import Link from "next/link";
import { FC } from "react";
import styles from "./PhonesList.module.sass";

const PhonesList: FC = () => {
  return (
    <ul className={styles.list}>
      <li>
        <Link className={styles.list__phone} href="tel:88002344923">
          <span className={styles.list__number}>8 800 234-49-23</span>
          <span className={styles.list__description}>
            Бесплатно по России
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default PhonesList;
