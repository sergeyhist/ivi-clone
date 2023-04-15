import {FC} from "react";
import styles from "./TvLinks.module.sass"
import {tvLinks} from "/src/locales/tvDropDownData";

const TvLinks:FC = ()=>{
    return(
        <div className={styles.tv__links}>
            <h2 className={styles.tv__links_title}>ТВ онлайн</h2>
            <ul className={styles.tv__links_list}>
                {
                    tvLinks.titles.map((title,i)=>{
                        return(
                            <li className={styles.list__item} key={i}>
                                <a href={tvLinks.links[i]} target='_blank'>{title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>

    )
}

export default TvLinks