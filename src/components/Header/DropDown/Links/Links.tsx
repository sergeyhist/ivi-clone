import {FC} from "react";
import styles from "./Links.module.sass";
import {GenreLinks} from "/src/types/genreType";

interface LinkProps {
    linksSection: GenreLinks
}

const Links: FC<LinkProps> = ({linksSection}) => {
    return (
        <div className={styles.list__container}>
            <h3 className={styles.list__title}>{linksSection.title}</h3>
            <div className={styles.links__container}>
                {
                   linksSection.links.map((link,i)=>{
                        return (
                            <div key={i} className={styles.list__item}>
                                {link}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Links