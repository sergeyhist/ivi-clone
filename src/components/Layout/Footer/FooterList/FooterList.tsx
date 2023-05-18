import { FC } from "react";
import FooterLink from "../FooterLink/FooterLink";
import styles from "./FooterList.module.sass";
import ILink from "/src/types/ILink";

interface FooterListProps {
  items: Array<ILink>;
}

const FooterList: FC<FooterListProps> = ({ items }) => {
  return (
    <ul data-testid="footer-list" className={styles.list}>
      {items.map((item, i) => (
        <li key={i} className={styles.list__item}>
          <FooterLink {...item} />
        </li>
      ))}
    </ul>
  );
};

export default FooterList;
