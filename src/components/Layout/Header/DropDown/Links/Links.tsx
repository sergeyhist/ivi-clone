import { FC } from "react";
import styles from "./Links.module.sass";
import Link from "next/link";

interface LinkProps {
  links: string[];
  hrefs: string[];
  title: string;
}

const Links: FC<LinkProps> = ({ links, title, hrefs}) => {
  return (
    <div className={styles.list__container}>
      <h3 className={styles.list__title}>{title}</h3>
      <div className={styles.links__container}>
        {links.map((link, i) => {
          return (
            <Link key={i} href={`/movies?${hrefs[i]}`}>
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
