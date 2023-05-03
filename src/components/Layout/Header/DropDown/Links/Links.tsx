import { FC } from "react";
import styles from "./Links.module.sass";
import Link from "next/link";

interface LinkProps {
  links: string[];
  title: string;
}

const Links: FC<LinkProps> = ({ links, title }) => {
  return (
    <div className={styles.list__container}>
      <h3 className={styles.list__title}>{title}</h3>
      <div className={styles.links__container}>
        {links.map((link, i) => {
          return (
            <Link key={i} href="/movies">
              <div className={`${styles.list__item} nav-link active`}>
                {link}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Links;
