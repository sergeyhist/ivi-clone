import {FC} from "react";
import styles from "./TabBar.module.sass";
import {iconsClassNames} from "/src/components/TabBar/TabBar.utils";
import {useTranslation} from "react-i18next";

const TabBar: FC = () => {
    const {t} = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {
                iconsClassNames.map((iconClass,i)=>{
                    return(
                        <a className={styles.content__item} key={i} href=''>
                                <div className={iconClass}></div>
                                <div className={styles.content__item__caption}>{t(`tabBar.links.${i}`)}</div>
                        </a>
                    )
                })
                }
            </div>
        </div>
    )
}

export default TabBar