import {FC} from "react";
import {getGenreTabs} from "/src/components/Header/DropDown/Tabs/Tabs.utils";
import styles from './Tabs.module.sass';
import {DropDownType} from "/src/components/Header/Header.utils";

interface TabsProps {
    selectedGenre: DropDownType
}

const Tabs: FC<TabsProps> = ({selectedGenre}) => {
    return (
        <div className={styles.tabs__container}>
            {
                getGenreTabs(selectedGenre).map((tab, i) => {
                    return (
                        <div key={i} className={styles.tabs__item}>
                            {tab}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Tabs