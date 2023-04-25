import {FC} from "react";
import styles from "./Links.module.sass";
import {IGenreLinks} from "/src/types/IGenre";

interface LinkProps {
  linksSection: IGenreLinks
}

const Links: FC<LinkProps> = ({linksSection}) => {
  return (
    <div className={styles.list__container}>
      <h3 className={styles.list__title}>{linksSection.title}</h3>
      <div className={styles.links__container}>
        {
          linksSection.links.map((link, i) => {
            return (
              <div key={i} className={`${styles.list__item} nav-link active`}>
                {link}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Links;
