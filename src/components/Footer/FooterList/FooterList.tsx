import { FC } from "react";
import FooterLink, {FooterLinkProps} from "../FooterLink/FooterLink";
import styles from "./FooterList.module.sass";

interface FooterListProps {
  items: Array<FooterLinkProps>;
}

const FooterList: FC<FooterListProps> = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((item, i) => (
        <li key={i} className={styles.list__item}>
          <FooterLink {...item} />
        </li>
      ))}
    </ul>
  );
};

export default FooterList;
