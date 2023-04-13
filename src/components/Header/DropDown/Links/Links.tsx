import {FC} from "react";
import styles from "./Links.module.sass";
import {GenreLinks} from "/src/types/genreType";

interface LinkProps {
    linksSection: GenreLinks
    rowDirection?: boolean
}

const Links: FC<LinkProps> = ({linksSection,rowDirection}) => {
    return (
        <div className={styles.list__container}>
            <h3 className={styles.list__title}>{linksSection.title}</h3>
            <div className={`${styles.links__container} ${rowDirection && styles.links__container__row}`}>
                {
                   linksSection.links.map((link,i)=>{
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

export default Links