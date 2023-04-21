import { FC } from "react";
import styles from "./BreadCrumbs.module.sass";
import Link from "next/link";

interface IPage {
  route: string;
  name: string;
}

interface BreadCrumbsProps {
  pages: IPage[];
}

const BreadCrumbs: FC<BreadCrumbsProps> = ({ pages }) => {
  return (
    <section className={styles.section}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {pages.map((page, index) => (
            <li key={index} className={styles.list__item}>
              <Link className={styles.list__link} href={page.route}>
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default BreadCrumbs;
