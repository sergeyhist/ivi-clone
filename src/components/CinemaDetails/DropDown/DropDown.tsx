import { FC } from "react";
import styles from "./DropDown.module.sass";
import { paragrafs, list, bottomParagraf } from "./DropDown.utils";

interface DropDownProps {
  className?: string;
}

const DropDown: FC<DropDownProps> = ({ className = "" }) => {
  return (
    <div className={`${styles.dropdown} ${className}`}>
      {paragrafs.map((paragraf, index) => (
        <p key={index} className={styles.dropdown__paragraf}>
          {paragraf}
        </p>
      ))}
      <ul className={styles.list}>
        {list.map((item, index) => (
          <li key={index} className={styles.list__item}>
            {item}
          </li>
        ))}
      </ul>

      <p className={styles.dropdown__paragraf}>{bottomParagraf}</p>
    </div>
  );
};

export default DropDown;
